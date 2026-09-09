// 2026-09-06 17:00 変更済み
import { and, desc, isNotNull, isNull, lt } from "drizzle-orm";
import { chatGPTSignOutPath, getFirebaseStaffUser, requireChatGPTUser } from "../chatgpt-auth";
import { getDb } from "../../db";
import { inquiries } from "../../db/schema";
import { reservations, courseReservations } from "../../db/schema";
import { isAdminEmail } from "../../lib/runtime-config";
import { getMailConfigurationStatus } from "../../lib/runtime-config";
import { getSiteContent } from "../../lib/site-content";
import AdminWorkspace from "./admin-workspace";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");

  if (!(await getFirebaseStaffUser()) && !isAdminEmail(user.email)) {
    return (
      <main className="admin-access-page">
        <div className="access-card">
          <div className="brand-mark">福</div>
          <h1>管理者権限がありません</h1>
          <p>{user.email} では、この管理画面を利用できません。</p>
          <a href={chatGPTSignOutPath("/admin")}>別のアカウントでログイン</a>
        </div>
      </main>
    );
  }

  let initialItems: (typeof inquiries.$inferSelect)[] = [];
  let initialTrashItems: (typeof inquiries.$inferSelect)[] = [];
  let initialReservations: (typeof reservations.$inferSelect)[] = [];
  let initialCourseReservations: (typeof courseReservations.$inferSelect)[] = [];
  let initialError = "";
  try {
    await getDb().delete(inquiries).where(
      and(
        isNotNull(inquiries.trashedAt),
        lt(inquiries.trashedAt, new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString()),
      ),
    );
    [initialItems, initialTrashItems, initialReservations, initialCourseReservations] = await Promise.all([
      getDb().select().from(inquiries).where(isNull(inquiries.trashedAt)).orderBy(desc(inquiries.createdAt), desc(inquiries.id)).limit(100),
      getDb().select().from(inquiries).where(isNotNull(inquiries.trashedAt)).orderBy(desc(inquiries.createdAt), desc(inquiries.id)).limit(100),
      getDb().select().from(reservations).orderBy(desc(reservations.createdAt), desc(reservations.id)).limit(100),
      getDb().select().from(courseReservations).orderBy(desc(courseReservations.reservationDate), desc(courseReservations.reservationTime)).limit(300),
    ]);
  } catch (error) {
    console.error("Initial inquiry list failed", error);
    initialError = "お問い合わせを読み込めませんでした。更新ボタンを押してください。";
  }

  const initialContent = await getSiteContent();
  return (
    <main className="admin-page">
      <header className="admin-topbar">
        <div className="admin-brand">
          <div className="brand-mark small">福</div>
          <div>
            <p>中国料理 福林楼</p>
            <h1>おせち・オードブル／コース予約 管理</h1>
          </div>
        </div>
        <div className="admin-user">
          <span>{user.displayName}</span>
          <a className="qr-download" href="/fukurinrou-osechi-qr.png" download>
            お客様画面のQRコードを保存
          </a>
          <a href={chatGPTSignOutPath("/")}>ログアウト</a>
        </div>
      </header>
      <AdminWorkspace
        initialItems={initialItems}
        initialTrashItems={initialTrashItems}
        initialMail={getMailConfigurationStatus(initialContent)}
        initialError={initialError}
        initialContent={initialContent}
        initialReservations={initialReservations}
        initialCourseReservations={initialCourseReservations}
      />
    </main>
  );
}

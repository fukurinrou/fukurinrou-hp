// 2026-09-06 17:00 変更済み
"use client";

import { CalendarCheck, CircleCheckBig, CircleDollarSign, Inbox, PanelsTopLeft, Trash2, UtensilsCrossed } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import type { SiteContent } from "../../lib/site-content-model";
import ContentEditor from "./content-editor";
import InquiryDashboard from "./inquiry-dashboard";
import ReservationDashboard from "./reservation-dashboard";
import CourseReservationDashboard from "./course-reservation-dashboard";

type Inquiry = {
  id: number;
  publicRef: string;
  customerName: string;
  customerEmail: string;
  product: string;
  category: string;
  message: string;
  status: string;
  notificationSent: boolean;
  acknowledgmentSent: boolean;
  replyBody: string | null;
  createdAt: string;
  answeredAt: string | null;
  trashedAt: string | null;
};

type MailStatus = {
  provider: "gmail" | "brevo" | null;
  providerLabel: string;
  service: boolean;
  sender: boolean;
  notifyTo: boolean;
  managerCc: boolean;
  ready: boolean;
  missing: string[];
};

export default function AdminWorkspace({
  initialItems,
  initialTrashItems,
  initialMail,
  initialError,
  initialContent,
  initialReservations,
  initialCourseReservations,
}: {
  initialItems: Inquiry[];
  initialTrashItems: Inquiry[];
  initialMail: MailStatus;
  initialError: string;
  initialContent: SiteContent;
  initialReservations: { id: number; publicRef: string; customerName: string; customerEmail: string; customerPhone: string; product: string; quantity: number; pickupDate: string; pickupTime: string; notes: string; status: string; notificationSent: boolean; acknowledgmentSent: boolean; createdAt: string }[];
  initialCourseReservations: { id: number; publicRef: string; reservationType: string; customerName: string; customerEmail: string; customerPhone: string; people: number; reservationDate: string; reservationTime: string; seatPreference: string; courseName: string; drinkPlan: string; perPersonAmount: string; totalAmount: string; notes: string; status: string }[];
}) {
  const [content, setContent] = useState(initialContent);

  return (
    <Tabs defaultValue="reservations" className="admin-workspace">
      <div className="workspace-tabs-wrap">
        <TabsList className="workspace-tabs" aria-label="管理する内容">
          <TabsTrigger value="reservations" className="workspace-tab"><CalendarCheck /> 商品申込み</TabsTrigger>
          <TabsTrigger value="courses" className="workspace-tab"><UtensilsCrossed /> 席・コース予約</TabsTrigger>
          <TabsTrigger value="paid" className="workspace-tab"><CircleDollarSign /> 会計済み</TabsTrigger>
          <TabsTrigger value="complete" className="workspace-tab"><CircleCheckBig /> 受け渡し完了</TabsTrigger>
          <TabsTrigger value="inquiries" className="workspace-tab">
            <Inbox /> お問い合わせ
          </TabsTrigger>
          <TabsTrigger value="trash" className="workspace-tab"><Trash2 /> ゴミ箱</TabsTrigger>
          <TabsTrigger value="content" className="workspace-tab">
            <PanelsTopLeft /> サイト編集
          </TabsTrigger>
      </TabsList>
      </div>
      <TabsContent value="inquiries">
        <InquiryDashboard
          initialItems={initialItems}
          initialMail={initialMail}
          initialError={initialError}
          replyTemplate={content.inquiryReplyTemplate}
        />
      </TabsContent>
      <TabsContent value="trash">
        <InquiryDashboard
          initialItems={initialTrashItems}
          initialMail={initialMail}
          initialError={initialError}
          replyTemplate={content.inquiryReplyTemplate}
          view="trash"
        />
      </TabsContent>
      <TabsContent value="content">
        <ContentEditor initialContent={content} onSaved={setContent} />
      </TabsContent>
      <TabsContent value="reservations">
        <ReservationDashboard initialItems={initialReservations} mail={initialMail} view="active" />
      </TabsContent>
      <TabsContent value="courses"><CourseReservationDashboard initialItems={initialCourseReservations} /></TabsContent>
      <TabsContent value="paid">
        <ReservationDashboard initialItems={initialReservations} mail={initialMail} view="paid" />
      </TabsContent>
      <TabsContent value="complete">
        <ReservationDashboard initialItems={initialReservations} mail={initialMail} view="complete" />
      </TabsContent>
    </Tabs>
  );
}

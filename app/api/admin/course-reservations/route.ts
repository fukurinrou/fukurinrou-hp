// 2026-09-08 23:58 変更済み
import { desc, eq } from "drizzle-orm";
import { getDb } from "../../../../db";
import { courseReservations } from "../../../../db/schema";
import { requireAdminApi } from "../../../../lib/admin-auth";
const statuses = new Set(["new", "handled", "paid", "complete", "cancelled"]);
export async function GET(){ const denied=await requireAdminApi(); if(denied)return denied; const reservations=await getDb().select().from(courseReservations).orderBy(desc(courseReservations.reservationDate),desc(courseReservations.reservationTime)).limit(300); return Response.json({reservations}); }
export async function PATCH(request:Request){const denied=await requireAdminApi();if(denied)return denied;const p=await request.json() as {id?:unknown,status?:unknown};const id=Number(p.id),status=typeof p.status==="string"?p.status:"";if(!Number.isInteger(id)||id<1||!statuses.has(status))return Response.json({error:"変更内容を確認してください。"},{status:400});const [reservation]=await getDb().update(courseReservations).set({status}).where(eq(courseReservations.id,id)).returning();return reservation?Response.json({reservation}):Response.json({error:"予約が見つかりませんでした。"},{status:404});}

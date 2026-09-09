// 2026-09-06 17:00 変更済み
import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const inquiries = sqliteTable("inquiries", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  publicRef: text("public_ref").notNull().unique(),
  customerName: text("customer_name").notNull().default(""),
  customerEmail: text("customer_email").notNull(),
  product: text("product").notNull(),
  category: text("category").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  notificationSent: integer("notification_sent", { mode: "boolean" })
    .notNull()
    .default(false),
  acknowledgmentSent: integer("acknowledgment_sent", { mode: "boolean" })
    .notNull()
    .default(false),
  replyBody: text("reply_body"),
  replyMessageId: text("reply_message_id"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  answeredAt: text("answered_at"),
  trashedAt: text("trashed_at"),
});

export const siteContent = sqliteTable("site_content", {
  id: integer("id").primaryKey(),
  contentJson: text("content_json").notNull(),
  updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const reservations = sqliteTable("reservations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  publicRef: text("public_ref").notNull().unique(),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone").notNull(),
  product: text("product").notNull(),
  quantity: integer("quantity").notNull().default(1),
  pickupDate: text("pickup_date").notNull(),
  pickupTime: text("pickup_time").notNull(),
  notes: text("notes").notNull().default(""),
  status: text("status").notNull().default("new"),
  notificationSent: integer("notification_sent", { mode: "boolean" }).notNull().default(false),
  acknowledgmentSent: integer("acknowledgment_sent", { mode: "boolean" }).notNull().default(false),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
});

export const courseReservations = sqliteTable("course_reservations", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  publicRef: text("public_ref").notNull().unique(),
  reservationType: text("reservation_type").notNull(),
  customerName: text("customer_name").notNull(),
  customerEmail: text("customer_email").notNull(),
  customerPhone: text("customer_phone").notNull(),
  people: integer("people").notNull(),
  reservationDate: text("reservation_date").notNull(),
  reservationTime: text("reservation_time").notNull(),
  seatPreference: text("seat_preference").notNull().default(""),
  courseName: text("course_name").notNull().default(""),
  drinkPlan: text("drink_plan").notNull().default(""),
  perPersonAmount: text("per_person_amount").notNull().default(""),
  totalAmount: text("total_amount").notNull().default(""),
  courseDishes: text("course_dishes").notNull().default(""),
  notes: text("notes").notNull().default(""),
  status: text("status").notNull().default("new"),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  cancelledAt: text("cancelled_at"),
});

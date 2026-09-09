-- 2026-09-08 23:58 変更済み
CREATE TABLE `course_reservations` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL, `public_ref` text NOT NULL, `reservation_type` text NOT NULL,
  `customer_name` text NOT NULL, `customer_email` text NOT NULL, `customer_phone` text NOT NULL, `people` integer NOT NULL,
  `reservation_date` text NOT NULL, `reservation_time` text NOT NULL, `seat_preference` text DEFAULT '' NOT NULL,
  `course_name` text DEFAULT '' NOT NULL, `drink_plan` text DEFAULT '' NOT NULL, `per_person_amount` text DEFAULT '' NOT NULL,
  `total_amount` text DEFAULT '' NOT NULL, `course_dishes` text DEFAULT '' NOT NULL, `notes` text DEFAULT '' NOT NULL,
  `status` text DEFAULT 'new' NOT NULL, `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL, `cancelled_at` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `course_reservations_public_ref_unique` ON `course_reservations` (`public_ref`);

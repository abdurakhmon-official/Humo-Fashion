ALTER TABLE "orders" ALTER COLUMN "order_number" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "customer_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "orders" ALTER COLUMN "txn_id" SET DATA TYPE uuid;
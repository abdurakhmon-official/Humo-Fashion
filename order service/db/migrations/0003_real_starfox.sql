ALTER TABLE "cart_line_items" ALTER COLUMN "product_id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "cart_line_items" ALTER COLUMN "item_name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "cart_line_items" ALTER COLUMN "variant" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "cart_line_items" ALTER COLUMN "quantity" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "cart_line_items" ALTER COLUMN "amount" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "carts" ALTER COLUMN "customer_id" SET DATA TYPE uuid;
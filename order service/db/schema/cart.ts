import { InferSelectModel, InferInsertModel, relations } from "drizzle-orm";
import { pgTable, uuid, integer, timestamp, varchar } from "drizzle-orm/pg-core";

export const carts = pgTable("carts", {
  id: uuid("id").defaultRandom().primaryKey(),
  customerId: uuid("customer_id").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Cart = InferSelectModel<typeof carts>;
export type NewCart = InferInsertModel<typeof carts>;

export const cartLineItems = pgTable("cart_line_items", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("product_id").notNull(),
  cartId: uuid("cart_id")
    .notNull()
    .references(() => carts.id, { onDelete: "cascade" }),
  itemName: varchar("item_name", { length: 255 }).notNull(),
  variant: varchar("variant", { length: 255 }),
  quantity: integer("quantity").notNull(),
  price: integer("amount").notNull(), 
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type CartLineItem = InferSelectModel<typeof cartLineItems>;
export type NewCartLineItem = InferInsertModel<typeof cartLineItems>;

export const cartRelations = relations(carts, ({ many }) => ({
  lineItems: many(cartLineItems),
}));

export const lineItemsRelations = relations(cartLineItems, ({ one }) => ({
  cart: one(carts, {
    fields: [cartLineItems.cartId],
    references: [carts.id],
  }),
}));

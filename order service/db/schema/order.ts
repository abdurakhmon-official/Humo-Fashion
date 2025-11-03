import { InferSelectModel, relations } from "drizzle-orm";
import { numeric, pgTable, timestamp, varchar, integer, uuid} from 'drizzle-orm/pg-core'

export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderNumber: uuid("order_number").notNull().unique(),
  customerId: uuid("customer_id").notNull(),
  amount: numeric("amount").notNull(),
  status: varchar("status").default("pending"),
  txnId: uuid("txn_id"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const orderLineItems = pgTable('order_line_items', {
    id: uuid('id').defaultRandom().primaryKey(),
    itemName: varchar('item_name').notNull(),
    quantity: integer('quantity').notNull(),
    price: numeric('amount').notNull(),
    orderId: uuid('order_id')
        .references(() => orders.id, {onDelete: 'cascade'})
        .notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const orderRelations = relations(orders, ({ many }) => ({
    lineItems: many(orderLineItems)
}))

export const orderItemRelations = relations(orderLineItems, ({ one }) => ({
    order: one(orders, {
        fields: [orderLineItems.orderId],
        references: [orders.id]
    })
}))

export type Order = InferSelectModel<typeof orders>
export type OrderLineItem = InferSelectModel<typeof orderLineItems>
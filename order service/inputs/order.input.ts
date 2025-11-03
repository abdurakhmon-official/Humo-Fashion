import { z } from "zod";

export const CreateOrderInputSchema = z.object({
  orderNumber: z.string().uuid(),
  customerId: z.string().uuid(),
  amount: z.number(),
  status: z.string().optional(),
  txnId: z.string().uuid().optional(),
});

export const OrderLineItemInputSchema = z.object({
    id: z.string(),
    productId: z.string(),
    itemName: z.string(),
    quantity: z.number(),
    price: z.string(),
    orderId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
});

export const OrderWithLineItemsInputSchema = z.object({
    id: z.string().optional(),
    customerId: z.string(),
    orderNumber: z.string(),
    txnId: z.string().nullable(),
    amount: z.number(),
    status: z.string(),
    orderItems: z.array(OrderLineItemInputSchema),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
})

export const InProcessOrderInputSchema = z.object({
    id: z.string().optional(),
    orderNumber: z.string(),
    status: z.string(),
    customerId: z.string(),
    amount: z.number(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
})

export type CreateOrderInput = z.infer<typeof CreateOrderInputSchema>;
export type OrderLineItemInput = z.infer<typeof OrderLineItemInputSchema>;
export type OrderWithLineItemsInput = z.infer<typeof OrderWithLineItemsInputSchema>
export type InProcessOrderInput = z.infer<typeof InProcessOrderInputSchema>

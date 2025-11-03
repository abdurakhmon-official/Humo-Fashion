import { z } from "zod";

// cart schemas
export const CreateCartInputSchema = z.object({
  productId: z.string(),
  quantity: z.number(),
});

export const EditCartInputSchema = z.object({
  id: z.string(),
  quantity: z.number(),
});

// cart line items schemas
export const CartLineItemInputSchema = z.object({
  id: z.string(),
  productId: z.string(),
  itemName: z.string(),
  price: z.number().min(0),
  quantity: z.number(),
  variant: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
  availability: z.number().optional(),
});

export const CartWithLineItemsInputSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  lineItems: z.array(CartLineItemInputSchema),
  createdAt: z.date(),
  updatedAt: z.date(),
});


// types
export type CreateCartInput = z.infer<typeof CreateCartInputSchema>
export type EditCartInput = z.infer<typeof EditCartInputSchema>
export type CartLineItemInput = z.infer<typeof CartLineItemInputSchema>
export type CartWithLineItemsInput = z.infer<typeof CartWithLineItemsInputSchema>

// payload type
export type PayloadCartInput = { id: string } & Partial<CreateCartInput>
export type PayloadCartLineItemInput = {id: string} & Partial<CartLineItemInput>


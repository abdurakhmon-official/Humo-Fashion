// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type OrderLineItemInput = {
    id: string;
    productId: string;
    itemName: string;
    quantity: number;
    price: string;
    orderId: string;
    createdAt: Date;
    updatedAt: Date;
};
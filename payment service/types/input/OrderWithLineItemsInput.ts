// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type OrderWithLineItemsInput = {
    id?: string | undefined;
    customerId: string;
    orderNumber: string;
    txnId: string | null;
    amount: number;
    status: string;
    orderItems: {
        id: string;
        productId: string;
        itemName: string;
        quantity: number;
        price: string;
        orderId: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
};
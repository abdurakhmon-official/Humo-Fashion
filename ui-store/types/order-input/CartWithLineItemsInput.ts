// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type CartWithLineItemsInput = {
    id: string;
    customerId: string;
    lineItems: {
        id: string;
        productId: string;
        itemName: string;
        price: number;
        quantity: number;
        variant: string | null;
        createdAt: Date;
        updatedAt: Date;
        availability?: number | undefined;
    }[];
    createdAt: Date;
    updatedAt: Date;
};
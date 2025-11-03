// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type CreateOrderInput = {
    orderNumber: string;
    customerId: string;
    amount: number;
    status?: string | undefined;
    txnId?: string | undefined;
};
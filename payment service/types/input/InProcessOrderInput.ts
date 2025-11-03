// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type InProcessOrderInput = {
    id?: string | undefined;
    orderNumber: string;
    status: string;
    customerId: string;
    amount: number;
    createdAt: Date | null;
    updatedAt: Date | null;
};
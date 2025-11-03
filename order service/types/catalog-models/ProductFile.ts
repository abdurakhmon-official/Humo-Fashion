// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type ProductFile = {
    id: string;
    file: string;
    name: string;
    size: number;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    product: any;
};
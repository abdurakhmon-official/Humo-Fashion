// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type Product = {
    id: string;
    brandId: string | null;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    brand: any | null;
    files: any[];
};
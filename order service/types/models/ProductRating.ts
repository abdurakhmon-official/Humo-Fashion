// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type ProductRating = {
    id: string;
    productId: string;
    userId: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    product: any;
    user: any;
};
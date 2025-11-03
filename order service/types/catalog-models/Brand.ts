// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type Brand = {
    id: string;
    name: string;
    image: string | null;
    countryId: string;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    country: any;
    products: any[];
};
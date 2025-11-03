// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type User = {
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    id: string;
    name: string;
    username: string;
    password: string;
    phone1: string | null;
    address: string | null;
    email: string | null;
    image: string | null;
    active: boolean;
    deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    rating: any[];
};
// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

export type Users = {
    role: "SUPER_ADMIN" | "ADMIN" | "USER";
    id: string;
    firstName: string | null;
    lastName: string | null;
    username: string;
    email: string;
    phone: string | null;
    password: string;
    profileImage: string | null;
    deleted: boolean;
    createdAt: Date | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
};
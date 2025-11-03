// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type CreateProductInput = {
    name: string;
    description: string;
    price: number;
    discount: number | null;
    stock: number;
    sold?: number;
    type: string | null;
    color: string | null;
    size?: string[] | undefined;
    brandId: string;
    files: {
        id?: (string | null) | undefined;
        file: string;
        name: string;
        size: number;
    }[];
};
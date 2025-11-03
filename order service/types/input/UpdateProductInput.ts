// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type UpdateProductInput = {
    name?: string | undefined;
    description?: string | undefined;
    price?: number | undefined;
    discount?: (number | null) | undefined;
    stock?: number | undefined;
    sold?: number | undefined;
    type?: (string | null) | undefined;
    color?: (string | null) | undefined;
    size?: (string[] | undefined) | undefined;
    brandId?: string | undefined;
    files?: {
        id?: (string | null) | undefined;
        file: string;
        name: string;
        size: number;
    }[] | undefined;
};
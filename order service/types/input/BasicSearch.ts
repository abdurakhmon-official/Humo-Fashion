// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type BasicSearch = {
    size?: number | null;
    page?: number | null;
    search?: (string | undefined) | null;
    sortBy?: {
        key: string;
        order?: "asc" | "desc";
    }[] | undefined;
    options?: {
        [x: string]: any;
    } | undefined;
};
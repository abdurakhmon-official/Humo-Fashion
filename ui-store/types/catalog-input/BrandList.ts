// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type BrandList = {
    id: string;
    name: string;
    country: {
        id: string;
        name: string;
    };
}[];
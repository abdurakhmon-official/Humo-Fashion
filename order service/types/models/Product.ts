// WARNING: Do not change this file manually. Use yarn generate:types from the catalog service project to update it

 export type Product = {
    type: ("MEN" | "WOMEN" | "KIDS") | null;
    color: ("RED" | "GREEN" | "BLACK" | "GRAY" | "BLUE" | "PURPLE") | null;
    size: ("XS" | "S" | "M" | "L" | "XL" | "XXL") | null;
    id: string;
    brandId: string | null;
    name: string;
    description: string;
    overview: string | null;
    information: string | null;
    price: number;
    price2: number | null;
    discount: number | null;
    stock: number;
    sold: number;
    like_count: number;
    deleted: boolean;
    average_rating: number;
    createdAt: Date;
    updatedAt: Date;
    brand: any | null;
    files: any[];
    ratings: any[];
};
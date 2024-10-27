import {ICategory} from "@/src/models/ICategory";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    characteristic: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    category_id: number;
    created_at: string;
    updated_at: string;
}
import {IProduct} from "@/src/models/IProduct";

export interface ICartItem {
    id: number;
    cart_id: number;
    product_id: number;
    quantity: number;
    product: IProduct;
}

export interface ICart {
    id: number;
    user_id: number;
    items: ICartItem[];
    created_at: string;
    updated_at: string;
}
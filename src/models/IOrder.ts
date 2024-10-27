import {IProduct} from "@/src/models/IProduct";

export interface IOrder {
    id: number;
    user_id: number;
    total: number;
    status: string;
    items: IOrderItem[];
    created_at: string;
    updated_at: string;
}

export interface IOrderItem {
    id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    price: number;
    product: IProduct;
}
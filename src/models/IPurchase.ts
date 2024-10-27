export interface IPurchase {
    id: number;
    user_id: number;
    subscription_id: number;
    purchase_date: string;
    expiration_date: string;
    remaining_guest_visits: number;
}
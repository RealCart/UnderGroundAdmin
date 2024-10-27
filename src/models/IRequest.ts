export interface IRequest {
    id: number;
    subscription_id: number;
    user_id: number;
    type: string;
    reason: string;
    status: string;
    created_at: string;
}
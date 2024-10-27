export interface INews {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface ILike {
    id: number;
    news_id: number;
    user_id: number;
    created_at: string;
}

export interface IComment {
    id: number;
    news_id: number;
    user_id: number;
    comment: string;
    created_at: string;
}

export interface IView {
    id: number;
    news_id: number;
    user_id: number;
    viewed_at: string;
}
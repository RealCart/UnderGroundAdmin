export interface IAchievement {
    id: number;
    name: string;
    description: string;
    points: number;
}

export interface ILevel {
    id: number;
    name: string;
    required_points: number;
}

export interface IUserAchievement {
    user_id: number;
    achievement_id: number;
    is_earned: boolean;
}
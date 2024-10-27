import {ITrainerComment} from "@/src/models/ITrainerComment";

export interface ITrainer {
    id: number;
    name: string;
    bio: string;
    experience: string;
    instagram: string;
    rating: number;
    comments: ITrainerComment[];
}
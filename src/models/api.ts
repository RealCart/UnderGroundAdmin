import {IUser} from "@/src/models/IUser";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface LoginRequest {
    email: string;
    password: string;
}

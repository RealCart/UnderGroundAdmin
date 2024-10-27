export interface IClub {
    id: number;
    name: string;
    city: string;
    worktime: string;
    address: string;
    price: number;
    description: string;
    image_url: string;
    active: number;
}

export interface IClubMedia {
    id: number;
    club_id: number;
    media_type: string;
    media_url: string;
}
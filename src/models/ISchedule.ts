export interface ISchedule {
    id: number;
    club_id: number;
    program_id: number;
    start_time: string;
    end_time: string;
    trainer_id: number;
    available_slots: number;
    active: number;
}
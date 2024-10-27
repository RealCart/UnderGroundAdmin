import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {ISchedule} from "@/src/models/ISchedule";

export const scheduleAPI = createApi({
    reducerPath: 'scheduleAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createSchedule: build.mutation<ISchedule, Partial<ISchedule>>({
            query: (scheduleData) => ({
                url: '/api/schedules',
                method: 'POST',
                body: scheduleData,
            }),
        }),
        getAllSchedules: build.query<ISchedule[], void>({
            query: () => '/api/schedules',
        }),
        getScheduleById: build.query<ISchedule, number>({
            query: (id) => `/api/schedules/${id}`,
        }),
        getScheduleByTrainerId: build.query<ISchedule[], number>({
            query: (trainerId) => `/api/schedules/trainer/${trainerId}`,
        }),
        getScheduleByProgramId: build.query<ISchedule[], number>({
            query: (programId) => `/api/schedules/program/${programId}`,
        }),
        updateSchedule: build.mutation<ISchedule, { programId: number; updatedSchedule: Partial<ISchedule> }>({
            query: ({programId, updatedSchedule}) => ({
                url: `/api/schedules/program/${programId}`,
                method: 'PUT',
                body: updatedSchedule,
            }),
        }),
        deleteSchedule: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/schedules/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateScheduleMutation,
    useGetAllSchedulesQuery,
    useGetScheduleByIdQuery,
    useGetScheduleByTrainerIdQuery,
    useGetScheduleByProgramIdQuery,
    useUpdateScheduleMutation,
    useDeleteScheduleMutation
} = scheduleAPI;

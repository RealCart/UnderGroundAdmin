import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";

export const groupTrainingAPI = createApi({
    reducerPath: 'groupTrainingAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        bookTraining: build.mutation<void, { userId: number; trainingId: number }>({
            query: (data) => ({
                url: '/api/group-trainings/register',
                method: 'POST',
                body: data,
            }),
        }),
        getAvailableSeats: build.query<number, number>({
            query: (id) => `/api/group-trainings/available-seats/${id}`,
        }),
        cancelTraining: build.mutation<void, { userId: number; trainingId: number }>({
            query: (data) => ({
                url: '/api/group-trainings/cancel',
                method: 'DELETE',
                body: data,
            }),
        }),
    }),
});

export const {
    useBookTrainingMutation,
    useGetAvailableSeatsQuery,
    useCancelTrainingMutation
} = groupTrainingAPI;

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IPersonalTrainingSession} from "@/src/models/IPersonalTrainingSession";

export const personalTrainingAPI = createApi({
    reducerPath: 'personalTrainingAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createSession: build.mutation<IPersonalTrainingSession, Partial<IPersonalTrainingSession>>({
            query: (sessionData) => ({
                url: '/api/personal-trainings',
                method: 'POST',
                body: sessionData,
            }),
        }),
        getRemainingSessions: build.query<IPersonalTrainingSession[], void>({
            query: () => '/api/personal-trainings',
        }),
        completeSession: build.mutation<void, { session_id: number }>({
            query: ({session_id}) => ({
                url: `/api/personal-trainings/${session_id}`,
                method: 'PUT',
            }),
        }),
        changeTrainer: build.mutation<void, { trainer_id: number }>({
            query: ({trainer_id}) => ({
                url: `/api/personal-trainings/${trainer_id}`,
                method: 'PUT',
            }),
        }),
        deleteSession: build.mutation<void, { id: number }>({
            query: ({id}) => ({
                url: `/api/personal-trainings/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateSessionMutation,
    useGetRemainingSessionsQuery,
    useCompleteSessionMutation,
    useChangeTrainerMutation,
    useDeleteSessionMutation
} = personalTrainingAPI;

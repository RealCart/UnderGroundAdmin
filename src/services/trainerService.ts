import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {ITrainer} from "@/src/models/ITrainer";
import {ITrainerComment} from "@/src/models/ITrainerComment";

export const trainerAPI = createApi({
    reducerPath: 'trainerAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createTrainer: build.mutation<ITrainer, Partial<ITrainer>>({
            query: (trainerData) => ({
                url: '/api/trainers',
                method: 'POST',
                body: trainerData,
            }),
        }),
        getAllTrainers: build.query<ITrainer[], void>({
            query: () => '/api/trainers',
        }),
        getTrainerById: build.query<ITrainer, number>({
            query: (id) => `/api/trainers/${id}`,
        }),
        addComment: build.mutation<ITrainerComment, Partial<ITrainerComment>>({
            query: (commentData) => ({
                url: '/api/trainers/comment',
                method: 'POST',
                body: commentData,
            }),
        }),
        addRating: build.mutation<ITrainer, { trainerId: number; rating: number }>({
            query: ({trainerId, rating}) => ({
                url: `/api/trainers/rating`,
                method: 'PUT',
                body: {trainerId, rating},
            }),
        }),
    }),
});

export const {
    useCreateTrainerMutation,
    useGetAllTrainersQuery,
    useGetTrainerByIdQuery,
    useAddCommentMutation,
    useAddRatingMutation
} = trainerAPI;

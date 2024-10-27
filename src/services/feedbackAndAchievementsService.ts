import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IFeedback} from "@/src/models/IFeedBack";
import {IAchievement} from "@/src/models/IAchievement";
import {ILeaderboardEntry} from "@/src/models/ILeaderboardEntry";

export const feedbackAndAchievementsAPI = createApi({
    reducerPath: 'feedbackAndAchievementsAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        submitFeedback: build.mutation<IFeedback, Partial<IFeedback>>({
            query: (feedbackData) => ({
                url: '/api/feedback',
                method: 'POST',
                body: feedbackData,
            }),
        }),
        getAllFeedbacks: build.query<IFeedback[], void>({
            query: () => '/api/feedback',
        }),

        addAchievement: build.mutation<IAchievement, Partial<IAchievement>>({
            query: (achievementData) => ({
                url: '/api/achievements',
                method: 'POST',
                body: achievementData,
            }),
        }),
        getAchievements: build.query<IAchievement[], void>({
            query: () => '/api/achievements',
        }),
        getAchievementById: build.query<IAchievement, number>({
            query: (id) => `/api/achievements/${id}`,
        }),
        updateAchievement: build.mutation<IAchievement, { id: number; updatedAchievement: Partial<IAchievement> }>({
            query: ({id, updatedAchievement}) => ({
                url: `/api/achievements/${id}`,
                method: 'PUT',
                body: updatedAchievement,
            }),
        }),
        deleteAchievement: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/achievements/${id}`,
                method: 'DELETE',
            }),
        }),
        getLeaderboard: build.query<ILeaderboardEntry[], void>({
            query: () => '/api/leaderboard',
        }),
    }),
});

export const {
    useSubmitFeedbackMutation,
    useGetAllFeedbacksQuery,
    useAddAchievementMutation,
    useGetAchievementsQuery,
    useGetAchievementByIdQuery,
    useUpdateAchievementMutation,
    useDeleteAchievementMutation,
    useGetLeaderboardQuery
} = feedbackAndAchievementsAPI;

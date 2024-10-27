import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IReward} from "@/src/models/IReward";
import {IUserAchievement} from "@/src/models/IAchievement";

export const rewardsAPI = createApi({
    reducerPath: 'rewardsAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        addReward: build.mutation<IReward, Partial<IReward>>({
            query: (rewardData) => ({
                url: '/api/rewards',
                method: 'POST',
                body: rewardData,
            }),
        }),
        getAllRewards: build.query<IReward[], void>({
            query: () => '/api/rewards',
        }),
        getRewardById: build.query<IReward, number>({
            query: (id) => `/api/rewards/${id}`,
        }),
        updateReward: build.mutation<IReward, { id: number; updatedReward: Partial<IReward> }>({
            query: ({id, updatedReward}) => ({
                url: `/api/rewards/${id}`,
                method: 'PUT',
                body: updatedReward,
            }),
        }),
        deleteReward: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/rewards/${id}`,
                method: 'DELETE',
            }),
        }),
        earnUserAchievement: build.mutation<IUserAchievement, Partial<IUserAchievement>>({
            query: (achievementData) => ({
                url: '/api/user/achievements',
                method: 'POST',
                body: achievementData,
            }),
        }),
        getAchievementsByUserId: build.query<IUserAchievement[], number>({
            query: (userId) => `/api/achievements/${userId}`,
        }),
    }),
});

export const {
    useAddRewardMutation,
    useGetAllRewardsQuery,
    useGetRewardByIdQuery,
    useUpdateRewardMutation,
    useDeleteRewardMutation,
    useEarnUserAchievementMutation,
    useGetAchievementsByUserIdQuery
} = rewardsAPI;

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {ISubscription} from "@/src/models/ISubscription";

export const subscriptionAPI = createApi({
    reducerPath: 'subscriptionAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createSubscription: build.mutation<ISubscription, Partial<ISubscription>>({
            query: (subscriptionData) => ({
                url: '/api/subscriptions',
                method: 'POST',
                body: subscriptionData,
            }),
        }),
        getAllSubscriptions: build.query<ISubscription[], void>({
            query: () => '/api/subscriptions',
        }),
        deleteSubscription: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/subscriptions/${id}`,
                method: 'DELETE',
            }),
        }),
        updateSubscription: build.mutation<ISubscription, Partial<ISubscription>>({
            query: (subscriptionData) => ({
                url: '/api/subscriptions',
                method: 'PUT',
                body: subscriptionData,
            }),
        }),
        purchaseSubscription: build.mutation<void, { userId: number; subscriptionId: number }>({
            query: (data) => ({
                url: '/api/purchase-subscription',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useCreateSubscriptionMutation,
    useGetAllSubscriptionsQuery,
    useDeleteSubscriptionMutation,
    useUpdateSubscriptionMutation,
    usePurchaseSubscriptionMutation
} = subscriptionAPI;

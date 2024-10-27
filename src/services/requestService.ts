import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IRequest} from "@/src/models/IRequest";

export const requestAPI = createApi({
    reducerPath: 'requestAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createRequest: build.mutation<IRequest, Partial<IRequest>>({
            query: (requestData) => ({
                url: '/api/request',
                method: 'POST',
                body: requestData,
            }),
        }),
        getRequests: build.query<IRequest[], void>({
            query: () => '/api/requests',
        }),
        getRequestStatusByClientId: build.query<IRequest, number>({
            query: (clientId) => `/api/request-status?client_id=${clientId}`,
        }),
        updateRequestStatus: build.mutation<IRequest, Partial<IRequest>>({
            query: (requestStatusData) => ({
                url: '/api/request-status',
                method: 'PUT',
                body: requestStatusData,
            }),
        }),
        deleteRequest: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/request/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateRequestMutation,
    useGetRequestsQuery,
    useGetRequestStatusByClientIdQuery,
    useUpdateRequestStatusMutation,
    useDeleteRequestMutation
} = requestAPI;

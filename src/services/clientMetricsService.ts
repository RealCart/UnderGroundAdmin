import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IClientMetric} from "@/src/models/IClientMetric";

export const clientMetricsAPI = createApi({
    reducerPath: 'clientMetricsAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        addClientMetrics: build.mutation<IClientMetric, Partial<IClientMetric>>({
            query: (metricsData) => ({
                url: '/api/metrics/client',
                method: 'POST',
                body: metricsData,
            }),
        }),
        getClientMetrics: build.query<IClientMetric, number>({
            query: (id) => `/api/metrics/client/${id}`,
        }),
        updateClientMetrics: build.mutation<IClientMetric, Partial<IClientMetric>>({
            query: (metricsData) => ({
                url: '/api/metrics/client',
                method: 'PUT',
                body: metricsData,
            }),
        }),
    }),
});

export const {
    useAddClientMetricsMutation,
    useGetClientMetricsQuery,
    useUpdateClientMetricsMutation
} = clientMetricsAPI;

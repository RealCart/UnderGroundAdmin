import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IClientVisit} from "@/src/models/IClientVisit";

export const clientVisitAPI = createApi({
    reducerPath: 'clientVisitAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        addVisit: build.mutation<IClientVisit, Partial<IClientVisit>>({
            query: (visitData) => ({
                url: '/api/client-visit',
                method: 'POST',
                body: visitData,
            }),
        }),
        getVisitsForPeriod: build.query<IClientVisit[], { startDate: string; endDate: string }>({
            query: ({startDate, endDate}) => `/api/client-visit?start_date=${startDate}&end_date=${endDate}`,
        }),
    }),
});

export const {
    useAddVisitMutation,
    useGetVisitsForPeriodQuery
} = clientVisitAPI;

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IClub} from "@/src/models/IClub";

export const clubAPI = createApi({
    reducerPath: 'clubAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createClub: build.mutation<IClub, Partial<IClub>>({
            query: (clubData) => ({
                url: '/api/clubs',
                method: 'POST',
                body: clubData,
            }),
        }),
        getClubs: build.query<IClub[], void>({
            query: () => '/api/clubs',
        }),
        getClubById: build.query<IClub, number>({
            query: (id) => `/api/clubs/${id}`,
        }),
        deleteClubById: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/clubs/${id}`,
                method: 'DELETE',
            }),
        }),
        updateClub: build.mutation<IClub, { id: number; updatedClub: Partial<IClub> }>({
            query: ({id, updatedClub}) => ({
                url: `/api/clubs/${id}`,
                method: 'PUT',
                body: updatedClub,
            }),
        }),
    }),
});

export const {
    useCreateClubMutation,
    useGetClubsQuery,
    useGetClubByIdQuery,
    useDeleteClubByIdMutation,
    useUpdateClubMutation
} = clubAPI;

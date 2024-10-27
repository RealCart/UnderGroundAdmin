import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IClubMedia} from "@/src/models/IClub";

export const clubMediaAPI = createApi({
    reducerPath: 'clubMediaAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createMedia: build.mutation<IClubMedia, Partial<IClubMedia>>({
            query: (mediaData) => ({
                url: '/api/media',
                method: 'POST',
                body: mediaData,
            }),
        }),
        getMediaByClubId: build.query<IClubMedia[], number>({
            query: (clubId) => `/api/media?club_id=${clubId}`,
        }),
        updateMedia: build.mutation<IClubMedia, Partial<IClubMedia>>({
            query: (mediaData) => ({
                url: '/api/media',
                method: 'PUT',
                body: mediaData,
            }),
        }),
        deleteMedia: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/media/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateMediaMutation,
    useGetMediaByClubIdQuery,
    useUpdateMediaMutation,
    useDeleteMediaMutation
} = clubMediaAPI;

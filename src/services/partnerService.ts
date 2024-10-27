import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "@/src/http";
import {IPartner} from "@/src/models/IPartner";

export const partnerAPI = createApi({
    reducerPath: 'partnerAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createPartner: build.mutation({
            query: (partnerData) => ({
                url: '/api/partners',
                method: 'POST',
                body: partnerData,
            })
        }),
        getPartners: build.query<IPartner[], void>({
            query: () => '/api/partners',
        }),
        updatePartner: build.mutation<IPartner, Partial<IPartner>>({
            query: (partnerData) => ({
                url: '/api/partners',
                method: 'PUT',
                body: partnerData,
            }),
        }),
        deletePartner: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/partners/${id}`,
                method: 'DELETE',
            }),
        }),
    })
});

export const {
    useCreatePartnerMutation,
    useGetPartnersQuery,
    useUpdatePartnerMutation,
    useDeletePartnerMutation
} = partnerAPI;
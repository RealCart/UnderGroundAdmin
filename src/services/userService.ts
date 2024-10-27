// import {IUser} from "@/src/models/IUser";
// import $api from "@/src/http";
// import {AxiosResponse} from "axios";
//
// export const fetchUsers = (): Promise<AxiosResponse<IUser[]>> => {
//     return $api.get<IUser[]>('/users');
// }

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {IUser} from "@/src/models/IUser";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        fetchUsers: build.query<IUser[], void>({
            query: () => '/api/trainers',
        }),

        createUser: build.mutation<IUser, Partial<IUser>>({
            query: (newUser) => ({
                url: '/api/trainers',
                method: 'POST',
                body: newUser,
            }),
        }),

        updateUser: build.mutation<IUser, Partial<IUser> & { id: number }>({
            query: ({id, ...updatedUser}) => ({
                url: `/api/trainers/${id}`,
                method: 'PUT',
                body: updatedUser,
            }),
        }),

        deleteUser: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/trainers/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

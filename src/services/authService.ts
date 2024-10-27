import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {ITokens} from "@/src/models/ITokens";
import {ISignInRequest} from "@/src/models/ISignInRequest";
import {IUser} from "@/src/models/IUser";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        signUp: build.mutation<ITokens, IUser>({
            query: (signUpData) => ({
                url: '/api/user/sign_up',
                method: 'POST',
                body: signUpData,
            }),
        }),
        signIn: build.mutation<ITokens, ISignInRequest>({
            query: (signInData) => ({
                url: '/api/user/sign_in',
                method: 'POST',
                body: signInData,
            }),
        }),
    }),
});

export const {useSignUpMutation, useSignInMutation} = authAPI;

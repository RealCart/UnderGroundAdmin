import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from "@/src/http";
import {ICart, ICartItem} from "@/src/models/ICart";

export const cartAPI = createApi({
    reducerPath: 'cartAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createCart: build.mutation<ICart, Partial<ICart>>({
            query: (cartData) => ({
                url: '/api/carts',
                method: 'POST',
                body: cartData,
            }),
        }),
        addItemToCart: build.mutation<ICartItem, Partial<ICartItem>>({
            query: (itemData) => ({
                url: '/api/carts/items',
                method: 'POST',
                body: itemData,
            }),
        }),
        getCartById: build.query<ICart, number>({
            query: (id) => `/api/carts/${id}`,
        }),
        deleteItemFromCart: build.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/api/carts/items/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateCartMutation,
    useAddItemToCartMutation,
    useGetCartByIdQuery,
    useDeleteItemFromCartMutation
} = cartAPI;

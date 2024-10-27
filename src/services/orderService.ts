import {createApi} from '@reduxjs/toolkit/query/react';
import {IOrder} from "@/src/models/IOrder";
import {createBaseQuery} from "@/src/http";

export const orderAPI = createApi({
    reducerPath: 'orderAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        // Создание нового заказа (POST)
        createOrder: build.mutation<IOrder, Partial<IOrder>>({
            query: (newOrder) => ({
                url: `/api/orders`,
                method: 'POST',
                body: newOrder,
            }),
        }),

        // Получение заказа по id (GET)
        getOrderById: build.query<IOrder, number>({
            query: (id) => `/api/orders/${id}`,
        }),

        // Обновление заказа по id (PUT)
        updateOrderById: build.mutation<IOrder, { id: number; updatedOrder: Partial<IOrder> }>({
            query: ({id, updatedOrder}) => ({
                url: `/api/orders/${id}`,
                method: 'PUT',
                body: updatedOrder,
            }),
        }),

        // Получение всех заказов по id пользователя (GET)
        getOrdersByUserId: build.query<IOrder[], number>({
            query: (userId) => `/api/orders/user/${userId}`,
        }),
    }),
});

export const {
    useCreateOrderMutation,
    useGetOrderByIdQuery,
    useUpdateOrderByIdMutation,
    useGetOrdersByUserIdQuery
} = orderAPI;

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IProduct} from "@/src/models/IProduct";


export const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createProduct: build.mutation<IProduct, Partial<IProduct>>({
            query: (productData) => ({
                url: '/api/products',
                method: 'POST',
                body: productData,
            }),
        }),
        getProductsByCategoryId: build.query<IProduct[], number>({
            query: (category_id) => `/api/products/category/${category_id}`,
        }),
        getProductById: build.query<IProduct, number>({
            query: (id) => `/api/products/${id}`,
        }),
        updateProduct: build.mutation<IProduct, { id: number; updatedProduct: Partial<IProduct> }>({
            query: ({id, updatedProduct}) => ({
                url: `/api/products/${id}`,
                method: 'PUT',
                body: updatedProduct,
            }),
        }),
        deleteProduct: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetProductsByCategoryIdQuery,
    useGetProductByIdQuery,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productAPI;

import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IProductCategory} from "@/src/models/IProductCategory";

export const productCategoryAPI = createApi({
    reducerPath: 'productCategoryAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createCategory: build.mutation<IProductCategory, Partial<IProductCategory>>({
            query: (categoryData) => ({
                url: '/api/categories',
                method: 'POST',
                body: categoryData,
            }),
        }),
        getCategoryById: build.query<IProductCategory, number>({
            query: (id) => `/api/categories/${id}`,
        }),
        getAllCategories: build.query<IProductCategory[], void>({
            query: () => '/api/categories',
        }),
        updateCategory: build.mutation<IProductCategory, { id: number; updatedCategory: Partial<IProductCategory> }>({
            query: ({id, updatedCategory}) => ({
                url: `/api/categories/${id}`,
                method: 'PUT',
                body: updatedCategory,
            }),
        }),
        deleteCategory: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/categories/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateCategoryMutation,
    useGetCategoryByIdQuery,
    useGetAllCategoriesQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = productCategoryAPI;

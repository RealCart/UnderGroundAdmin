import {createApi} from '@reduxjs/toolkit/query/react';
import {createBaseQuery} from '@/src/http';
import {IProgram} from "@/src/models/IProgram";

export const programAPI = createApi({
    reducerPath: 'programAPI',
    baseQuery: createBaseQuery(),
    endpoints: (build) => ({
        createProgram: build.mutation<IProgram, Partial<IProgram>>({
            query: (programData) => ({
                url: '/api/programs',
                method: 'POST',
                body: programData,
            }),
        }),
        getAllPrograms: build.query<IProgram[], void>({
            query: () => '/api/programs',
        }),
        getProgramById: build.query<IProgram, number>({
            query: (id) => `/api/programs/${id}`,
        }),
        updateProgram: build.mutation<IProgram, { id: number; updatedProgram: Partial<IProgram> }>({
            query: ({id, updatedProgram}) => ({
                url: `/api/programs/${id}`,
                method: 'PUT',
                body: updatedProgram,
            }),
        }),
        deleteProgram: build.mutation<void, number>({
            query: (id) => ({
                url: `/api/programs/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateProgramMutation,
    useGetAllProgramsQuery,
    useGetProgramByIdQuery,
    useUpdateProgramMutation,
    useDeleteProgramMutation
} = programAPI;

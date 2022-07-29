import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const recordsApi = createApi({
    reducerPath: 'recordsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://alkemy-challange-js-production.up.railway.app/api/v1/records' }),
    endpoints: (builder) => ({
        getRecords: builder.query({
            query: (query) => '/',
        }),
        getRecordsByuserId: builder.query({
            query: (userId) => `/${userId}`,
        })
    })
});

export const { useGetRecordsQuery, useGetRecordsByuserIdQuery } = recordsApi;

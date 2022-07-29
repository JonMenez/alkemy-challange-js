import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://alkemy-challange-js-production.up.railway.app/api/v1' }),
    endpoints: (builder) => ({})
});

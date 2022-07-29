import { configureStore } from '@reduxjs/toolkit'
import { recordsApi } from './apis/recordsApi'
import userReducer from './slices/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        [recordsApi.reducerPath]: recordsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(recordsApi.middleware)
})
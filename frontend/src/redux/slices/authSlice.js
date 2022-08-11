import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    email: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
        },
        logout: (state) => {
            state.name = null
            state.email = null
            state.token = null
        }
    }
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
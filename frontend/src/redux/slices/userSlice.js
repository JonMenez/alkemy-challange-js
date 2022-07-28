import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    token: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
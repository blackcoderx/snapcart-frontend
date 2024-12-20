import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: true,
        // change the isAuthenticated property to false when pushing the code  
        user_name: undefined,
        userID: 0,
        full_name: undefined,
        is_seller: true,
        isLoading: true,
        profile_pic: undefined,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.isLoading = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        },
        setDetails: (state, action) => {
            state.user_name = action.payload.user_name;
            state.userID = action.payload.id;
            state.full_name = action.payload.full_name;
            state.is_seller = action.payload.is_seller;
            state.profile_pic = action.payload.profile_pic;
        }

    }
})

export const { login, logout, setDetails } = authSlice.actions;

export default authSlice.reducer;
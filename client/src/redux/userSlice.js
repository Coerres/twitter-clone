import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoading: false,
    error: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducer: {
        loginStart: (state) =>{
            state.isLoading = true;
        },
        loginSuccess: (state, action) =>{ // action = the data we're passing in
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFailed: (state) => {
            state.isLoading = false;
            state.error = true;
        },
        logout: (state) =>{
            return initialState;
        },
    },
});

export const{
    loginStart,
    loginSuccess,
    loginFailed,
    logout,
} = userSlice.actions;

export default userSlice.reducer;
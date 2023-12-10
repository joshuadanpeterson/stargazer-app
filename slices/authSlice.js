import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoggedIn: false,
	token: null,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoggedIn(state, action) {
			state.isLoggedIn = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
		// Add other reducers as needed
	},
});

export const { setLoggedIn, setToken } = authSlice.actions;
export default authSlice.reducer;

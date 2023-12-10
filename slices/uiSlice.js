import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	// Add other UI states as needed
};

const uiSlice = createSlice({
	name: "ui",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		// Add other reducers as needed
	},
});

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;

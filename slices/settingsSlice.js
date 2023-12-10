import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: "light", // Or 'dark'
	// Add other settings as needed
};

const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		toggleTheme(state) {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
		// Add other reducers as needed
	},
});

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import constellationReducer from "../slices/constellationSlice";
import userSlice from "../slices/userSlice";
import uiSlice from "../slices/uiSlice";
import authSlice from "../slices/authSlice";
import settingsSlice from "../slices/settingsSlice";

const store = configureStore({
	reducer: {
		constellation: constellationReducer,
		user: userSlice,
		ui: uiSlice,
		auth: authSlice,
		settings: settingsSlice,
	},
});

export default store;

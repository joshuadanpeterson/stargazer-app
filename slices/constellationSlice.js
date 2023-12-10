import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import constellations from "../data/constellations";

export const fetchConstellations = createAsyncThunk(
	"constellation/fetchConstellations",
	async () => {
		let constellationData = [];

		for (const key in constellations) {
			const response = await fetch(
				`https://astronomyapi.com/api/constellation/${constellations[key].shortName}`
			);
			const data = await response.json();
			data.image = "default_image_url"; // Replace with actual logic to get image
			constellationData.push(data);
		}

		return constellationData;
	}
);

const initialState = {
	constellations: [],
	loading: false,
	error: null,
};

const constellationSlice = createSlice({
	name: "constellation",
	initialState,
	reducers: {
		// ... your reducers
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchConstellations.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchConstellations.fulfilled, (state, action) => {
				state.constellations = action.payload;
				state.loading = false;
			})
			.addCase(fetchConstellations.rejected, (state) => {
				state.loading = false;
				// Handle errors
			});
	},
});

export default constellationSlice.reducer;

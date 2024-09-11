import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialMemeState = {
	memes: [],
	selectedMemeTemplate: {},
};

const memeSlice = createSlice({
	name: "memes",
	initialState: initialMemeState,
	reducers: {
		onSelectMemeTemplate(state) {
			state.selectedMemeTemplate = {
				id: action.payload.id,
				name: action.payload.name,
				url: action.payload.url,
			};
		},
	},
});

export const memeActions = memeSlice.actions

const store = configureStore({
	reducer: {},
});

export default store;

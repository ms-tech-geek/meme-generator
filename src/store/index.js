import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialMemeState = {
	memeTemplates: [],
	selectedMemeTemplate: {},
};

const memeSlice = createSlice({
	name: "memes",
	initialState: initialMemeState,
	reducers: {
		setMemeTemplates(state, action) {
			state.memeTemplates = action.payload;
		},
		onSelectMemeTemplate(state, action) {
			state.selectedMemeTemplate = {
				id: action.payload.id,
				name: action.payload.name,
				url: action.payload.url,
			};
		},
	},
});

export const memeActions = memeSlice.actions;

const store = configureStore({
	reducer: {
		memes: memeSlice.reducer,
	},
});

export default store;

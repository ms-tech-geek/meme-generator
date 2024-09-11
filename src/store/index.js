import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialMemeState = {
	memeTemplates: [],
	selectedMemeTemplate: {},
	memeGenerationProgress: ''
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
		addCaptionsToSelectedTemplate(state,action){
			state.selectedMemeTemplate = {
				...state.selectedMemeTemplate,
				userInputs : {
					topText : action.payload.topText,
					bottomText: action.payload.bottomText
				}
			}
		},
		setMemeGenerationProgress(state,action) {
			state.memeGenerationProgress = action.payload
		}
	},
});

export const memeActions = memeSlice.actions;

const store = configureStore({
	reducer: {
		memes: memeSlice.reducer,
	},
});

export default store;

import { createSlice, current } from "@reduxjs/toolkit";
import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from "pages/suggestions/navbarExtension/NavbarExtension";

import Data from "store/data.json";

interface User {
	image: string;
	name: string;
	username: string;
}

interface Replies {
	content: string;
	replyingTo: string;
	user: User;
}

interface Comment {
	id: number;
	content: string;
	user: User;
	replies?: Replies[];
}

export interface Feedback {
	id: number;
	title: string;
	category: string;
	upvotes: number;
	status: string;
	description: string;
	comments?: Comment[];
}

interface FeedbackListState {
	currentUser: User;
	productRequests: Feedback[];
}

const initialState: FeedbackListState = {
	currentUser: Data.currentUser,
	productRequests: Data.productRequests,
};

const sugestionsFeedbackSlice = createSlice({
	name: "feedbackList",
	initialState,
	reducers: {
		sortFeedbackList: (state, action) => {
			let sugesstions = state.productRequests.filter((suggestion) => suggestion.status === "suggestion");

			if (action.payload === MOST_UPVOTES) {
				sugesstions.sort((a, b) => b.upvotes - a.upvotes);
			} else if (action.payload === LEAST_UPVOTES) {
				sugesstions.sort((a, b) => a.upvotes - b.upvotes);
			} else if (action.payload === MOST_COMMENTS) {
				sugesstions.sort((a, b) => (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0));
			} else if (action.payload === LEAST_COMMENTS) {
				sugesstions.sort((a, b) => (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0));
			}

			state.productRequests = sugesstions;
		},
	},
});

export default sugestionsFeedbackSlice.reducer;

export const { sortFeedbackList } = sugestionsFeedbackSlice.actions;

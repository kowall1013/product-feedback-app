import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "redux/store";

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
  replies?: Replies | any;
}

interface Feedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

interface FeedbackListState {
  currentUser: User;
  productRequests: Feedback[];
}

const initialState: FeedbackListState = {
  currentUser: Data.currentUser,
  productRequests: Data.productRequests,
};

export const sugestionsFeedbackSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.comments;

export default sugestionsFeedbackSlice.reducer;

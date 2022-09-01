import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "reduxState/store";

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

interface Feedback {
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
  reducers: {},
});

export default sugestionsFeedbackSlice.reducer;

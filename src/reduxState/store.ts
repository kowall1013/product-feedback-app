import { configureStore } from "@reduxjs/toolkit";
import sugestionsFeedbackSlice from "pages/suggestions/SugestionsSlice";

console.log("jestem");

export const store = configureStore({
  reducer: {
    feedbackList: sugestionsFeedbackSlice,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "./features/todoSlice";
// import counterReducer from "./features/counterSlice";

import { notesReducer } from "./reducers";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // todos: todoReducer,
    todos: notesReducer,
  },
});

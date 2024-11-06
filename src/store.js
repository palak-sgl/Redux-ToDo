// import { configureStore } from "@reduxjs/toolkit";
// // import todoReducer from "./features/todoSlice";
// // import counterReducer from "./features/counterSlice";

// import { notesReducer } from "./reducers";
// export const store = configureStore({
//   reducer: {
//     // counter: counterReducer,
//     // todos: todoReducer,
//     todos: notesReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
// import dataReducer from "./features/apiSlice";
import postReducer from "./api/ApiReducer";

export const store = configureStore({
  reducer: {
    // posts: dataReducer,
    posts: postReducer,
  },
});

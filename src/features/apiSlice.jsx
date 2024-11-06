import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    setData: (state, action) => {
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setData, addPost, updatePost, deletePost } = dataSlice.actions;
export default dataSlice.reducer;

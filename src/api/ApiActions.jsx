export const setData = (posts) => ({
  type: "SET_DATA",
  payload: posts,
});

export const addPost = (post) => ({
  type: "ADD_POST",
  payload: post,
});

export const updatePost = (id) => ({
  type: "UPDATE_POST",
  payload: id,
});

export const deletePost = (id) => ({
  type: "DELETE_POST",
  payload: id,
});

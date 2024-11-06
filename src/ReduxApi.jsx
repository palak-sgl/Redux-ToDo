import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setData, addPost, updatePost, deletePost } from "./features/apiSlice";
import { setData, addPost, updatePost, deletePost } from "./api/ApiActions";
import Postcard from "./components/Postcard";

const ReduxApi = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  console.log("posts:", posts);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title, body };
    try {
      if (editId) {
        dispatch(updatePost({ id: editId, title, body }));
        setEditId(null);
      } else {
        dispatch(addPost(newPost));
      }
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
    // const newPost = { id: Date.now(), title, body };
    // dispatch(addPost(newPost));
    // setTitle("");
    // setBody("");
  };
  const handleEdit = (post) => {
    setEditId(post.id);
    setTitle(post.title);
    setBody(post.body);
  };

  const handleDelete = (post) => {
    try {
      dispatch(deletePost(post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      console.log("Fetched data:", result);
      dispatch(setData(result));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleAddPost}
        className="mb-4 mt-5 pt-10 px-20 flex justify-center items-center flex-col"
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border p-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 my-3 rounded-md"
        >
          {editId ? "Save Changes" : "Add Post"}
        </button>
      </form>
      <ul className="grid grid-cols-4 gap-3 px-10">
        {posts?.map((item) => (
          <Postcard
            item={item}
            key={item.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReduxApi;

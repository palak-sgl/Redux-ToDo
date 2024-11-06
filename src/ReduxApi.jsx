import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setData, addPost, updatePost, deletePost } from "./features/apiSlice";
import { setData, addPost, updatePost } from "./api/ApiActions";
import Postcard from "./components/Postcard";

const ReduxApi = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [editId, setEditId] = useState(null);
  const [mydata, setMyData] = useState({ title: "", body: "" });

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), title: mydata.title, body: mydata.body };
    try {
      if (editId) {
        // dispatch(updatePost({ id: editId, title, body }));
        dispatch(
          updatePost({ id: editId, title: mydata.title, body: mydata.body })
        );
        setEditId(null);
      } else {
        dispatch(addPost(newPost));
      }
      setMyData({ title: "", body: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (post) => {
    setEditId(post.id);
    setMyData({ title: post.title, body: post.body });
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
          value={mydata.title}
          onChange={(e) =>
            setMyData((prevData) => ({ ...prevData, title: e.target.value }))
          }
          required
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Body"
          value={mydata.body}
          onChange={(e) =>
            setMyData((prevData) => ({ ...prevData, body: e.target.value }))
          }
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
          <Postcard item={item} key={item.id} handleEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default ReduxApi;

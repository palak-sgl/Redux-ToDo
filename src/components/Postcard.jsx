import React from "react";
import { deletePost } from "../api/ApiActions";
import { useDispatch } from "react-redux";
function Postcard({ item, handleEdit }) {
  const dispatch = useDispatch();
  const handleDelete = (post) => {
    try {
      dispatch(deletePost(post.id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:scale-105 duration-100 relative">
      <h3 className="text-lg font-semibold mb-2 mt-1">{item.title}</h3>
      <p className="text-gray-700 text-sm">{item.body}</p>
      <button
        className="text-yellow-300 absolute top-2 right-10"
        onClick={() => handleEdit(item)}
      >
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button
        className="text-red-500 absolute top-2 right-4"
        onClick={() => handleDelete(item)}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default Postcard;

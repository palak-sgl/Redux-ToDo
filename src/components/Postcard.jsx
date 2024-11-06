import React from "react";

function Postcard({ item, handleEdit, handleDelete }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 hover:scale-105 duration-100 relative">
      <h3 className="text-lg font-semibold mb-2 mt-1">{item.title}</h3>
      <p className="text-gray-700 text-sm">{item.body}</p>
      <button
        className="text-yellow-300 absolute top-2 right-10"
        onClick={() => handleEdit(item)} // {()=>hndleedit(id)}
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

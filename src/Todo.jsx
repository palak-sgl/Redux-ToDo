// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, deleteTodo, toggleComplete } from "./features/todoSlice";

// const Todo = () => {
//   const [text, setText] = useState("");
//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };
//   const handleAddTodo = () => {
//     if (text) {
//       dispatch(addTodo(text));
//       setText("");
//     }
//   };
//   const handleToggleComplete = (id) => {
//     dispatch(toggleComplete(id));
//   };
//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 p-5">
//       <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-8">
//         <h1 className="text-3xl font-bold text-white text-center mb-6">
//           My Todos
//         </h1>
//         <div className="flex items-center gap-4 mb-3">
//           <input
//             type="text"
//             value={text}
//             onChange={handleInputChange}
//             className="flex-1 bg-white bg-opacity-20 text-white placeholder-gray-200 rounded-lg py-3 px-4 focus:ring-2 focus:ring-indigo-400  focus:outline-none transition-all"
//             placeholder="Enter a new task..."
//           />
//           <button
//             onClick={handleAddTodo}
//             className="py-3 px-4 bg-indigo-300 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 active:scale-95 transition-transform"
//           >
//             Add
//           </button>
//         </div>
//         <ul className="space-y-4">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex justify-between items-center p-4 rounded-lg bg-white bg-opacity-20 shadow-md hover:bg-opacity-30 transition-all"
//             >
//               <span
//                 className={`text-lg text-black ${
//                   todo.completed ? "line-through text-gray-300" : "text-white"
//                 }`}
//               >
//                 {todo.text}
//               </span>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={() => handleToggleComplete(todo.id)}
//                   className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-transform"
//                 >
//                   {todo.completed ? "Undo" : "Done"}
//                 </button>
//                 <button
//                   onClick={() => handleDeleteTodo(todo.id)}
//                   className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition-transform"
//                 >
//                   <i className="fa-solid fa-trash"></i>
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Todo;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleComplete,
  editTodo,
} from "./features/todoSlice";

const Todo = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null); // Track editing state
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      if (editId) {
        dispatch(editTodo({ id: editId, newText: text }));
        setEditId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (todo) => {
    setEditId(todo.id);
    setText(todo.text);
  };

  return (
    <div className="bg-[#fefefe] min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-lg bg-white rounded-md shadow-md p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-blue-500 mb-6">Notes</h1>
          <h1 className="text-gray-400 text-sm mt-2">
            {todos.length}
            {todos.length === 1 ? " Task" : " Tasks"}
          </h1>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={text}
            onChange={handleInputChange}
            className="flex-1 bg-white text-gray-800 rounded-md py-2 px-4 border border-gray-100 focus:ring-1 focus:ring-gray-200 focus:outline-none"
            placeholder="New note"
          />
          <button
            onClick={handleAddTodo}
            className="text-blue-500 font-semibold px-3 py-1 hover:underline"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        <ul className="divide-y divide-gray-200">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center py-3 px-2"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                  className="mr-3 mt-1 h-3 w-3 rounded accent-blue-500"
                />
                <span
                  className={`text-gray-800 ${
                    todo.completed ? "line-through text-gray-300" : ""
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEditTodo(todo)}
                  className="text-yellow-500 hover:underline mr-2"
                >
                  <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="text-red-500 hover:underline"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

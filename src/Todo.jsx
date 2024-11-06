// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addTodo, deleteTodo, toggleComplete, editTodo } from "./actions";

// const Todo = () => {
//   const [text, setText] = useState("");
//   const [editId, setEditId] = useState(null);
//   const todos = useSelector((state) => state.todos.todos);

//   const dispatch = useDispatch();

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (text) {
//       if (editId) {
//         dispatch(editTodo(editId, text));
//         setEditId(null);
//       } else {
//         dispatch(addTodo(text));
//       }
//       setText("");
//     }
//   };

//   const handleToggleComplete = (id) => {
//     dispatch(toggleComplete(id));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleEditTodo = (todo) => {
//     setEditId(todo.id);
//     setText(todo.text);
//   };

//   return (
//     <div className="bg-[#f4f4f8] min-h-screen flex flex-col items-center py-10 text-gray-800">
//       <div className="w-full max-w-lg bg-[#ffffff] rounded-lg shadow-lg p-5 border border-gray-200">
//         <div className="flex justify-between mb-6">
//           <h1 className="text-2xl font-semibold text-[#4a5568]">Tasks</h1>
//           <span className="text-sm text-gray-500 mt-2">
//             {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
//           </span>
//         </div>

//         <div className="flex items-center gap-3 mb-4">
//           <input
//             type="text"
//             value={text}
//             onChange={handleInputChange}
//             className="flex-1 bg-gray-50 text-gray-700 rounded-md py-2 px-4 border border-gray-300 focus:ring-2 focus:ring-[#90cdf4] outline-none"
//             placeholder="Add a new task..."
//           />
//           <button
//             onClick={handleAddTodo}
//             className="bg-[#3182ce] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#2b6cb0] transition duration-200"
//           >
//             {editId ? "Update" : "Add"}
//           </button>
//         </div>

//         <ul className="divide-y divide-gray-300">
//           {todos.map((todo) => (
//             <li
//               key={todo.id}
//               className="flex justify-between items-center py-3 px-2"
//             >
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleToggleComplete(todo.id)}
//                   className="mr-3 h-3 w-3 mt-0.5 text-[#3182ce] bg-gray-50 rounded focus:ring-[#3182ce]"
//                 />
//                 <span
//                   className={`text-gray-700 ${
//                     todo.completed ? "line-through text-gray-400" : ""
//                   }`}
//                 >
//                   {todo.text}
//                 </span>
//               </div>
//               <div className="flex gap-3">
//                 <button
//                   onClick={() => handleEditTodo(todo)}
//                   className="text-[#f6ad55] hover:text-[#dd6b20]"
//                 >
//                   <i className="fa-regular fa-pen-to-square"></i>
//                 </button>
//                 <button
//                   onClick={() => handleDeleteTodo(todo.id)}
//                   className="text-[#e53e3e] hover:text-[#c53030]"
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
// //

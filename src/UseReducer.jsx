// import { useReducer } from "react";

// // const initialState = 0;
// // const reducer = (state, action) => {
// //   console.log(state, action);
// //   if (action.type === "Inc") {
// //     return state + 1;
// //   } else if (action.type == "Dec") {
// //     return state - 1;
// //   }
// //   return state;
// // };
// // const UseReducer = () => {
// //   const [state, dispatch] = useReducer(reducer, initialState);
// //   return (
// //     <div>
// //       <h1>{state}</h1>
// //       <button onClick={() => dispatch({ type: "Inc" })}>+</button>
// //       <button onClick={() => dispatch({ type: "Dec" })}>-</button>
// //     </div>
// //   );
// // };

// const initialState = [];
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Add":
//       return [
//         ...state,
//         {
//           id: state.length + 1,
//           name: action.payload,
//         },
//       ];
//   }
// };
// const UseReducer = () => {
//   const [todos, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <div className="flex justify-center items-center">
//         <input type="text" className="w-56 h-9 border border-gray-200" />
//         <button
//           onBlur={(e) => dispatch({ type: "Add", payload: e.target.value })}
//         >
//           Add
//         </button>
//         <button onClick={() => dispatch({ type: "Remove" })}>Delete</button>
//       </div>
//       <hr />
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.name}</li>
//       ))}
//     </div>
//   );
// };
// export default UseReducer;

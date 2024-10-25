// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./features/counterSlice";
// function App() {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <button onClick={(e) => dispatch(increment())}>increment</button>
//       <h1>count: {count}</h1>
//       <button onClick={(e) => dispatch(decrement())}>decrement</button>
//     </>
//   );
// }

// export default App;
import Todo from "./Todo";
// import UseReducer from "./useReducer";
function App() {
  return <Todo />;
  // return <UseReducer />;
}
export default App;

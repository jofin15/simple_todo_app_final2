// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension"; // Correct import statement
// import { todosReducers } from "./reducers/todosReducers";

// const reducer = combineReducers({
//   todos: todosReducers,
// });

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { todosReducers } from './reducers/todosReducers';

// const store = configureStore({
//   reducer: {
//     todos: todosReducers,
//   },
//   middleware: getDefaultMiddleware(),
//   devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
// });

// export default store;


import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { todosReducers } from './reducers/todosReducers';

const store = configureStore({
  reducer: {
    todos: todosReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for now, if needed
    }),
  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
});

export default store;


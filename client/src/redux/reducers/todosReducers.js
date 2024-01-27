import * as actionTypes from '../actions/type';

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];

    case actionTypes.GETALL_TODO:
      return action.payload;

    case actionTypes.TOGGLE_TODO:
      return state.map((todoItem) =>
        todoItem._id === action.payload._id
          ? { ...todoItem, done: !todoItem.done }
          : todoItem
      );

    case actionTypes.UPDATE_TODO:
      return state.map((todoItem) =>
        todoItem._id === action.payload._id
          ? { ...todoItem, data: action.payload.data }
          : todoItem
      );

    case actionTypes.DELETE_TODO:
      return state.filter((todo) => todo._id !== action.payload._id);

    default:
      return state;
  }
};

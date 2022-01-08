import React, { createContext, useReducer, useState } from "react";

const initialState = {
  budget: 5000,
  expenses: []
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE":
      break;

    default:
      return state;
  }
};

export const ListContext = createContext();
export const ListProvider = (props) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  return (
    <ListContext.Provider
      value={{ budget: state.budget, expenses: state.expenses, dispatch }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

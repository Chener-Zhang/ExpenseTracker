import React, { createContext, useReducer, useState } from "react";

const expenseReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const initialState = {
  budget: 0,
  expenses: []
};
export const ListContext = createContext();
export const ListProvider = (props) => {
  const [state, dispatch] = useReducer(expenseReducer, initialState);
  return (
    <ListContext.Provider
      value={{ budget: state.budget, expense: state.expense, dispatch }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

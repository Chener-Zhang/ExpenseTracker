import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const ExpenseTotal = () => {
  const { budget, expenses } = useContext(ListContext);

  console.log(expenses);
  console.log(budget);
  return (
    <div className="alert alert-primary">
      <span>ExpenseTotal</span>
    </div>
  );
};

export default ExpenseTotal;

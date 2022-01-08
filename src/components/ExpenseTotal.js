import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(ListContext);
  const totalSpend = expenses.reduce((total, expense) => {
    return (total = total + expense.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Total Spend: {totalSpend}</span>
    </div>
  );
};

export default ExpenseTotal;

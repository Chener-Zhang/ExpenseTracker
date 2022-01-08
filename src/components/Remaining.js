import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(ListContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className="alert alert-success">
      <span>Remaining : {budget - totalExpense}</span>
    </div>
  );
};

export default Remaining;

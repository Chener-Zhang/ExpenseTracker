import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const ExpenseTotal = () => {
  const { budget } = useContext(ListContext);

  return (
    <div className="alert alert-primary">
      <span>{budget}</span>
    </div>
  );
};

export default ExpenseTotal;

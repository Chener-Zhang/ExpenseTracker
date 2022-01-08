import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const Budget = () => {
  const { budget } = useContext(ListContext);

  return (
    <div className="alert alert-secondary">
      <span>Budget: £{budget}</span>
    </div>
  );
};

export default Budget;

import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ListContext } from "../AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(ListContext);

  return (
    <div>
      <ul className="list-group">
        {expenses.map((expense) => {
          return <ListItem key={expense.id} props={expense} />;
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;

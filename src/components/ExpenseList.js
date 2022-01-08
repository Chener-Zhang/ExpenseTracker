import React, { useContext } from "react";
import ListItem from "./ListItem";
import { ListContext } from "../AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(ListContext);
  console.log(expenses);
  return (
    <div>
      <ul className="list-group">
        {expenses.map((item) => {
          return <ListItem key={item.name + item.cost} props={item} />;
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;

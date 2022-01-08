import React, { useContext, useState } from "react";
import { ListContext } from "../AppContext";

const AddExpense = () => {
  const { budget } = useContext(ListContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(budget);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h2>Add Expense </h2>
      <label htmlFor="name">Name</label>
      <input
        className="form-control"
        id="name"
        placeholder="Enter Name"
        required="required"
        type="text"
      />

      <label htmlFor="amout">Amout</label>
      <input
        className="form-control"
        id="Amout"
        placeholder="Enter Amout"
        required="required"
        type="text"
      />
      <button className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default AddExpense;

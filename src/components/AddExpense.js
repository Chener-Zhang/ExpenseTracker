import React, { useContext, useState } from "react";
import { ListContext } from "../AppContext";

const AddExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const { dispatch, expenses } = useContext(ListContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newExpense = {
      name: name,
      cost: parseInt(cost)
    };

    dispatch({
      type: "ADD",
      payload: newExpense
    });
    console.log(expenses);
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
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="amout">Amout</label>
      <input
        className="form-control"
        id="Amout"
        placeholder="Enter Amout"
        required="required"
        type="text"
        onChange={(event) => setCost(event.target.value)}
      />
      <button className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default AddExpense;

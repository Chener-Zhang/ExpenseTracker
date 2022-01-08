import React, { useContext } from "react";
import { ListContext } from "../AppContext";

const AddExpense = () => {
  const [item, setItem] = useContext(ListContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("button click");
    setItem((previousItem) => [...previousItem, { name: "chener" }]);
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
      <button onClicktype="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default AddExpense;

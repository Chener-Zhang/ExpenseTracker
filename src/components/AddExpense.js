import React from "react";

const AddExpense = () => {
  return (
    <form>
      <h2>Add Expense </h2>
      <label for="name">Name</label>
      <input
        className="form-control"
        id="name"
        placeholder="Enter Name"
        required="required"
        type="text"
      />

      <label for="amout">Amout</label>
      <input
        className="form-control"
        id="Amout"
        placeholder="Enter Amout"
        required="required"
        type="text"
      />
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default AddExpense;

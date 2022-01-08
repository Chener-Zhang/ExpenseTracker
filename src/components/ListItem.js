import React from "react";

const ListItem = ({ props }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h3>{props.name}</h3>
      <span>{props.cost}</span>
    </li>
  );
};

export default ListItem;

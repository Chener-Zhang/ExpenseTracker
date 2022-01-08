import React from "react";

const ListItem = ({ props }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.name}</div>
      </div>
      <span class="badge bg-primary rounded-pill">{props.cost}</span>
    </li>
  );
};

export default ListItem;

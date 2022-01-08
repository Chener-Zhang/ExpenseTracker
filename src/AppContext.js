import React, { createContext, useState } from "react";

export const ListContext = createContext();

export const ListProvider = (props) => {
  const [item, setItem] = useState([]);
  return (
    <ListContext.Provider value={[item, setItem]}>
      {props.children}
    </ListContext.Provider>
  );
};

import React from "react";
import { List } from "./styles";

export default function Tab({ label, active, onClick }) {
  return (
    <List className={active ? "active" : "notActive"}>
      <button className=" mx-4 my-1" onClick={onClick}>
        {label}
      </button>
    </List>
  );
}

import React from "react";
import "./index.css";

export default function StatusPill(props) {
  return (
    <span
      className={"pill"}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style
      }}
    >
      {props.label}
    </span>
  );
}

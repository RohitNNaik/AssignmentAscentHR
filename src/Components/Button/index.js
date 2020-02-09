import React from "react";
import "./index.css";

export default function Button(props) {
  return (
    <span
      style={{ backgroundColor: props.bgColor }}
      className={`btn-custom ${props.className}`}
    >
      {props.label}
    </span>
  );
}

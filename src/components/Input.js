import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled}
    />
  );
};

export default Input

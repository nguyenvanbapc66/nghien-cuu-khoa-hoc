import React from "react";

const Button = (props) => {
  const styleBtn = {
    background: props.color,
  };

  return (
    <button style={styleBtn} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;

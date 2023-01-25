import React from "react";

const Icon = (props) => {
  return (
    <img
      src={require(`../../assets/images/${props.type}.svg`)}
      alt={props.type}
      className="block w-32 m-8"
    />
  );
};

export default Icon;

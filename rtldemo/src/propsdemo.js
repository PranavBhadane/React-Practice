import React from "react";

const PropsDemo = (props) => {
  return (
    <div>
      <h1>Unit Testing Props</h1>
      <h4>Welcome user-{props.fullName}</h4>
    </div>
  );
};

export default PropsDemo;

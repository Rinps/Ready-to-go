import React from "react";

const ValidationBox = (props) => {
  if (props.switch1 && props.switch2 && props.switch3) {
    return <div className="ValidationBox yes">Go!</div>;
  } else {
    return <div className="ValidationBox no">No way!</div>;
  }
};

export default ValidationBox;

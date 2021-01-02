import React from "react";

const ResetSwitches = (props) => {
  const resetSwitches = () => {
    props.setSwitch1(false);
    props.setSwitch2(false);
    props.setSwitch3(false);
  };
  return (
    <button className="ResetSwitch" onClick={resetSwitches}>
      Réinitialisation
    </button>
  );
};

export default ResetSwitches;

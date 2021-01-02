import React from "react";

const CheckColumn = (props) => {
  const yep1 = () => {
    props.setSwitch1(true);
  };
  const yep2 = () => {
    props.setSwitch2(true);
  };
  const yep3 = () => {
    props.setSwitch3(true);
  };

  const nope1 = () => {
    props.setSwitch1(false);
  };

  const nope2 = () => {
    props.setSwitch2(false);
  };

  const nope3 = () => {
    props.setSwitch3(false);
  };

  return (
    <div className="CheckColumn">
      {
        <button
          id="on1"
          onClick={yep1}
          className={props.switch1 ? "checked" : "unchecked"}
        >
          ON
        </button>
      }
      <button
        id="off1"
        onClick={nope1}
        className={!props.switch1 ? "checked" : "unchecked"}
      >
        OFF
      </button>
      <button
        id="on2"
        onClick={yep2}
        className={props.switch2 ? "checked" : "unchecked"}
      >
        ON
      </button>
      <button
        id="off2"
        onClick={nope2}
        className={!props.switch2 ? "checked" : "unchecked"}
      >
        OFF
      </button>
      <button
        id="on3"
        onClick={yep3}
        className={props.switch3 ? "checked" : "unchecked"}
      >
        ON
      </button>
      <button
        id="off3"
        onClick={nope3}
        className={!props.switch3 ? "checked" : "unchecked"}
      >
        OFF
      </button>
    </div>
  );
};

export default CheckColumn;

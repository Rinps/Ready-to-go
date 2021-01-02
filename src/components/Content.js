import React from "react";
import CheckColumn from "./CheckColumn";
import ValidationBox from "./ValidationBox";

const Content = (props) => {
  return (
    <div className="Content">
      <CheckColumn
        switch1={props.switch1}
        setSwitch1={props.setSwitch1}
        switch2={props.switch2}
        setSwitch2={props.setSwitch2}
        switch3={props.switch3}
        setSwitch3={props.setSwitch3}
      />
      <ValidationBox
        switch1={props.switch1}
        switch2={props.switch2}
        switch3={props.switch3}
      />
    </div>
  );
};

export default Content;

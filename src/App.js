import "./App.css";
import React, { useState } from "react";

import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResetSwitches from "./components/ResetSwitches";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <Header text="Ready To Go" />
        <Content
          switch1={switch1}
          setSwitch1={setSwitch1}
          switch2={switch2}
          setSwitch2={setSwitch2}
          switch3={switch3}
          setSwitch3={setSwitch3}
        />
        <ResetSwitches
          switch1={switch1}
          setSwitch1={setSwitch1}
          switch2={switch2}
          setSwitch2={setSwitch2}
          switch3={switch3}
          setSwitch3={setSwitch3}
        />
        <Footer tech="React" school="Le Reacteur" creator="Guillaume" />
      </div>
    </div>
  );
}

export default App;

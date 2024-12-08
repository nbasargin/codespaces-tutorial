import React from "react";

import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

const App = () => {
  return (
    <div id="main">
      <Home name={"John Doe"} />
      <Portfolio />
    </div>
  );
};

export default App;

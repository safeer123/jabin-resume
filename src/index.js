import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";

import Header from "./Header";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
import "./styles.css";

function App() {
  return (
    <div className="rootpage">
      <Header />
      <div>
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

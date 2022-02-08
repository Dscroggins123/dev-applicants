import React from "react";
import { getLCP, getFID, getCLS } from "web-vitals";
import "./styles/main.scss";
import Hero from "./pages/hero"
import Features from "./pages/features";
// import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";

// if (typeof window !== "undefined") {
//   getCLS(console.log);
//   getFID(console.log);
//   getLCP(console.log);

//   const Axe = require("@axe-core/react");
//   Axe(React, 1000);
// }

function App() {
  return (
    <div className="App">
      <Hero/>
      <Features/>
    </div>
  );
}

export default App;

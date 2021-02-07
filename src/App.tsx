import React, { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  const [color, setColor] = useState<ColorResult["hex"]>("#000000");

  return (
    <div className="app">
      <nav className="top">Pixart</nav>
      <div className="app-ui">
        <div className="canvas-wrapper">
          <Canvas color={color}></Canvas>
        </div>
        <div className="right-panel">
          <SketchPicker
            color={color}
            onChange={(colorResult) => setColor(colorResult.hex)}
          ></SketchPicker>
        </div>
      </div>
    </div>
  );
}

export default App;

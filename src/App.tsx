import React, { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import "./App.css";
import Canvas from "./Canvas";

function App() {
  const [color, setColor] = useState<ColorResult["hex"]>("#000000");

  return (
    <div className="app">
      <header className="app-header">Pixart</header>
      <main className="app-main">
        <div className="canvas-wrapper">
          <Canvas color={color}></Canvas>
        </div>
        <div className="right-panel">
          <SketchPicker
            color={color}
            onChange={(colorResult) => setColor(colorResult.hex)}
          ></SketchPicker>
        </div>
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;

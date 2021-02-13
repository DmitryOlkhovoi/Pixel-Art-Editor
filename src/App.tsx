import "./App.css";
import Canvas from "./Canvas";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="app">
      <header className="app-header">Pixart</header>
      <main className="app-main">
        <Canvas />
        <RightPanel />
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;

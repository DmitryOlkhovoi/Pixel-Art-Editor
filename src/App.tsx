import "./App.css";
import Canvas from "./Canvas";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import TopPanel from "./components/TopPanel";

function App() {
  return (
    <div className="app">
      <header>
        <TopPanel />
      </header>
      <main className="app-main">
        <LeftPanel />
        <Canvas />
        <RightPanel />
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;

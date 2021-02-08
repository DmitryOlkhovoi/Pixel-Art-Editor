import { FC } from "react";
import "./styles.css";
import ColorPicker from "./tools/ColorPicker";
import PixelSize from "./tools/PixelSize";

const SECTIONS = [{ name: "PIXEL", tools: [<PixelSize />, <ColorPicker />] }];

const RightPanel: FC = () => {
  function renderTool(tool: any) {
    return <div className="right-panel-tool">{tool}</div>;
  }

  function renderSection(section: any) {
    return (
      <div className="right-panel-section">
        <div className="right-panel-section-name">{section.name}</div>
        {section.tools.map(renderTool)}
      </div>
    );
  }

  return (
    <div className="right-panel">
      <div className="right-panel-header">Properties</div>
      <div>{SECTIONS.map(renderSection)}</div>
    </div>
  );
};

export default RightPanel;

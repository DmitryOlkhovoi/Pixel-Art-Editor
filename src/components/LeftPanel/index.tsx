import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { setTool } from "../../store/actions/tool";
import { State, TOOLS } from "../../types";
import "./styles.css";
import Eraser from "./tools/Eraser";
import Mirror from "./tools/Mirror";

interface Tool {
  name: TOOLS;
  text: string;
  component: FC;
}

const PANEL_TOOLS: Tool[] = [
  { name: "eraser", text: "Eraser", component: Eraser },
  { name: "mirror", text: "Mirror", component: Mirror },
];

const LeftPanel: FC = () => {
  const selectedTool = useSelector((state: State) => state.tool.selectedTool);
  const dispatch = useDispatch();

  function onClick(toolName: TOOLS) {
    if (toolName === selectedTool) {
      return dispatch(setTool(null));
    }
    dispatch(setTool(toolName));
  }

  return (
    <div className="left-panel">
      {PANEL_TOOLS.map((tool) => (
        <div
          onClick={() => onClick(tool.name)}
          className={classnames(
            { "left-panel-tool-active": tool.name === selectedTool },
            "left-panel-tool"
          )}
        >
          <tool.component></tool.component>
          {tool.text}
        </div>
      ))}
    </div>
  );
};

export default LeftPanel;

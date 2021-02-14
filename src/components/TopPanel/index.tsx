import { FC } from "react";
import "./styles.css";
import ClearAll from "./tools/ClearImage";
import DownloadImage from "./tools/DownloadImage";
import LoadImage from "./tools/LoadImage";

const TopPanel: FC = () => {
  return (
    <div className="top-panel">
      <div className="top-panel-logo">Pixart</div>
      <div className="flex items-center">
        <ClearAll />
        <LoadImage />
        <DownloadImage />
      </div>
    </div>
  );
};

export default TopPanel;

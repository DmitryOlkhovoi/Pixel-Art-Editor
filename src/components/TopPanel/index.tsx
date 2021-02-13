import { FC } from "react";
import "./styles.css";
import DownloadImage from "./tools/DownloadImage";

const TopPanel: FC = () => {
  return (
    <div className="top-panel">
      <DownloadImage />
    </div>
  );
};

export default TopPanel;

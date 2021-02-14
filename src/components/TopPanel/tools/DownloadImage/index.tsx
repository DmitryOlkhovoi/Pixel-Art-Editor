import { FC } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import "./styles.css";
import { State } from "../../../../types";

const DownloadImage: FC = () => {
  const imageDataURL = useSelector((state: State) => state.image.dataURL);

  return (
    <a
      className={classnames({
        "tool-download-disabled pointer-events-none": !imageDataURL,
      })}
      href={imageDataURL || ""}
      download="pixel-art-editor"
    >
      <button className="btn btn-accent">
        <i className="fas fa-download"></i> Download
      </button>
    </a>
  );
};

export default DownloadImage;

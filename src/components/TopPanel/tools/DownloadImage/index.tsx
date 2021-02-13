import { FC } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import { State } from "../../../../types";

const DownloadImage: FC = () => {
  const imageDataURL = useSelector((state: State) => state.image.dataURL);

  return (
    <a
      className={classnames({
        "text-gray-400 pointer-events-none": !imageDataURL,
      })}
      href={imageDataURL || ""}
      download="pixel-art-editor"
    >
      Download
    </a>
  );
};

export default DownloadImage;

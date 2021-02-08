import { FC } from "react";
import Slider from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import "rc-slider/assets/index.css";
import { setPixelSize } from "../../../../store/actions/pixel";
import "./styles.css";
import { State } from "../../../../types";

const PixelSize: FC = () => {
  const size = useSelector((state: State) => state.pixel.size);
  const dispatch = useDispatch();

  return (
    <>
      <span className="tool-title">SIZE</span>
      <div className="pixel-size">
        <Slider
          className="pixel-size-slider"
          min={1}
          max={10}
          trackStyle={{ background: "#6446c2" }}
          railStyle={{ background: "#5a5b66" }}
          handleStyle={{
            background: "#f7f7fe",
            border: "none",
            boxShadow: "none",
          }}
          onChange={(size) => dispatch(setPixelSize(size))}
        />
        <span className="size-value">{size}px</span>
      </div>
    </>
  );
};

export default PixelSize;

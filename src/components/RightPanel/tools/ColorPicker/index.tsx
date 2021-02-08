import { FC } from "react";
import { ChromePicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { setPixelColor } from "../../../../store/actions/pixel";
import { State } from "../../../../types";

const ColorPicker: FC = () => {
  const color = useSelector((state: State) => state.pixel.color);
  const dispatch = useDispatch();

  return (
    <ChromePicker
      color={color}
      onChange={(color) => dispatch(setPixelColor(color.hex))}
    ></ChromePicker>
  );
};

export default ColorPicker;

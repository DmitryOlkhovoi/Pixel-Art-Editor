import { handleActions } from "redux-actions";
import { PixelState } from "../../types";

const reducer = handleActions<PixelState, any>(
  {
    SET_PIXEL_SIZE(state, action) {
      return { ...state, size: action.payload };
    },
    SET_PIXEL_COLOR(state, action) {
      return { ...state, color: action.payload };
    },
  },
  { color: "#00000", size: 1 }
);

export default reducer;

import { handleActions } from "redux-actions";
import { ImageState } from "../../types";

const reducer = handleActions<ImageState, any>(
  {
    SET_DATA_URL(state, action) {
      return { ...state, dataURL: action.payload };
    },
  },
  { dataURL: null }
);

export default reducer;

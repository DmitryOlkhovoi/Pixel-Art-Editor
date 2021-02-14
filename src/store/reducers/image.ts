import { handleActions } from "redux-actions";
import { ImageState } from "../../types";

const reducer = handleActions<ImageState, any>(
  {
    SET_DATA_URL(state, action) {
      return { ...state, dataURL: action.payload };
    },
    SET_LOADED_URL(state, action) {
      return { ...state, loadedDataURL: action.payload };
    },
  },
  { loadedDataURL: null, dataURL: null }
);

export default reducer;

import { handleActions } from "redux-actions";
import { ImageState } from "../../types";
import { getRandomPromoImage } from "../../utils";

const reducer = handleActions<ImageState, any>(
  {
    SET_DATA_URL(state, action) {
      return { ...state, dataURL: action.payload };
    },
    SET_LOADED_URL(state, action) {
      return { ...state, loadedDataURL: action.payload };
    },
  },
  { loadedDataURL: null, dataURL: getRandomPromoImage() }
);

export default reducer;

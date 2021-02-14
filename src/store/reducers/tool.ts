import { handleActions } from "redux-actions";
import { ToolState } from "../../types";

const reducer = handleActions<ToolState, any>(
  {
    SET_TOOL(state, action) {
      return { ...state, selectedTool: action.payload };
    },
  },
  { selectedTool: null }
);

export default reducer;

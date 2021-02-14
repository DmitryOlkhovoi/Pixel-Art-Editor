import { createAction } from "redux-actions";
import { TOOLS } from "../../types";

export const setTool = createAction<TOOLS | null>("SET_TOOL");

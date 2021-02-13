import _ from "underscore";
import { createStore } from "redux";
import { State } from "../types";
import reducers from "./reducers";

export const saveState = (state: Partial<State>) => {
  try {
    const serializedState = JSON.stringify(_.pick(state, ["pixel"]));
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const store = createStore(reducers, loadState());

store.subscribe(() => {
  try {
    saveState(store.getState());
  } catch {
    // ignore write errors
  }
});

export default store;

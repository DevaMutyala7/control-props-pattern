import { useReducer } from "react";

enum ActionKind {
  click = "click",
  select = "select"
}

type State = {
  open: boolean;
};

type ActionType = {
  type: ActionKind;
  payload: string;
};

const SelectReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case ActionKind.click:
      return { ...state, open: true };
    case ActionKind.select:
      return { open: false, value: action.payload };
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
};

export const useSelect = (reducer = SelectReducer) => {
  const [state, dispatch] = useReducer(reducer, { open: false, value: "" });

  const setOnClick = () => {
    dispatch({ type: ActionKind.click, payload: "" });
  };

  const selectOption = (value: string) => {
    dispatch({ type: ActionKind.select, payload: value });
  };

  return { open: state.open, setOnClick, selectOption };
};

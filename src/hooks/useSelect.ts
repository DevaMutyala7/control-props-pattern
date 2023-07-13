import { useReducer } from "react";

enum ActionKind {
  click = "click",
  select = "select",
}

interface State {
  open: boolean;
  selectedOption?: string;
}

interface ActionType {
  type: ActionKind;
  payload?: string;
}

const SelectReducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case ActionKind.click:
      return { ...state, open: !state.open };
    case ActionKind.select:
      return { open: false, selectedOption: action.payload };
    default:
      throw new Error(`unhandled action type ${action.type}`);
  }
};

export const useSelect = ({
  value,
  onValueChange,
  reducer = SelectReducer,
}: {
  value?: string;
  onValueChange?: (value: string) => void;
  reducer?: (state: State, action: ActionType) => State;
}) => {
  const [state, dispatch] = useReducer(reducer, { open: false });

  const isValueProvided = value != null;
  const selectedOption = isValueProvided ? value : state.selectedOption;

  const dispatchWithOnChange = (action: ActionType, value: string) => {
    if (isValueProvided) {
      onValueChange?.(value);
    } else {
      dispatch(action);
    }
  };

  const setOnClick = () => {
    dispatch({ type: ActionKind.click });
  };

  const selectOption = (value: string) => {
    dispatchWithOnChange({ type: ActionKind.select, payload: value }, value);
  };

  return {
    open: state.open,
    setOnClick,
    selectOption,
    selectedOption,
  };
};

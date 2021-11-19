import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const GlobalContext = () =>useContext(Context);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const INCREASE = "increase";
const DECREASE = "decrease";

function reducer(state, action) {
  switch (action.type) {
    case INCREASE:
      return {
        counter: state.counter + action.payload,
      };
    case DECREASE:
      return {
        counter: state.counter - action.payload,
      };
    default:
      return { ...state };
  }
}

const increase = (payload) => ({
  type: INCREASE,
  payload,
});

const decrease = (payload) => ({
  type: DECREASE,
  payload,
});

export { Context, GlobalContext, ContextProvider, increase, decrease };


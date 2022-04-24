/* eslint-disable max-len */
import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";
import initState from "./initialState";

export const Context = createContext({});
type Props = {
  children: JSX.Element;
};

export default function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(Reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

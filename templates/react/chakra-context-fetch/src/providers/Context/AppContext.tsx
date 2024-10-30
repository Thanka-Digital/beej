import { type PropsWithChildren, useReducer } from "react";

import { AppContext, AppStateDispatch } from "./context";
import { appReducer, initialAppState } from "../reducers/AppReducer";

export default function AppProvider({ children }: PropsWithChildren) {
  const [appState, appStateDispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={appState}>
      <AppStateDispatch.Provider value={appStateDispatch}>
        {children}
      </AppStateDispatch.Provider>
    </AppContext.Provider>
  );
}

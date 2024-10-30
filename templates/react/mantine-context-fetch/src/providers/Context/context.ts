import { createContext, Dispatch } from "react";
import { initialAppState } from "../reducers/AppReducer";
import { AppContextAction, AppContextState } from "../reducers/type";

export const AppContext = createContext<AppContextState>(initialAppState);
export const AppStateDispatch = createContext<Dispatch<AppContextAction>>(() => { });

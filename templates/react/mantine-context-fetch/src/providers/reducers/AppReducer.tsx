import {
  AppContextAction,
  AppContextActionType,
  AppContextState,
} from "./type";

export const initialAppState: AppContextState = {
  user: null,
  error: null,
};

export function appReducer(
  state: AppContextState,
  action: AppContextAction
): AppContextState {
  switch (action.type) {
    case AppContextActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case AppContextActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload as APIErrorResponseType,
      };
    case AppContextActionType.RESET_USER:
      return {
        ...state,
        user: null,
      };
    case AppContextActionType.RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

export type AppContextState = {
  user: dynamicObject | null;
  error: APIErrorResponseType | null;
}

export enum AppContextActionType {
  SET_USER = "SET_USER",
  SET_ERROR = "SET_ERROR",
  RESET_USER = "RESET_USER",
  RESET_ERROR = "RESET_ERROR",
}

export type AppContextAction = {
  type: AppContextActionType;
  payload: dynamicObject | APIErrorResponseType;
}

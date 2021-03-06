import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

import {
  loginIsPending,
  loginSuccess,
  loginError,
} from "./user.action.creators";
interface IUserPayload {
  errorMessage?: string;
  userData?: {};
  token?: string;
}
/*
    you can replace this implementation with whatever api call using axios or fetch etc 
    replace ThunkAction<void, {}, {}, AnyAction> by  replace ThunkAction<Promise<void>, {}, {}, AnyAction>
*/
/**
 *
 * @param username
 * @param password
 */
export const LoginAction = (
  username: string,
  password: string
): ThunkAction<void, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    let response: IUserPayload = {};
    dispatch(loginIsPending());

    if (username === "aymen") {
      if (password === "123") {
        response = {
          userData: {
            username: "aymen",
            email: "mohamedaymen.ourabi@gmail.com",
          },
          token: "2auyeiuahiuui87998",
        };
        localStorage.setItem("token", String(response.token));
        return dispatch(loginSuccess(response));
      } else {
        response = {
          errorMessage: "password incorrect",
        };
        return dispatch(loginError(response));
      }
    } else {
      response = {
        errorMessage: "user does not exist",
      };
      return dispatch(loginError(response));
    }
  };
};

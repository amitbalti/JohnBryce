import { User, UserLogIn } from "../../Model/User";

// Phase 1: Create the data that should be exposed to the app
export class UserState {
  public users: User[] = [];
}

// Phase 2: which actions we want to expose
export enum AuthActionType {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT = "LOGOUT",
  REGISTER_REQUEST = "REGISTER_REQUEST",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
}

// Phase 3: how the data structure will be - action, payload
export interface AuthAction {
  type: AuthActionType;
  payload?: any;
}

// Phase 4: the function that needs to be run according to action
export function userLogedInRequestAction(loginData: UserLogIn) {
  return { type: AuthActionType.LOGIN_REQUEST, payload: loginData };
}
export function userLogedInSuccess() {}
export function userLogedInFailure() {}
export function userLoggedOut() {}
export function userRegisterRequest() {}
export function userRegisterSuccess(user: User): AuthAction {
  return { type: AuthActionType.REGISTER_SUCCESS, payload: user };
}
export function userRegisterFailure() {}

// Phase 5: building the reducer by it's signature. We will not handle or use this function, the redux will handle it for us.
// export function authUserReducer(
//   currentState: UserState = new UserState(),
//   action: AuthAction
// ): UserState {
//   const newState = { ...currentState };
//   switch (action.type) {
//     case VacationActionType.vacationAdded:
//       newState.vacations[action.payload.vacationId] = action.payload;
//       break;
//     case VacationActionType.vacationDeleted:
//       newState.vacations[action.payload.vacationId] = new Vacation(
//         "na",
//         "na",
//         new Date(),
//         new Date(),
//         0,
//         "na",
//         action.payload.vacationId
//       );
//       break;
//     case VacationActionType.vacationUpdated:
//       newState.vacations[action.payload.vacationId] = action.payload;
//       break;
//     case VacationActionType.vacationDownloaded:
//       // error -> newState.vacations = JSON.parse(localStorage.getItem("vacation"));
//       newState.vacations = action.payload;
//       break;
//   }
//   // localStorage.setItem("vacation",JSON.stringify(newState.vacations));
//   return newState;
// }
//////////// CHATGPT ////////////
// // Phase 1: Create the data that should be exposed to the app
// export interface AuthState {
//   loggedIn: boolean;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   loggedIn: false,
//   loading: false,
//   error: null,
// };

// // Phase 2: Define the action types
// export enum AuthActionType {
//   LOGIN_REQUEST = "LOGIN_REQUEST",
//   LOGIN_SUCCESS = "LOGIN_SUCCESS",
//   LOGIN_FAILURE = "LOGIN_FAILURE",
//   LOGOUT = "LOGOUT",
//   REGISTER_REQUEST = "REGISTER_REQUEST",
//   REGISTER_SUCCESS = "REGISTER_SUCCESS",
//   REGISTER_FAILURE = "REGISTER_FAILURE",
// }

// // Phase 3: Define the actions
// interface LoginRequestAction {
//   type: AuthActionType.LOGIN_REQUEST;
// }

// interface LoginSuccessAction {
//   type: AuthActionType.LOGIN_SUCCESS;
// }

// interface LoginFailureAction {
//   type: AuthActionType.LOGIN_FAILURE;
//   payload: { error: string };
// }

// interface LogoutAction {
//   type: AuthActionType.LOGOUT;
// }

// interface RegisterRequestAction {
//   type: AuthActionType.REGISTER_REQUEST;
// }

// interface RegisterSuccessAction {
//   type: AuthActionType.REGISTER_SUCCESS;
// }

// interface RegisterFailureAction {
//   type: AuthActionType.REGISTER_FAILURE;
//   payload: { error: string };
// }

// type AuthAction =
//   | LoginRequestAction
//   | LoginSuccessAction
//   | LoginFailureAction
//   | LogoutAction
//   | RegisterRequestAction
//   | RegisterSuccessAction
//   | RegisterFailureAction;

// // Phase 4: Define the reducer function
// export function authReducer(
//   state = initialState,
//   action: AuthAction
// ): AuthState {
//   switch (action.type) {
//     case AuthActionType.LOGIN_REQUEST:
//     case AuthActionType.REGISTER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case AuthActionType.LOGIN_SUCCESS:
//     case AuthActionType.REGISTER_SUCCESS:
//       return {
//         ...state,
//         loggedIn: true,
//         loading: false,
//         error: null,
//       };
//     case AuthActionType.LOGIN_FAILURE:
//     case AuthActionType.REGISTER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: (action as LoginFailureAction | RegisterFailureAction).payload
//           .error,
//       };
//     case AuthActionType.LOGOUT:
//       return {
//         ...state,
//         loggedIn: false,
//         loading: false,
//         error: null,
//       };
//     default:
//       return state;
//   }
// }

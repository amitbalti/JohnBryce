import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

// Combine multiple reducers if needed
const rootReducer = combineReducers({
  auth: authReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

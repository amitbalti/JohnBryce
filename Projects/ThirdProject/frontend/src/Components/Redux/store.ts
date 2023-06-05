// Single reducer

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { vacationReducer } from "./VacationReducer";

const reducers = combineReducers({VacationState:vacationReducer});
export const store = configureStore({reducer:reducers});
import { combineReducers } from "@reduxjs/toolkit";
import authReducer, { authSlice } from "./redux/auth/authSlice";

const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
})

export default rootReducer;

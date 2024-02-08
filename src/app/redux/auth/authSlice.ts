import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { AuthState } from "../../../configs/types";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: 'auth',
  storage,
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    signOut(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectCurrentUser: (state) => state.user,
    selectToken: (state) => state.token,
  }
})

export default persistReducer(persistConfig, authSlice.reducer);

export const {
  signIn,
  signOut,
  setUser,
} = authSlice.actions;

export const {
  selectIsAuthenticated,
  selectCurrentUser,
  selectToken,
} = authSlice.selectors;

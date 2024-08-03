import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  isAuthenticating: boolean;
  error: string | null; // Optional: for error handling
}

const initialState: AuthState = {
  isAuthenticating: true,
  isAuthenticated: false,
  user: null,
  error: null, // Optional: for error handling
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isAuthenticating = true;
      state.error = null; // Clear any previous error
    },
    setUser: (state, action: PayloadAction<any | null>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.error = null; // Clear any previous error
    },
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isAuthenticating = true;
      state.error = null; // Clear any previous error
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isAuthenticating = false;
      state.error = null; // Clear any previous error
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isAuthenticating = false;
    },
    loadData: (state) => {
      // You might handle local state changes here, if needed
    },
  },
});

export const { login, logout, setUser, setError, signUp, loadData } =
  authSlice.actions;
export default authSlice.reducer;

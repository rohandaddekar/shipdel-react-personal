import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUserTokens {
  refresh: string;
  access: string;
}

const storedUserTokens = localStorage.getItem("authUserTokens");

const initialState: AuthUserTokens | null = storedUserTokens
  ? JSON.parse(storedUserTokens)
  : null;

const authUserTokensSlice = createSlice({
  name: "authUserTokens",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AuthUserTokens>) => {
      const user = action.payload;
      localStorage.setItem("authUserTokens", JSON.stringify(user));
      return user;
    },
    signOut: (state) => {
      localStorage.removeItem("authUserTokens");
      return null;
    },
  },
});

export const { signIn, signOut } = authUserTokensSlice.actions;

export default authUserTokensSlice.reducer;

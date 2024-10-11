import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthUser {
  id: number;
  name: string;
  email: string;
}

const storedUser = localStorage.getItem("authUser");

const initialState: AuthUser | null = storedUser
  ? JSON.parse(storedUser)
  : null;

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<AuthUser>) => {
      const user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(user));
      return user;
    },
    signOut: (state) => {
      localStorage.removeItem("authUser");
      return null;
    },
  },
});

export const { signIn, signOut } = authUserSlice.actions;

export default authUserSlice.reducer;

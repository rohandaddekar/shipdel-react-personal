import topMenuReducer from "./topMenuSlice";
import darkModeReducer from "./darkModeSlice";
import sideMenuReducer from "./sideMenuSlice";
import authUserTokensReducer from "./authUserTokensSlice";
import simpleMenuReducer from "./simpleMenuSlice";
import colorSchemeReducer from "./colorSchemeSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    colorScheme: colorSchemeReducer,
    sideMenu: sideMenuReducer,
    simpleMenu: simpleMenuReducer,
    topMenu: topMenuReducer,
    authUserTokens: authUserTokensReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

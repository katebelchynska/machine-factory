import { configureStore } from "@reduxjs/toolkit";
import machineEvents from "../../machine/events/store/machineEventsSlice";
import machineActions from "../../machine/actions/store/machineActionsSlice";
import languageSwitcher from "./slice/languageSwitcherSlice";

const store = configureStore({
  reducer: { machineEvents, machineActions, languageSwitcher },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

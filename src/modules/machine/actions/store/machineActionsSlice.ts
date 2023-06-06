import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../core/store";

export interface Action {
  actionId: string;
  title: string;
}

const initialState: Action[] = [];

const machineActionsSlice = createSlice({
  name: "machineActions",
  initialState,
  reducers: {
    machineActionAdd: (state, action: PayloadAction<Action>) => {
      state.push(action.payload);
    },
    machineActionDelete: (state) => {
      state.shift();
    },
  },
});

export const { machineActionAdd, machineActionDelete } =
  machineActionsSlice.actions;

export const machineActionSelector = (state: RootState) => state.machineActions;

export default machineActionsSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface Event {
  eventId: string;
  title: string;
}

const initialState: Array<Event> = [
  {
    eventId: "",
    title: "",
  },
];
const machineEventsSlice = createSlice({
  name: "machineEvents",
  initialState,
  reducers: {
    machineEventAdd: (state, action: PayloadAction<Event>) => {
      state.push(action.payload);
    },
    machineEventDelete: (state) => {
      state.pop();
    },
  },
});

export const { machineEventAdd, machineEventDelete } =
  machineEventsSlice.actions;

export const machineEventSelector = (state: RootState) => state.machineEvents;

export default machineEventsSlice.reducer;

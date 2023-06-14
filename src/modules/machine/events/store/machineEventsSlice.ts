import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { machineEventsService } from '../machineEventsService';

const { addMachineEvent, deleteMachineEvent, getList } = machineEventsService;

const useHttpAdd = async (event: Event) => {
  try {
    const res = await addMachineEvent(event);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const useHttpDelete = async () => {
  try {
    const res = await deleteMachineEvent();
    return res;
  } catch (err) {
    console.log(err);
  }
};

const useHttpGetEventsList = async (eventsArr: Event[]) => {
  try {
    const res = await getList(eventsArr);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addEvent = createAsyncThunk('events/addEvent', async (event: Event) => {
  const data = await useHttpAdd(event);
  return data;
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async () => {
  const data = await useHttpDelete();
  return data;
});

export const getEventsList = createAsyncThunk('events/getEventList', async (eventsArr: Event[]) => {
  const data = await useHttpGetEventsList(eventsArr);
  console.log(data);
  return data;
});

export interface Event {
  eventId: string;
  title: string;
}

export interface EventState {
  events: Event[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const initialState = {
  events: [],
  loading: 'idle',
} as EventState;

const machineEventsSlice = createSlice({
  name: 'machineEvents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
        state.loading = 'succeeded';
      })
      .addCase(deleteEvent.fulfilled, (state) => {
        state.events.pop();
        state.loading = 'succeeded';
      })
      .addCase(getEventsList.fulfilled, (state) => {
        state.events;
        state.loading = 'succeeded';
      });
  },
});

export const machineEventSelector = (state: RootState) => state.machineEvents.events;

export default machineEventsSlice.reducer;

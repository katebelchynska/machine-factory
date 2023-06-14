import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { machineEventsService } from '../machineEventsService';
import { Event, EventState, LoadingStatus } from '../models';

const { addMachineEvent, deleteMachineEvent, getList } = machineEventsService;

export const addEvent = createAsyncThunk('events/addEvent', async (event: Event) => {
  const data = addMachineEvent(event)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const deleteEvent = createAsyncThunk('events/deleteEvent', async () => {
  const data = deleteMachineEvent()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const getEventsList = createAsyncThunk('events/getEventList', async (eventsArr: Event[]) => {
  const data = getList(eventsArr)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const initialState = {
  events: [],
  loading: LoadingStatus.Idle,
} as EventState;

const machineEventsSlice = createSlice({
  name: 'machineEvents',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events.push(action.payload as Event);
        state.loading = LoadingStatus.Succeeded;
      })
      .addCase(deleteEvent.fulfilled, (state) => {
        state.events.pop();
        state.loading = LoadingStatus.Succeeded;
      })
      .addCase(getEventsList.fulfilled, (state) => {
        state.events;
        state.loading = LoadingStatus.Succeeded;
      });
  },
});

export const machineEventSelector = (state: RootState) => state.machineEvents.events;

export default machineEventsSlice.reducer;

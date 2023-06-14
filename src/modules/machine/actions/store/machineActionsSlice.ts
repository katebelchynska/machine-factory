import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { machineActionsService } from '../machineActionsService';
import { Action, ActionState, LoadingStatus } from '../models';

const { addMachineAction, deleteMachineAction, getList } = machineActionsService;

export const addAction = createAsyncThunk('actions/addAction', async (action: Action) => {
  const data = addMachineAction(action)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const deleteAction = createAsyncThunk('actions/deleteAction', async () => {
  const data = deleteMachineAction()
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const getActionsList = createAsyncThunk('actions/getActionList', async (list: Action[]) => {
  const data = getList(list)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
});

export const initialState = {
  actions: [],
  loading: LoadingStatus.Idle,
} as ActionState;

const machineActionsSlice = createSlice({
  name: 'machineActions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAction.fulfilled, (state, action) => {
        state.actions.push(action.payload as Action);
        state.loading = LoadingStatus.Succeeded;
      })
      .addCase(deleteAction.fulfilled, (state) => {
        state.actions.shift();
        state.loading = LoadingStatus.Succeeded;
      })
      .addCase(getActionsList.fulfilled, (state) => {
        state.actions;
        state.loading = LoadingStatus.Succeeded;
      });
  },
});

export const machineActionSelector = (state: RootState) => state.machineActions.actions;

export default machineActionsSlice.reducer;

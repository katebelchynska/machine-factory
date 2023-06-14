import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { machineActionsService } from '../machineActionsService';

const { addMachineAction, deleteMachineAction, getList } = machineActionsService;

const useHttpAdd = async (action: Action) => {
  try {
    const res = await addMachineAction(action);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const useHttpDelete = async () => {
  try {
    const res = await deleteMachineAction();
    return res;
  } catch (err) {
    console.log(err);
  }
};

const useHttpGetActionsList = async (actionsArr: Action[]) => {
  try {
    const res = await getList(actionsArr);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const addAction = createAsyncThunk('actions/addAction', async (action: Action) => {
  const data = await useHttpAdd(action);
  return data;
});

export const deleteAction = createAsyncThunk('actions/deleteAction', async () => {
  const data = await useHttpDelete();
  return data;
});

export const getActionsList = createAsyncThunk('actions/getActionList', async (actionsArr: Action[]) => {
  const data = await useHttpGetActionsList(actionsArr);
  console.log(data);
  return data;
});

export interface Action {
  actionId: string;
  title: string;
}

export interface ActionState {
  actions: Action[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const initialState = {
  actions: [],
  loading: 'idle',
} as ActionState;

const machineActionsSlice = createSlice({
  name: 'machineActions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAction.fulfilled, (state, action) => {
        state.actions.push(action.payload);
        state.loading = 'succeeded';
      })
      .addCase(deleteAction.fulfilled, (state) => {
        state.actions.shift();
        state.loading = 'succeeded';
      })
      .addCase(getActionsList.fulfilled, (state) => {
        state.actions;
        state.loading = 'succeeded';
      });
  },
});

export const machineActionSelector = (state: RootState) => state.machineActions.actions;

export default machineActionsSlice.reducer;

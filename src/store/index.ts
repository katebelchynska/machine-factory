import { configureStore } from '@reduxjs/toolkit';
import machineEvents from '../slices/machineEvents/machineEventsSlice';
import machineActions from '../slices/machineActions/machineActionsSlice';
 
const store = configureStore({
    reducer: {machineEvents, machineActions},
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
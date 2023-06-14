import { Action } from './store/machineActionsSlice';

export const machineActionsService = {
  getList(actionsArr: Action[]) {
    return new Promise((res) => {
      setTimeout(() => {
        res(actionsArr);
      }, 1000);
    });
  },

  addMachineAction(action: Action) {
    return new Promise((res) => {
      setTimeout(() => {
        res(action);
      }, 100);
    });
  },
  deleteMachineAction() {
    return new Promise((res) => {
      setTimeout(() => {
        res([]);
      }, 100);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

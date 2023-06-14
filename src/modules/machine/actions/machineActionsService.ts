import { Action } from './models';

export const machineActionsService = {
  getList(list: Action[]): Promise<Action[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(list);
      }, 1000);
    });
  },

  addMachineAction(action: Action): Promise<Action> {
    return new Promise((res) => {
      setTimeout(() => {
        res(action);
      }, 100);
    });
  },

  deleteMachineAction(): Promise<Action[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res([]);
      }, 100);
    });
  },
};

import { Action } from './models';
import { initialActionsState } from '../../../test/mocks/actions';

export const machineActionsService = {
  getList(): Promise<Action[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(initialActionsState.machineActions);
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

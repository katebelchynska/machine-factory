import { machineActionsService } from './machineActionsService';
import { Action } from './models';
import { initialActionsState } from '../../../test/mocks/actions';

describe('machineActionsService', () => {
  it('getList should return a list of actions', async () => {
    const list: Action[] = initialActionsState.machineActions;
    const result = await machineActionsService.getList();
    expect(result).toEqual(list);
  });

  it('addMachineAction should add a new action', async () => {
    const action: Action = initialActionsState.machineActions[0];
    const result = await machineActionsService.addMachineAction(action);
    expect(result).toEqual(action);
  });

  it('deleteMachineAction should delete an action', async () => {
    const result = await machineActionsService.deleteMachineAction();
    expect(result).toEqual([]);
  });
});

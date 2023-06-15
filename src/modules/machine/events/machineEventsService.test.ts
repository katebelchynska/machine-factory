import { machineEventsService } from './machineEventsService';
import { Event } from './models';
import { initialEventsState } from '../../../test/mocks/events';

describe('machineEventsService', () => {
  it('getList should return a list of events', async () => {
    const list: Event[] = initialEventsState.machineEvents;
    const result = await machineEventsService.getList();
    expect(result).toEqual(list);
  });

  it('addMachineEvent should add a new event', async () => {
    const action: Event = initialEventsState.machineEvents[0];
    const result = await machineEventsService.addMachineEvent(action);
    expect(result).toEqual(action);
  });

  it('deleteMachineEvent should delete an event', async () => {
    const result = await machineEventsService.deleteMachineEvent();
    expect(result).toEqual([]);
  });
});

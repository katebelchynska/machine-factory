import { Event } from './models';
import { initialEventsState } from '../../../test/mocks/events';

export const machineEventsService = {
  getList(): Promise<Event[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(initialEventsState.machineEvents);
      }, 100);
    });
  },

  addMachineEvent(event: Event): Promise<Event> {
    return new Promise((res) => {
      setTimeout(() => {
        res(event);
      }, 100);
    });
  },

  deleteMachineEvent(): Promise<Event[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res([]);
      }, 100);
    });
  },
};

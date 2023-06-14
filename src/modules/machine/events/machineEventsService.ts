import { Event } from './models';

export const machineEventsService = {
  getList(eventsArr: Event[]): Promise<Event[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(eventsArr);
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

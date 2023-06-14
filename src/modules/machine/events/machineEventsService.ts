import { Event } from './store/machineEventsSlice';

export const machineEventsService = {
  getList(eventsArr: Event[]) {
    return new Promise((res) => {
      setTimeout(() => {
        res(eventsArr);
      }, 100);
    });
  },

  addMachineEvent(event: Event) {
    return new Promise((res) => {
      setTimeout(() => {
        res(event);
      }, 100);
    });
  },
  deleteMachineEvent() {
    return new Promise((res) => {
      setTimeout(() => {
        res([]);
      }, 100);
    });
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;

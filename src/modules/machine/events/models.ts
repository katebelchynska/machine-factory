/* eslint-disable no-unused-vars */
export interface Event {
  eventId: string;
  title: string;
}
export enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface EventState {
  events: Event[];
  loading: LoadingStatus;
}

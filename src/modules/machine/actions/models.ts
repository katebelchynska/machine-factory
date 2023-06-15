/* eslint-disable no-unused-vars */
export interface Action {
  actionId: string;
  title: string;
}

export enum LoadingStatus {
  Idle = 'idle',
  Pending = 'pending',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export interface ActionState {
  actions: Action[];
  loading: LoadingStatus;
}

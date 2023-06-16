import { atom } from 'recoil';
import { Action } from '../../machine/actions/models';
import { Event } from '../../machine/events/models';

export const textActionState = atom({
  key: 'textActionState',
  default: '',
});

export const listActionsState = atom({
  key: 'listActionsState',
  default: [] as Action[],
});

export const textEventState = atom({
  key: 'textEventState',
  default: '',
});

export const listEventsState = atom({
  key: 'listEventsState',
  default: [] as Event[],
});

import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import store from '../../core/store';
import { initialEventsState } from '../../../test/mocks/events';
import MachineEvents from './MachineEvents';

describe('MachineEvents component', () => {
  it('should render MachineEvents component', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineEvents />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );
  });

  it('should add a machine event', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineEvents />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );

    const addButton = screen.getByTestId('add-event-btn');
    const inputEvent = screen.getByTestId('event-input');

    fireEvent.change(inputEvent, { target: { value: 'New Event' } });
    fireEvent.click(addButton);
  });

  it('should delete a machine event', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineEvents />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
      { initialEventsState },
    );

    const deleteButton = screen.getByTestId('delete-event-btn');
    fireEvent.click(deleteButton);
  });

  it('should navigate to the main page', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineEvents />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );

    const link = screen.getByTestId('link-main-page');
    fireEvent.click(link);
  });
});

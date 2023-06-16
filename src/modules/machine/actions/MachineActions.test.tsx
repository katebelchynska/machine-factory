import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import store from '../../core/store/';
import { initialActionsState } from '../../../test/mocks/actions';
import MachineActions from './MachineActions';

describe('MachineActions component', () => {
  it('should render MachineActions component', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineActions />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );
  });

  it('should add a machine action', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineActions />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );

    const addButton = screen.getByTestId('add-action-btn');
    const inputAction = screen.getByTestId('action-input');

    fireEvent.change(inputAction, { target: { value: 'New Action' } });
    fireEvent.click(addButton);
  });

  it('should delete a machine action', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineActions />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
      { initialActionsState },
    );

    const deleteButton = screen.getByTestId('delete-action-btn');
    fireEvent.click(deleteButton);
  });

  it('should navigate to machine events page', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <Provider store={store}>
            <MachineActions />
          </Provider>
        </BrowserRouter>
      </RecoilRoot>,
    );

    const link = screen.getByTestId('link-event-page');
    fireEvent.click(link);
  });
});

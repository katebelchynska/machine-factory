import { Provider } from "react-redux/es/exports";
import store from "../store/";

import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { MAIN_PAGE, EVENTS_PAGE, PAGE_404 } from "../constants/routes";
import MachineActions from "./MachineActionsPage";
import MachineEvents from "./MachineEventsPage";
import Page404 from "./404";

const router = createBrowserRouter([
  {
    path: MAIN_PAGE,
    element: <MachineActions />,
  },
  {
    path: EVENTS_PAGE,
    element: <MachineEvents />,
  },
  {
    path: PAGE_404,
    element: <Page404 />,
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;

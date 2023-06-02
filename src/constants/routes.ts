import Page404 from "../pages/404";
import MachineActions from "../pages/MachineActionsPage";
import MachineEvents from "../pages/MachineEventsPage";

export const Routes = [
  {
    path: "/",
    Element: MachineActions,
  },
  {
    path: "/events",
    Element: MachineEvents,
  },
  {
    path: "*",
    Element: Page404,
  },
];

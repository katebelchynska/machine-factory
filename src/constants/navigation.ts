import Page404 from "../pages/404";
import MachineActions from "../pages/MachineActionsPage";
import MachineEvents from "../pages/MachineEventsPage";

export const PATH = {
  MAIN_PAGE: "/",
  EVENTS_PAGE: "/events",
  PAGE_404: "*",
};

export const router = [
  {
    path: PATH.MAIN_PAGE,
    Element: MachineActions,
  },
  {
    path: PATH.EVENTS_PAGE,
    Element: MachineEvents,
  },
  {
    path: PATH.PAGE_404,
    Element: Page404,
  },
];

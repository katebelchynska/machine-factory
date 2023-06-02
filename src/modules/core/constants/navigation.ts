import Page404 from "../../404/404";
import MachineActions from "../../machine/actions/MachineActions";
import MachineEvents from "../../machine/events/MachineEvents";

export const PATH = {
  MAIN_PAGE: "/",
  EVENTS_PAGE: "/events",
  PAGE_404: "*",
};

export const ROUTER = [
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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page404 from "./pages/404.tsx";
import MachineActions from "./pages/MachineActionsPage.tsx";
import MachineEvents from "./pages/MachineEventsPage.tsx";

import { Provider } from "react-redux/es/exports";
import store from "./store/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MachineActions />,
  },
  {
    path: "/events",
    element: <MachineEvents />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

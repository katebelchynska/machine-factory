import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import store from "./modules/core/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTER } from "./modules/core/constants/navigation";
import "./modules/core/translation/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {ROUTER.map(({ path, Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

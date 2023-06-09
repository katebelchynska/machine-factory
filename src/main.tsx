import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux/es/exports";
import store from "./modules/core/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTER } from "./modules/core/constants/navigation";
import i18n from "./assets/i18n/i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Routes>
            {ROUTER.map(({ path, Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

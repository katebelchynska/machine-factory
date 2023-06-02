import { Provider } from "react-redux/es/exports";
import store from "../store/";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Routes as AppRoutes } from "../constants/routes";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {AppRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

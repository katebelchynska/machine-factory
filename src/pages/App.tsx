import { Provider } from "react-redux/es/exports";
import store from "../store/";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { router } from '../constants/navigation';

const App = () => (
  <Provider store={store}>
     <BrowserRouter>
      <Routes>
        {router.map(({ path, Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;

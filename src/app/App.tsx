import React from 'react';
import './styles/App.css'
import AppRouter from "./providers/router/ui/AppRouter.tsx";
import {store} from "./providers/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {

  return (
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </Provider>
      </React.StrictMode>
  );
};

export default App

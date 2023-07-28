import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <GlobalStyles/>
                <App />
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>
);
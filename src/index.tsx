import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./store/useStore";
import store from "./store/store";

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StoreProvider value={store}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);

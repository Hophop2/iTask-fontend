import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Toaster } from "react-hot-toast";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <Toaster position="top-center" />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

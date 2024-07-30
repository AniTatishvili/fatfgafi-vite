import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

import i18n from "./i18n";

import { I18nextProvider } from "react-i18next";

import "../src/app/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

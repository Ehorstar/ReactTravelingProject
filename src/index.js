import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";
import router from "./Router";
import RegistrationProvider from "./providers/RegistrationProvider";
import TripsProvider from "./providers/TripsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TripsProvider>
    <RegistrationProvider>
      <I18nProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </I18nProvider>
    </RegistrationProvider>
  </TripsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import List from "./pages/List";
import TripsHistory from "./pages/TripsHistory";
import Settings from "./pages/Settings";
import ThemeProvider from "./providers/ThemeProvider";
import I18nProvider from "./providers/I18nProvider";
import { getHotels, getTours } from "./loaders/TravelLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "booking",
        element: <Booking />,
        loader: getTours,
      },
      {
        path: "listpage",
        element: <List />,
      },
      {
        path: "tripshistory",
        element: <TripsHistory />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </I18nProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

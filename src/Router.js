import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import { getTours } from "./loaders/TravelLoader";
import TripsHistory from "./pages/TripsHistory";
import Settings from "./pages/Settings";
import { getSearchTours } from "./loaders/SearchLoader";
import Tours from "./pages/Tours";
import Tour from "./pages/Tour";
import Reservation from "./pages/Reservation";
import Login from "./pages/Login";

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
        path: "booking/:countryTo",
        loader: getTours,
        element: <Booking />,
      },
      {
        path: "listpage",
        loader: getTours,
        element: <Tours />,
      },
      {
        path: "tripshistory",
        element: <TripsHistory />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "search",
        loader: getSearchTours,
        element: <Tours />,
      },
      {
        path: "tour/:to",
        loader: getTours,
        element: <Tour />,
      },
      {
        path: "test",
        element: <Reservation />,
      },
      {
        path: "login",
        element: <Login />,
      }
    ],
  },
]);

export default router;

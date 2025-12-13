import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Booking from "./pages/Booking";
import { getTours } from "./loaders/TravelLoader";
import List from "./pages/List";
import TripsHistory from "./pages/TripsHistory";
import Settings from "./pages/Settings";
import { getSearchTours } from "./loaders/SearchLoader";

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
        element: <List />,
      },
      {
        path: "listpage",
        loader: getTours,
        element: <Booking />,
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
        element: <Booking />,
      },
    ],
  },
]);

export default router;

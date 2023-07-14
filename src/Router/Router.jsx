import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Details from "../Home/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/dish/:id",
      element: <Details/>,
    },
  ]);
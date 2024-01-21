import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Emergency from "./Emergency";
import ChatAI from "./ChatAI";
import AboutUs from "./AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Emergency />,
      },
      {
        path: "emergency",
        element: <Emergency />,
      },
      {
        path: "chatAI",
        element: <ChatAI />,
      },
      // {
      //   path: "aboutUs",
      //   element: <AboutUs />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Mainpage } from "./Mainpage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App key={null} />,
    children: [
      {
        element: <Mainpage key={null} />,
        path: "/",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode key={null}>
    <RouterProvider router={router} key={null} />
  </React.StrictMode>
);

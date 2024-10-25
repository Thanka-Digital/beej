import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "../pages/HomePage";

// Routes in application
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <>About Us</>,
  },
  {
    path: "/faq",
    element: <>FAQ</>,
  },
  {
    path: "/services",
    children: [
      {
        path: "service-a",
        element: <>Service A</>,
      },
      {
        path: "service-b",
        element: <>Service B</>,
      },
    ],
  },
];

export const route = createBrowserRouter(routes);

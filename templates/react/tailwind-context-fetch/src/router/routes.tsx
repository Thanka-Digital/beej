import { createBrowserRouter, type RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import TestPage from "@/pages/TestPage";

// Routes in application
const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
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

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaticRoot from "./components/static-root/StaticRoot";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Details from "./contents/recipe-details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StaticRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://chef-recipe-hunter-server-gitbyimran.vercel.app/chef"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "recipe/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-gitbyimran.vercel.app/recipe/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

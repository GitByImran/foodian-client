import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StaticRoot from "./components/static-root/StaticRoot";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Protected from "./components/protected-route/Protected";
import Details from "./contents/recipe-details/Details";
import Register from "./authentication/register/Register";
import Login from "./authentication/login/Login";
import Provider from "./authentication/provider/Provider";
import Error from "./components/error-page/Error";

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
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "recipe/:id",
        element: (
          <Protected>
            <Details />
          </Protected>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-gitbyimran.vercel.app/recipe/${params.id}`
          ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

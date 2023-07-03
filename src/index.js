import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import HomePage from "./routes/Home";
import About from "./routes/About";
import Explore from "./routes/Explore";
import ExploreRouteHandler from "./routes/ExploreRouteHandler";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Artwork from "./routes/Artwork";
import NonProfits from "./routes/NonProfits";
import StoriesOfKids from "./routes/StoriesOfKids";
import Contact from "./routes/Contact";
import ArtworkRouteHandler from "./routes/ArtworkRouteHandler";
import ArtworkDisplay from "./routes/ArtworkDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "explore",
        element: <ExploreRouteHandler />,
        children: [
          { path: "", element: <Explore /> },
          {
            path: "artwork",
            element: <ArtworkRouteHandler />,
            children: [
              { path: "", element: <Artwork /> },
              { path: "art/:art_id", element: <ArtworkDisplay /> },
            ],
          },
          {
            path: "non-profits",
            element: <NonProfits />,
            children: [
              { path: "non-profit/:non_profit_id", element: "Non-profit" },
            ],
          },
          {
            path: "stories-of-kids",
            element: <StoriesOfKids />,
            children: [{ path: "kid/:kid_id", element: "Story" }],
          },
        ],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import HomePage from "./routes/Home";
import About from "./routes/About";
import Explore from "./routes/explore/Explore";
import ExploreRouteHandler from "./routes/explore/ExploreRouteHandler";
import ErrorPage from "./error-page";
import Artwork from "./routes/artwork/Artwork";
import NonProfits from "./routes/non-profits/NonProfits";
import NonProfitsRouteHandler from "./routes/non-profits/NonProfitsRouteHandler";
import StoriesOfKids from "./routes/stories-of-kids/StoriesOfKids";
import SOKidDisplay from "./routes/stories-of-kids/SOKidDisplay";
import SOKidsRouteHandler from "./routes/stories-of-kids/SOKidsRouteHandler";
import Contact from "./routes/Contact";
import ArtworkRouteHandler from "./routes/artwork/ArtworkRouteHandler";
import ArtworkDisplay from "./routes/artwork/ArtworkDisplay";
import NonProfitDisplay from "./routes/non-profits/NonProfitDisplay";

export default function AppRouter() {
  const [lang, setLang] = useState("en");
  const [currentPage, setCurrentPage] = useState("home");

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <App
          lang={lang}
          setLang={setLang}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ),
      errorElement: <ErrorPage lang={lang} />,
      children: [
        { path: "/", element: <HomePage lang={lang} /> },
        {
          path: "explore",
          element: <ExploreRouteHandler />,
          children: [
            { path: "", element: <Explore lang={lang} /> },
            {
              path: "artwork",
              element: <ArtworkRouteHandler />,
              children: [
                { path: "", element: <Artwork lang={lang} /> },
                {
                  path: "art/:art_id",
                  element: <ArtworkDisplay lang={lang} />,
                },
              ],
            },
            {
              path: "non-profits",
              element: <NonProfitsRouteHandler />,
              children: [
                { path: "", element: <NonProfits lang={lang} /> },
                {
                  path: "non-profit/:non_profit_id",
                  element: <NonProfitDisplay lang={lang} />,
                },
              ],
            },
            {
              path: "stories-of-kids",
              element: <SOKidsRouteHandler />,
              children: [
                { path: "", element: <StoriesOfKids lang={lang} /> },
                { path: "kid/:kid_id", element: <SOKidDisplay lang={lang} /> },
              ],
            },
          ],
        },
        { path: "about", element: <About lang={lang} /> },
        { path: "contact", element: <Contact lang={lang} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

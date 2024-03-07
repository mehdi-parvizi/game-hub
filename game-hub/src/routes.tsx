import { createBrowserRouter } from "react-router-dom";
import GameGrid from "./components/GameGrid";
import GameDetailPage from "./components/GameDetailPage";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;

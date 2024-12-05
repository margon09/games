import { createBrowserRouter } from "react-router-dom"
import { lazy, Suspense } from "react"
import Layout from "../pages/Layout"
import ErrorPage from "../pages/ErrorPage"
import SkeletonFallback from "../components/SkeletonFallback"

const HomePage = lazy(() => import("../pages/HomePage"))
const GameDetailsPage = lazy(() => import("../pages/GameDetailsPage"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SkeletonFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "games/:slug",
        element: (
          <Suspense fallback={<SkeletonFallback />}>
            <GameDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
])

export default router

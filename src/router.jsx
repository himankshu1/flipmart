import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

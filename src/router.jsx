import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Profile from "./components/Profile";
// import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

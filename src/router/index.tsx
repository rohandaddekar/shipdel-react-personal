import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard";
import SideMenu from "../layouts/SideMenu";
import { useRoutes } from "react-router-dom";
import Error404 from "../pages/Errors/Error404";
import ForgotPassword from "../pages/Auth/ForgotPassword";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
  ];

  return useRoutes(routes);
}

export default Router;

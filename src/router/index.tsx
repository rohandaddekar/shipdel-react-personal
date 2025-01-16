import SignUp from "../pages/Auth/SignUp";
import SignIn from "../pages/Auth/SignIn";
import Dashboard from "../pages/Dashboard";
import { useRoutes } from "react-router-dom";
import Error404 from "../pages/Errors/Error404";
import CreateOrders from "../pages/Orders/Create";
import RateCalculator from "../pages/Calculators/Rate";
import ForgotPassword from "../pages/Auth/ForgotPassword";

import SideMenu from "../layouts/SideMenu";

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
        {
          path: "/orders/create",
          element: <CreateOrders />,
        },
        {
          path: "/calculators/rate",
          element: <RateCalculator />,
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

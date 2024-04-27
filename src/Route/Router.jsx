import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";

import Profile from "../Pages/Profile/Profile";

import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ErrorPage from "../components/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../Pages/PrivetRoutes/PrivetRoutes";
import PrivateRoutes2 from "../Pages/PrivetRoutes/PrivetRoutes2";
import Appointment from "../Pages/Appoinment/Appoinment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader:()=>fetch('/estatesData.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: (
          <PrivateRoutes2>
            <Registration></Registration>
          </PrivateRoutes2>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },

      {
        path: "/property/:id",
        element: <PrivateRoutes></PrivateRoutes>,
      },

      {
        path: "/agent/:id",
        element: (
          <PrivateRoutes>
            <Appointment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/appointment/:id",
        element: (
          <PrivateRoutes>
            <Appointment />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

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
import AllArtItems from "../components/AllArt&CraftItems/AllArtItems";
import AddCraftItems from "../Pages/AddCraftItems/AddCraftItems";
import ArtCraftList from "../Pages/ArtCraftList/ArtCraftList";
import UpdateItems from "../components/UpdateItems/UpdateItems";
import CraftItem from "../components/CraftItems/CraftItem";
import CraftItemDetails from "../components/CraftItemCard/CraftItemDetails";
import CategoryPage from "../components/ArtAndCraft/CategoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://fhgallery.vercel.app/items"),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allitems",
        element: <AllArtItems />,
        loader: () => fetch("https://fhgallery.vercel.app/items"),
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
        path: "/addcraftitem",
        element: (
          <PrivateRoutes>
            <AddCraftItems />
          </PrivateRoutes>
        ),
      },
      {
        path: "/art&craftlist",
        element: (
          <PrivateRoutes>
            <ArtCraftList />
          </PrivateRoutes>
        ),
        loader: () => fetch("https://fhgallery.vercel.app/items"),
      },

      {
        path: "/updateitems/:id",
        element: (
          <PrivateRoutes>
            <UpdateItems />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://fhgallery.vercel.app/items/${params.id}`),
      },
      {
        path: "/craftitems",
        element: (
          <PrivateRoutes>
            <CraftItem />
          </PrivateRoutes>
        ),
        loader: () => fetch("https://fhgallery.vercel.app/items"),
      },
      {
        path: "/craftitems/:id",
        element: (
          <PrivateRoutes>
            <CraftItemDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://fhgallery.vercel.app/items/${params.id}`),
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
      {
        path: "/category/:id",
        element: (
          <PrivateRoutes>
            <CategoryPage />{" "}
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;

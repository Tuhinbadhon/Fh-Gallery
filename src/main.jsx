import React from "react";
import ReactDOM from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);

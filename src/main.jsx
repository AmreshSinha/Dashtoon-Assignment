import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/inter";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/joy/styles";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import framesxTheme from "./theme";
import ColorSchemeToggle from "./components/ColorSchemeToggle";
import Create from "./Create.jsx";
import "./index.css";
import Share from "./Share.jsx";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
  {
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/share",
        element: <Share />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
        <CssBaseline />
        <ColorSchemeToggle />
        <RouterProvider router={router} />
        {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        /> */}
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

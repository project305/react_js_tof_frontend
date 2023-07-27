import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { IndexRouter } from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./modules/home/pages/home-page";
// import ErrorHandler from "./common/components/error-handler";

const router = createBrowserRouter([
//   { path: "/", element: <HomePage /> },
  ...IndexRouter,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorHandler}> */}
      <App>
        <RouterProvider router={router}></RouterProvider>
      </App>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);

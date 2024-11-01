import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import BookDetail from "./Components/BookDetail.jsx";
import ListedBooks from "./Components/ListedBooks.jsx";

  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      // { path: "/dashboard", element: <Dashboard></Dashboard> },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/booksData.json"), // don't load all data for one
      },
      {
        path: "/listedBooks/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"), // don't load all data for one
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);

import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddItem from "../pages/Dashboard/AddItem";
import ProductDetails from "../components/CardSection/ProductDetails";
import UpdateItem from "../pages/Dashboard/UpdateItem";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "products/:id",
        Component: ProductDetails,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "allusers",
        Component: AllUsers,
      },
      {
        path: "addItem",
        Component: AddItem,
      },
      {
        path: "updateItem/:id",
        Component: UpdateItem,
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
      },
    ],
  },
]);

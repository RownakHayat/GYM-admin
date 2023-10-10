import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Manu from "./components/menu/Manu";
import Login from "./pages/login/Login";
import "./styles/global.scss"

const Layout = ()=>{
  return (
    <div className="main bg-[#575615]">
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Manu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: (
          <Home></Home>
        )
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "users",
        element: <Users />
      },
      
    ]
  },
  {
    path:"login",
    element: <Login />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
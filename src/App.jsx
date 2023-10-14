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
    <div className="main bg-[#1f1e02]">
      <Login />
      <Navbar />
      <div className="container flex text-[#f6f7ed]">
        <div className="menuContainer w-52">
          <Manu />
        </div>
        <div className="contentContainer w-100% px-6 py-12">
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
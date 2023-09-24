import React from "react";
import { Home } from "../../Pages/Home/Home";
import { Products } from "../../Pages/Products/Products";
import { Users } from "../../Pages/Users/Users";
import { Login } from "../../Pages/Login/Login";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import { Menu } from "../Menu/Menu";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { User } from "../../Pages/User/User";
import { Product } from "../../Pages/Product/Product";

function App() {
  /**EL layout contendra navbar menu en el outlet las diferentes paginas y un footer, segun react a de poenrse la primera letra en mayuscula para que entienda que es un componente */
  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
            {/** This allows nested UI to show up when child routes are rendered.*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  /*Las Rutas enlazaran al layout y del él llamare a las paginas con children, luego la pagina login quedara fuera del layout.*/
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

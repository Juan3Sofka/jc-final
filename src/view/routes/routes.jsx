import { createBrowserRouter } from "react-router-dom";
import { Form } from "../Pages/IniciarSesion/Form";
import { Registro } from "../Pages/Registro/Registro";
import { Header } from "../components/Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Form
  },
  {
    path: "registro",
    Component: Registro
  },
  {
    path:"home",
    Component: Header
  }
]);

    // children: [
    //   {
    //     path: "home",
    //     Component: Layout, //poner el componente del header
    //   },
    // ],
    //Ponemos las rutas hijas que salen a partir del primer archivo, les quitamos el /
    // children: [
    //     {
    //         path: '',
    //         Component: Home
    //     },
    //     {
    //         path: 'iniciarSesion',
    //         Component: Form
    //     }
    // ]


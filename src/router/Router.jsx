import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import Users from "../component/Users";
import ViewCoffee from "../component/ViewCoffee";
import AddCoffee from "../component/addCoffee";
import UpdateCoffee from "../component/updateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: ()=>fetch(' https://coffee-store-server-99fwrlmdg-tamanna-zaman-bristys-projects.vercel.app/coffee')
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path: "/coffee/:id",
        element: <ViewCoffee></ViewCoffee>,
        loader:({params})=>fetch(` https://coffee-store-server-99fwrlmdg-tamanna-zaman-bristys-projects.vercel.app/coffee/${params.id}`)
    },

    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(` https://coffee-store-server-99fwrlmdg-tamanna-zaman-bristys-projects.vercel.app/coffee/${params.id}`)

    },
    {
        path: "/signin",
        element: <SignIn></SignIn>,

    },
    {
        path: "/signup",
        element: <SignUp></SignUp>,

    },
    {
        path: "/user",
        element: <Users></Users>,
        loader: ()=>fetch(' https://coffee-store-server-99fwrlmdg-tamanna-zaman-bristys-projects.vercel.app/user')

    },
]);

export default router
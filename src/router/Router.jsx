import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../component/ErrorPage";
import Root from "../component/Root";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import UpdateCoffee from "../component/UpdateCoffee";
import Users from "../component/Users";
import ViewCoffee from "../component/ViewCoffee";
import AddCoffee from "../component/addCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: "/",
                element: <App></App>,
                loader: () => fetch('https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/coffee/:id",
                element: <ViewCoffee></ViewCoffee>,
                loader: ({ params }) => fetch(` https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/coffee/${params.id}`)
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({ params }) => fetch(` https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/coffee/${params.id}`)

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
                loader: () => fetch(' https://coffee-store-server-5b5tkll33-tamanna-zaman-bristys-projects.vercel.app/user')

            },

        ]
    }

]);

export default router
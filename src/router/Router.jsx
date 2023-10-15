import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ViewCoffee from "../component/ViewCoffee";
import AddCoffee from "../component/addCoffee";
import UpdateCoffee from "../component/updateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: ()=>fetch('http://localhost:5000/coffee')
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path: "/coffee/:id",
        element: <ViewCoffee></ViewCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
    },

    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

    },
]);

export default router
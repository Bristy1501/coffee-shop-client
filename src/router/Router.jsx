import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../component/addCoffee";
import UpdateCoffee from "../component/updateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>
    },
    {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>
    },
]);

export default router
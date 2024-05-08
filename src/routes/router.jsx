import { createBrowserRouter } from "react-router-dom";
import { Home, Users, Edit } from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: "/edit-user/:id",
        element: <Edit />,
    }
]);
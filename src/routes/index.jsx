import { createBrowserRouter } from "react-router-dom";
import Root from '../Root';
import Login from '../components/Login';
import Focus from "../components/Focus";
import Hour from "../components/Hour";
import Tasks from "../components/Task";
import Background from "../components/Background";
import Playlist from "../components/Playlist";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/focus",
                element: <Focus />
            },
            {
                path: "/hour",
                element: <Hour />
            },
            {
                path: "/tasks",
                element: <Tasks />
            },
            {
                path: "/background",
                element: <Background />
            },
            {
                path: "/playlist",
                element: <Playlist />
            },
        ]
    },
])

export default router;
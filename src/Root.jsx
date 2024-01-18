import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";
import './Root.css';

function Root() {
    return(
            <div className="container">
                <Sidebar />
                <Outlet />
            </div>
    )
}

export default Root;
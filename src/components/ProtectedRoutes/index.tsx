import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function ProtectedRoutes() {
    const location = useLocation();

    return (
        <Outlet />
    )
    }

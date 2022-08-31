import { Navigate, Outlet, useLocation } from "react-router-dom";


export default function ProtectedRoutes() {
    const location = useLocation();

    return userId? (
        <Outlet />
    ) :
    (
       <Navigate to="/login" replace state={{ from: location}} /> 
    )

    }

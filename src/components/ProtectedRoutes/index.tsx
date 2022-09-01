import { Navigate, Outlet, useLocation } from "react-router-dom";



export default function ProtectedRoutes() {
    const location = useLocation();
<<<<<<< HEAD

    return(
=======
    
    return localStorage.getItem('@idUser')? (
        <Outlet />
    ) :
    (
>>>>>>> 5274a54fb4eb900c772dc6085b9677718fa65506
       <Navigate to="/login" replace state={{ from: location}} /> 
    )

    }

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../pages/Home";
import LadingPage from "../pages/LadingPage";




export default function RoutesMain(){
    return(
        <Routes>
            <Route path="/" element={<LadingPage/>}/>
            <Route element={<ProtectedRoutes />}>    
                <Route path="/Home" element={<Home/>} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace={true} />}/>
        </Routes>
    )
}
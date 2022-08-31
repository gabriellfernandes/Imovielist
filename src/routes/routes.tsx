import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LadingPage from "../pages/LadingPage";




export default function RoutesMain(){
    return(
        <Routes>
            <Route path="/" element={<LadingPage/>}/>
            <Route path="/Home" element={<Home/>} />
            {/* <Route element={<ProtectedRoutes />}>     //usar quando tiver o token
            <Route path="/dashboard" element={<Dashboard/>} />
         </Route> */}
            <Route path="*" element={<Navigate to="/" replace={true} />}/>
        </Routes>
    )
}
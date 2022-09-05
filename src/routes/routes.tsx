import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Home from "../pages/Home";
import LadingPage from "../pages/LadingPage";
import { LoginForm } from "../pages/loginPage/login";
import { MoviePage } from "../pages/MoviePage";
import { RegisterForm } from "../pages/registerPage/register";
import { UserProfile } from "../pages/UserProfile/userProfile";


export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/Movie" element={<MoviePage />} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/" element={<LadingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

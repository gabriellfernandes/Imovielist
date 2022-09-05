import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import ExtendList from "../pages/ExtendList";

import Home from "../pages/Home";
import LadingPage from "../pages/LadingPage";
import { LoginForm } from "../pages/loginPage/login";
import { MoviePage } from "../pages/MoviePage";
import { RegisterForm } from "../pages/registerPage/register";

export default function RoutesMain() {
  return (
    <Routes>
      <Route path="/Movie" element={<MoviePage />} />
      <Route path="/login" element={<LoginForm/>} />
      <Route path="/register" element={<RegisterForm/>} />
      <Route path="/" element={<LadingPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/Home" element={<Home />} />
      </Route>
      <Route path="/extend/:group" element={<ExtendList />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
}

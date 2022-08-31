import React, { useContext, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContextValues } from "../context/authContext";

export function LoginForm() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const { login } = useContext(ContextValues)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <div>
      <form onSubmit={handleSubmit(login)}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          {...register("email")}
          placeholder="Email"
          id="email"
        />
        <span>
          <>{errors.email?.message}</>
        </span>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Senha"
          id="password"
        />
        <span>
          <>{errors.password?.message}</>
        </span>

        <button type="submit">Logar-se</button>
      </form>
    </div>
  );
}

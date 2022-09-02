import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../context/authContext";


export function RegisterForm() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Mandatory name"),
    email: yup.string().required("Mandatory email").email("Invalid email"),
    password: yup.string()
    .required("Password required")
    .min(8, "Must contain 8 digits")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must contain 8 characters, uppercase or lowercase, a number and a special character"
    ),
    confirm_password: yup
    .string()
    .required("Confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
    avatar: yup.string(),
  });

  const { registerForm } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <div>
      <form onSubmit={handleSubmit(registerForm)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          {...register("name")}
          placeholder="name"
          id="name"
        />
        <span>
          <>{errors.name?.message}</>
        </span>
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
        <label htmlFor="password">Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          id="password"
        />
        <span>
          <>{errors.password?.message}</>
        </span>
        <label htmlFor="confirm_password">Confirm password</label>
        <input
          type="password"
          {...register("confirm_password")}
          placeholder="Confirm password"
          id="confirm_password"
        />
        <span>
          <>{errors.confirm_password?.message}</>
        </span>
        <label htmlFor="avatar">Profile picture</label>
        <input
          type="text"
          {...register("avatar")}
          placeholder="Profile picture"
          id="avatar"
        />
        <span>
          <>{errors.avatar?.message}</>
        </span>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
import { createContext, ReactNode } from "react";
import { FieldValue } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiFake } from "../services/api";

interface IContextValues {
  login: (data: FieldValue<ILoginData>) => void;
  registerForm: (data: FieldValue<ILoginData>) => void;
}

interface IContext {
  children: ReactNode;
}

interface ILoginData {
  email: string;
  password: string;
}

interface IReponseLogin {
  data: {
    accessToken: string;
    user: {
      name: string;
      email: string;
      avatar?: string;
      id: string;
    };
  };
}

interface IReponseRegister{
    data: {
        accessToken: string;
        user: {
          name: string;
          email: string;
          avatar?: string;
          id: string;
        };
    };
}

interface IReponseError {
  response: {
    data: string;
  };
}

export const AuthContext = createContext<IContextValues>(
  {} as IContextValues
);

export function AuthProvider({ children }: IContext) {
  const login = (data: FieldValue<ILoginData>) => {
    apiFake
      .post("/login", data)
      .then((res: IReponseLogin) => {
        console.log(res)
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        toast.success("Successfully logged in");
      })
      .catch((err: IReponseError) => {
        toast.error(err.response.data);
      });
  };

  const registerForm = (data: FieldValue<IReponseRegister>) => {
    apiFake
      .post("/register", data)
      .then((res: IReponseRegister) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        toast.success("Successfully registered");
      })
      .catch((err: IReponseError) => {
        toast.error(err.response.data);
      });
  };

  return (
    <AuthContext.Provider value={{ login, registerForm }}>
      {children}
    </AuthContext.Provider>
  );
}

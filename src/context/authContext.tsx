import { createContext, ReactNode } from "react";
import { FieldValue } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiFake } from "../services/api";

interface IContextValues {
  login: (data: FieldValue<ILoginData>) => void;
  register: (data: FieldValue<ILoginData>) => void;
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

interface IIReponseError {
  response: {
    data: string;
  };
}

export const ContextValues = createContext<IContextValues>(
  {} as IContextValues
);

export function Context({ children }: IContext) {
  const login = (data: FieldValue<ILoginData>) => {
    apiFake
      .post("/login", data)
      .then((res: IReponseLogin) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        toast.success("Successfully logged in");
      })
      .catch((err: IIReponseError) => {
        toast.error(err.response.data);
      });
  };

  const register = (data: FieldValue<IReponseRegister>) => {
    apiFake
      .post("/register", data)
      .then((res: IReponseRegister) => {
        localStorage.setItem("@token", res.data.accessToken);
        localStorage.setItem("@idUser", res.data.user.id);
        toast.success("Successfully registered");
      })
      .catch((err: IIReponseError) => {
        toast.error(err.response.data);
      });
  };

  return (
    <ContextValues.Provider value={{ login, register }}>
      {children}
    </ContextValues.Provider>
  );
}

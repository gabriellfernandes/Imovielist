import { createContext, ReactNode } from "react";
import { FieldValue } from "react-hook-form";

interface IContextValues{
    login: (data: FieldValue<ILoginData>) => void;
}

interface IContext {
    children: ReactNode
}

interface ILoginData{
    email: string;
    password: string;
}

export const ContextValues = createContext<IContextValues>({} as IContextValues);



export function Context({ children }: IContext) {

    const login = (data: FieldValue<ILoginData>) => {

        console.log(data)
    }

  return <ContextValues.Provider value={{ login }}>
    {
        children
    }
    </ContextValues.Provider>;
}

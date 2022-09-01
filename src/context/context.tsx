import { ReactElement } from "react";
import {PopularMovieProvider} from "./popularMovieContext"
import {AuthProvider} from "./authContext"

interface IContextProps
{
    children : ReactElement
}

function Provider({children} : IContextProps) : ReactElement
{
    return(
        <AuthProvider>
            <PopularMovieProvider>
                {children}
            </PopularMovieProvider>
        </AuthProvider>
    )
}
export {Provider}
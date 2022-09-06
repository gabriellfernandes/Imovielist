import { ReactElement } from "react";
import {PopularMovieProvider} from "./popularMovieContext"
import {AuthProvider} from "./authContext"
import {ComingSoonProvider} from "./comingSoonContext"
import {RatedProvider} from "./ratedContext"
import { PlayProvider } from "./playContext";

interface IContextProps
{
    children : ReactElement
}

function Provider({children} : IContextProps) : ReactElement
{
    return(
        <AuthProvider>
            <PopularMovieProvider>
                <ComingSoonProvider>
                    <RatedProvider>
                            <PlayProvider>
                                {children}
                            </PlayProvider>
                        </RatedProvider>
                </ComingSoonProvider>
            </PopularMovieProvider>
        </AuthProvider>
    )
}
export {Provider}
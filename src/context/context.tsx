import { ReactElement } from "react";
import {PopularMovieProvider} from "./popularMovieContext"
import {AuthProvider} from "./authContext"
import {ComingSoonProvider} from "./comingSoonContext"
import {RatedProvider} from "./ratedContext"
import { PlayProvider } from "./playContext";
import { GenresOfMoviesProvider } from "./GenresOfMoviesContext";
import { ActionProvider } from "./Genres/Documentary";

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
                                <GenresOfMoviesProvider>
                                    <ActionProvider>
                                        {children}
                                    </ActionProvider>
                                </GenresOfMoviesProvider>
                            </PlayProvider>
                        </RatedProvider>
                </ComingSoonProvider>
            </PopularMovieProvider>
        </AuthProvider>
    )
}
export {Provider}
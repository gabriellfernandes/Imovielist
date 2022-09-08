import { ReactElement,createContext,useState, Dispatch, SetStateAction } from "react";
import { Search } from "react-router-dom";
import { ISearch, ISearchResponse } from "../interfaces/axiosReponseApiTmdb";

interface ISearchContext
{
    search : Array<ISearch>;
    setSearch : Dispatch<SetStateAction<Array<ISearch>>>;
    searchPerPage : number;
    setSearchPerPage : Dispatch<SetStateAction<number>>
}
interface ISearchProps
{
    children : ReactElement
}
const SearchContext = createContext<ISearchContext>({} as ISearchContext)

function SearchProvider({children} : ISearchProps) : ReactElement
{
    const [search,setSearch] = useState<Array<ISearch>>([] as ISearch[])
    const [searchPerPage,setSearchPerPage] = useState<number>(80)
    return(
        <SearchContext.Provider value={{search,setSearch,searchPerPage,setSearchPerPage,}}>{children}</SearchContext.Provider>
    )
}
export {SearchProvider,SearchContext}
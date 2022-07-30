import { createContext, useContext } from "react"
import { GlobalContent } from "../type";

export const Context = createContext<GlobalContent>({
    data: [],
    setData: () => { },
    dataItems: [],
    setDataItems: () => { },
    offset: 1,
    setOffset: () => { },
    // currentPage: 1,
    // setCurrentPage: () => { },
    perPage: 4,
    pageCount: 0,
    setPageCount: () => { }
});

export const useGlobalContext = () => useContext(Context);

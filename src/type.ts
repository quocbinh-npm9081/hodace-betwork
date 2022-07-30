export interface Bds {
    st: number,
    id: number,
    title: string,
    status: string,
    lifeTime: string,
    deadline: number,
    typeNew: string
}
export type GlobalContent = {
    data: Bds[],
    setData: (arr: Bds[]) => void,
    dataItems: Bds[] | undefined,
    setDataItems: (arr: Bds[] | undefined) => void,
    offset: number,
    setOffset: (a: any) => void,
    // currentPage: number,
    // setCurrentPage: (a: any) => void,
    perPage: number,
    pageCount: number,
    setPageCount: (a: any) => void
}


export interface ResponsePagination<T>{
    items:T[],
    currentPage:number,
    totalPage:number,
    // pageSize:number,
    totalCount:number,
    hasPreviousPage:boolean,
    hasNextPage:boolean,
    // nextPageNumber:number,
    // previousPageNumber:number,
}
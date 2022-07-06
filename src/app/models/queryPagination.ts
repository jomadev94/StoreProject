export class QueryPagination {
  pageSize: number;
  pageNumber: number;

  constructor(pS: number, pN: number) {
    this.pageSize = pS;
    this.pageNumber = pN;
  }
}

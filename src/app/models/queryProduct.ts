import { Categories } from "@enumerables/categories";

export interface QueryProduct{
    pageNumber: number;
    pageSize?: number;
    name?:string | null;
    category?:Categories;
    ofert?:boolean | null;
    stock?:boolean | null;
    minPrice?:number | null;
    maxPrice?:number | null;
    order?:string | null;
}
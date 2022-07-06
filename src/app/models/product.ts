import { Categories } from "@enumerables/categories";
import { FileUpload } from "./file";
import { Tag } from "./tag";

export interface Product{
    productId:string
    name:string;
    category:Categories;
    description:string;
    price:number;
    discount:number;
    stock:number;
    date:Date;
    tags?:Tag[];
    files?:FileUpload[];
}
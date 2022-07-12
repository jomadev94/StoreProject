import { Categories } from "@enumerables/categories";
import { FileUpload } from "./file";
import { ProductBase } from "./productBase";
import { Tag } from "./tag";

export interface Product extends ProductBase{
    category:Categories;
    description:string;
    date:Date;
    tags?:Tag[];
    files?:FileUpload[];
}
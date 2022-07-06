import { FileUpload } from "./file";
import { Product } from "./product";
import { Tag } from "./tag";

export interface CreateProduct{
    product:Product,
    files:FileUpload[],
    tags:Tag[]
}
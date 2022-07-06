import { Product } from "./product";
import { Tag } from "./tag";

export interface UpdateTags{
    product:Product,
    newTags:Tag[],
    deleteTags:Tag[] | undefined
}
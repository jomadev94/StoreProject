import { Image } from "@models/view/image";

export interface Product{
    name:string;
    description:string;
    discount:number;
    date:Date;
    price:number;
    gallery:Image[];
}
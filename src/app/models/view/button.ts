import { StaticProvider } from "@angular/core";
import { Roles } from "@enumerables/roles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Image } from "./image";

export interface Button{
    text?:string,
    href?:string,
    params?:any,
    background?:Image,
    id?:string,
    roles?:Roles[],
    icon?:IconProp,
    component?:any,
    providers?: StaticProvider[],
}
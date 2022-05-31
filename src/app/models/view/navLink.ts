import { Roles } from "@enumerables/roles";

export interface NavLink{
    title:string,
    roles:Roles[],
    href?:string,
    isButton?:boolean,
    id?:string,
}
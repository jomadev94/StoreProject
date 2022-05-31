import { Roles } from "@enumerables/roles";
import { NavLink } from "@models/view/navLink";

export interface NavSection{
    title:string,
    links:NavLink[],
    roles:Roles[]
}
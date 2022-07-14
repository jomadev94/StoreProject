import { Roles } from "@enumerables/roles";
import { Button } from "./button";

export interface NavSection{
    title:string,
    links:Button[],
    roles:Roles[]
}
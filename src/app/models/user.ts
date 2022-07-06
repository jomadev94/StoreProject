import { Roles } from "@enumerables/roles";

export interface User{
    userId?:string,
    role:Roles
    name?:string,
    lastname?:string,
    email?:string,
    birthday?:Date,
    wallet?:number,
}
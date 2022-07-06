import { StaticProvider } from "@angular/core";
import { Roles } from "@enumerables/roles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface SectionButton{
    text:string,
    action:string | any,
    roles?: Roles[],
    icon?:IconProp,
    component?:any,
    providers?: StaticProvider[],
}
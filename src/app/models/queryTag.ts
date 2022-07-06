import { QueryPagination } from "./queryPagination";

export class QueryTag extends QueryPagination{
    name?:string

    constructor(pageN:number=1,pageS:number=10,name?:string) {
        super(pageS,pageN);
        if(name){
            this.name=name;
        }
    }
}
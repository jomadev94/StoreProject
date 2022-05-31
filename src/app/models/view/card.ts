export interface Card{
    name:string;
    discount:number;
    date:Date;
    price:number;
    img:{
        front:{
            src:string,
            description:string
        }
        back:{
            src:string,
            description:string
        }
    }
}
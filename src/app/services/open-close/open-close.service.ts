import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenCloseService {
  
  open:{[key:string]:BehaviorSubject<boolean>} = {
    searchCategory: new BehaviorSubject<boolean>(false),
  };

  constructor() {}

  setOpen(name:string,value:boolean): void{
    if (Object.keys(this.open).includes(name)) {
      this.open[name].next(value);
    }
  }

  closeAll():void{
    for (const key in this.open) {
      this.open[key].next(false);
    }
  }

  get(name:string):BehaviorSubject<boolean>|null{
    return Object.keys(this.open).includes(name)? this.open[name] : null
  }

}

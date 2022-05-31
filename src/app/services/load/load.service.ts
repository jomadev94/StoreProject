import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  isLoading$=new BehaviorSubject(false);

  constructor() { }

  show(){
    this.isLoading$.next(true);
  }

  hide(){
    this.isLoading$.next(false);
  }

}

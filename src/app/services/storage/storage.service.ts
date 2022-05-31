import { Injectable } from '@angular/core';
import { User } from '@models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage:Storage;

  constructor() {
    this.storage=localStorage;
  }

  retrive(key:string):any{
    const item=this.storage.getItem(key);
    if(item && item != 'undefined'){
      return JSON.parse(item);
    }
  }

  save(key:string,value:any){
    this.storage.setItem(key,JSON.stringify(value));
  }

  getToken(){
    return this.retrive('token');
  }

  setToken(token:string){
    this.save('token',token);
  }

  getUser(){
    return this.retrive('user');
  }

  setUser(user:User){
    this.save('user',user)
  }

  updateWallet(wallet:number){
    let user=this.getUser();
    user.wallet=wallet;
    this.setUser(user);
  }

  clear(){
    this.storage.removeItem('user');
    this.storage.removeItem('token');
  }

}

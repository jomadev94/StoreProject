import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Roles } from '@enumerables/roles';
import { User } from '@models/user';
import { StorageService } from '../storage/storage.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthorized:boolean;
  currentUser:User={role:Roles.NoAuth};
  private authSorce=new Subject<boolean>();
  userAuth$:Observable<boolean> =this.authSorce.asObservable();

  constructor(private storageService:StorageService) {
   const token=this.storageService.getToken();
    if(token != null){
      this.isAuthorized=true;
      this.currentUser=this.storageService.getUser();
      const data=jwt_decode(token) as User;
      this.currentUser.role=data.role;
      this.authSorce.next(this.isAuthorized);
    }
  }

  reset(){
    this.storageService.clear();
    this.currentUser={role:Roles.NoAuth}
    this.authSorce.next(false);
  }

  setAuth(token:string,user:User){
    this.storageService.save("token",token);
    this.storageService.save("user",user);
    this.currentUser=user;
    const data=jwt_decode(token) as User;
    this.currentUser.role=data.role;
    this.authSorce.next(true);
  }

  updateWallet(money:number){
    this.storageService.updateWallet(money);
    this.currentUser.wallet=money;
    this.authSorce.next(true);
  }

}

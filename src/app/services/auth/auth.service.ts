import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, Subject } from 'rxjs';
import { Roles } from '@enumerables/roles';
import { User } from '@models/user';
import { StorageService } from '../storage/storage.service';
import jwt_decode from 'jwt-decode';
import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';
import { BaseResponse } from '@models/baseResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:User={role:Roles.NoAuth};
  private authSorce=new BehaviorSubject<boolean>(false);
  userAuth$:Observable<boolean> =this.authSorce.asObservable();

  constructor(private storageService:StorageService, private dataService:DataService) {
   const token=this.storageService.getToken();
    if(token != null){
      this.currentUser=this.storageService.getUser();
      const data=jwt_decode(token) as User;
      this.currentUser.role=data.role;
      this.authSorce.next(true);
    }
  }

  async reset(){
    await lastValueFrom(this.logout());
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

  refreshToken(): Observable<BaseResponse>{
    return this.dataService.post(environment.apiUrl+'Auth/RefreshToken')
  }

  logout(): Observable<BaseResponse>{
    return this.dataService.post(environment.apiUrl+'Auth/Logout')
  }

}

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { BaseResponse } from '@models/baseResponse';
import { Credentials } from '@models/credentials';
import { Register } from '@models/register';
import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private dataService:DataService) {}

  findEmail(email:string): Observable<BaseResponse>{
    const params=new HttpParams().set("email",email);
    return this.dataService.get(environment.apiUrl+"Auth/FindEmail",params);
  }

  login(credentials:Credentials){
    return this.dataService.post(environment.apiUrl+"Auth/Login",credentials);
  }

  register(data:Register): Observable<BaseResponse>{
    return this.dataService.post(environment.apiUrl+"Auth/Register",data);
  }

  addMoney(money:number){
    return this.dataService.put(environment.apiUrl+"Auth/AddMoney",{wallet:money});
  }

  activate(key:string){
    return this.dataService.put(environment.apiUrl+`Auth/Activate/${key}`);
  }

}

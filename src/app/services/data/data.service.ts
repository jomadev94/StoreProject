import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { StorageService } from '@services/storage/storage.service';
import { BaseResponse } from '@models/baseResponse';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private storageService:StorageService) {}

  maintenance:BaseResponse={
    success:false,
    code:0,
    errorMessage:["Mantenimiento de servidor"]
  }

  addCatchError(obs:Observable<BaseResponse>){
    return obs.pipe(
      catchError(err=>{
        if(err.status === 0){
          return of(this.maintenance)
        }
        return of(err.error)
      })
    );
  }

  addOptions(params?:HttpParams):Object{
    return {
      withCredentials:true,
      observe: 'body',
      params:params
    }
  }
  
  get(url:string,httpParams?:HttpParams): Observable<BaseResponse>{
    const request=this.http.get<BaseResponse>(url,this.addOptions(httpParams));
    return this.addCatchError(request);
  }

  post(url:string,data?:any): Observable<BaseResponse>{
    const request=this.http.post<BaseResponse>(url,data,this.addOptions());
    return this.addCatchError(request);
  }

  put(url:string,data?:any,httpParams?:any): Observable<BaseResponse>{
    const request=this.http.put<BaseResponse>(url,data,this.addOptions(httpParams));
    return this.addCatchError(request);
  }

  delete(url:string,httpParams?:any): Observable<BaseResponse>{
    const request=this.http.delete<BaseResponse>(url,this.addOptions(httpParams));
    return this.addCatchError(request);
  }

}

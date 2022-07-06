import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '@models/baseResponse';
import { QueryTag } from '@models/queryTag';
import { Tag } from '@models/tag';
import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private deleteSelected$= new BehaviorSubject<boolean>(false);
  deleted$=this.deleteSelected$ as Observable<boolean>;

  constructor(private dataService:DataService) { }

  create(tag:Tag):Observable<BaseResponse>{
    return this.dataService.post(environment.apiUrl+"Tag/Create",tag)
  }

  delete(id:string):Observable<BaseResponse>{
    return this.dataService.delete(environment.apiUrl+`Tag/Delete/${id}`);
  }

  getAll(query:QueryTag):Observable<BaseResponse>{
    let params= new HttpParams().set('PageNumber',query.pageNumber).set('PageSize',query.pageSize);
    if(query?.name){
      params=params.set('Name',query.name);
    }
    return this.dataService.get(environment.apiUrl+"Tag/GetAll",params);
  }

  confirmDelete(){
    this.deleteSelected$.next(true);
  }

}

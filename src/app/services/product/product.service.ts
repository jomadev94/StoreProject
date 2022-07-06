import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '@models/baseResponse';
import { CreateProduct } from '@models/createProduct';
import { Product } from '@models/product';
import { QueryProduct } from '@models/queryProduct';
import { UpdateTags } from '@models/updateTags';
import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private dataService:DataService) {}

  create(data:CreateProduct): Observable<BaseResponse>{
    return this.dataService.post(environment.apiUrl+"Product",data);
  }

  findById(id:string):Observable<BaseResponse>{
    return this.dataService.get(environment.apiUrl+`Product/${id}`);
  }

  updateInfo(data:Product, id:string): Observable<BaseResponse>{
    return this.dataService.put(environment.apiUrl+`Product/UpdateInfo/${id}`,data);
  }

  updateTags(data:UpdateTags, id:string): Observable<BaseResponse>{
    return this.dataService.put(environment.apiUrl+`Product/UpdateTags/${id}`,data);
  }

  getProducts(data:QueryProduct):Observable<BaseResponse>{
    let params= new HttpParams();
    for (const key in data) {
      let value=data[key as keyof QueryProduct];
      if(value){
        params=params.set(key as string,value);
      }
    }
    return this.dataService.get(environment.apiUrl+"Product",params);
  }

}

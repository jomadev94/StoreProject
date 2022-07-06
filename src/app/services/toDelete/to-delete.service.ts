import { Injectable } from '@angular/core';
 import { DataService } from '@services/data/data.service';
import { environment } from 'environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDeleteService {
  
  private deleteItem:Subject<string> = new Subject<string>();
  deleted$= this.deleteItem as Observable<string>;

  constructor(private dataService:DataService) {}

  delete(key:string,id:string){
    return this.dataService.delete(environment.apiUrl+`${key}/${id}`);
  }

  markToDelete(key:string){
    this.deleteItem.next(key);
  }

}

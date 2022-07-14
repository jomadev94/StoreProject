import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage/storage.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InactiveService{

  time:number=1;
  interval:any;
  private detect=new BehaviorSubject<boolean>(false);
  closeSession$=this.detect.asObservable();
  
  constructor(private storageService:StorageService) {}

  setTime(){
    this.storageService.save('expiredTime',Date.now() + this.time * 1000 * 60);
  }

  getTime(){
    return this.storageService.retrive('expiredTime');
  }

  start(){
    this.detect.next(false);
    this.setTime();
    this.interval=setInterval(()=>{
      const expiredTime= this.getTime();
      if(expiredTime < Date.now()){
        this.stop();
      }
    }, 1000)
  }
  
  stop(){
    clearInterval(this.interval);
    this.storageService.remove('expiredTime');
    this.detect.next(true);
  }

}

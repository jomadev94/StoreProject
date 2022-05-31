import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import gsap from 'gsap';
import { StorageService } from '@services/storage/storage.service';

@Component({
  selector: 'app-cookie-modal',
  templateUrl: './cookie-modal.component.html',
  styleUrls: ['./cookie-modal.component.scss']
})
export class CookieModalComponent implements OnInit, AfterViewInit{

  @Output() close:EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(private storageService:StorageService) { }
  
  ngOnInit(): void {
    gsap.to('.cookie-modal-box',{duration:2,y:0,opacity:1,ease:"power2"});
  }
  
  ngAfterViewInit(): void {
  }
  

  acceptCookies(){
    this.storageService.save('accept-cookies',true);
    const audio=new Audio("/assets/sound/alert/cookie.mp3");
    audio.load();
    audio.play();
    gsap.to('.cookie-modal-box',{duration:2,yPercent:200,opacity:0,ease:"power2"}).then(()=>{
      this.close.emit(true);
    });
  }

}

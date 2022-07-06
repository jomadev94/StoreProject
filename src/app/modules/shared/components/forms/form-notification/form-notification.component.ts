import { AfterViewChecked, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import gsap from 'gsap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.scss'],
})
export class FormNotificationComponent implements AfterViewInit {
  @Input() error: boolean = false;
  @Input() messages: string[];

  constructor() {}
  
  ngAfterViewInit(): void {
    gsap.from('.notification',{display:"none",opacity:0, yPercent:-30, ease:"linear",repeat:1,repeatDelay:10,yoyo:true,duration:1});
  }

}

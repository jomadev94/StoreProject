import {AfterViewInit, Component, Input } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.scss'],
})
export class FormNotificationComponent{
  @Input() error: boolean = false;
  @Input() messages: string[];
}

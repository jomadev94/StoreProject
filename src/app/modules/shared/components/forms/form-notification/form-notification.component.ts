import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-notification',
  templateUrl: './form-notification.component.html',
  styleUrls: ['./form-notification.component.scss']
})
export class FormNotificationComponent implements OnInit {

  @Input() error:boolean=false;
  @Input() messages:string[];

  constructor() { }

  ngOnInit(): void {
  }

}

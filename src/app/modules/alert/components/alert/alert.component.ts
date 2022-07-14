import { Component, Input, OnInit } from '@angular/core';
import { Button } from '@models/view/button';
import { Image } from '@models/view/image';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertImg: Image;
  @Input() title: string;
  @Input() text: string;
  @Input() buttons: Button[];

  constructor() { }

  ngOnInit(): void {
  }

}

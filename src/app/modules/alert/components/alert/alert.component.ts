import { Component, Input, OnInit } from '@angular/core';
import { Image } from '@models/view/image';
import { SectionButton } from '@models/view/sectionButton';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertImg: Image;
  @Input() title: string;
  @Input() text: string;
  @Input() buttons: SectionButton[];

  constructor() { }

  ngOnInit(): void {
  }

}

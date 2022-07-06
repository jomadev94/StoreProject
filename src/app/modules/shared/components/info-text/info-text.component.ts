import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.scss']
})
export class InfoTextComponent implements OnInit {

  @Input() title:string;
  @Input() text:string;

  constructor() { }

  ngOnInit(): void {
  }

}

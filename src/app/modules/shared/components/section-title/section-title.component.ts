import { Component, Input, OnInit } from '@angular/core';
import { SectionButton } from '@models/view/sectionButton';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {

  @Input("title") title:string;
  @Input("buttons") buttons:SectionButton[];

  constructor() { }

  ngOnInit(): void {
  }

}

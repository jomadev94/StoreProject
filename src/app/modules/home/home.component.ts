import { Component, OnInit } from '@angular/core';
import { Roles } from '@enumerables/roles';
import { SectionButton } from '@models/view/sectionButton';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttons: SectionButton[] = [
    {
      text: 'ver todos',
      action: '',
      roles:[Roles.Admin,Roles.Client,Roles.NoAuth]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

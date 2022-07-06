import {
  Component,
  OnInit,
} from '@angular/core';
import { LoginComponent } from '@modules/login/components/login/login.component';
import { Globals } from '@static/globals';
import { Menu } from '@static/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  roles=Globals.roles;
  options=Menu.options;
  login= LoginComponent;

  constructor() {
  }
  
  ngOnInit(): void {
  }

}

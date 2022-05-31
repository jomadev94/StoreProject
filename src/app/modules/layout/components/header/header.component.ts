import { ComponentPortal } from '@angular/cdk/portal';
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
  login= new ComponentPortal(LoginComponent);

  constructor() {
  }
  
  ngOnInit(): void {
  }

}

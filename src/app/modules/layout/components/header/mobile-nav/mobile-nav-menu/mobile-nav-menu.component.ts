import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user';
import { NavSection } from '@models/view/navSection';
import { AddWalletComponent } from '@modules/add-wallet/components/add-wallet/add-wallet.component';
import { LoginComponent } from '@modules/login/components/login/login.component';
import { AuthService } from '@services/auth/auth.service';
import { DATA_ANY, DATA_OVREF } from '@static/data';
import { Globals } from '@static/globals';
import { Menu } from '@static/menu';

@Component({
  selector: 'app-mobile-nav-menu',
  templateUrl: './mobile-nav-menu.component.html',
  styleUrls: ['./mobile-nav-menu.component.scss']
})
export class MobileNavMenuComponent implements OnInit {

  readonly menu:NavSection[]=Menu.navSections;
  readonly roles=Globals.roles;
  components:{[key:string]:any}={
    login:LoginComponent,
    wallet:AddWalletComponent
  }

  constructor(@Inject(DATA_OVREF) public ovRef:OverlayRef, @Inject(DATA_ANY) public user:User,private authService:AuthService, private router:Router) { }

  ngOnInit(): void {}

  logout(){
    this.authService.reset();
    this.router.navigate(['home']);
    this.ovRef.detach();
  }

}

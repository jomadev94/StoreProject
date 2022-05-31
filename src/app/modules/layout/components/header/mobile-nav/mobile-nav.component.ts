import { Component, OnDestroy, OnInit } from '@angular/core';
import gsap from 'gsap';
import { User } from '@models/user';
import { Menu } from '@static/menu';
import { NavSection } from '@models/view/navSection';
import { AuthService } from '@services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Globals } from '@static/globals';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoginComponent } from '@modules/login/components/login/login.component';
import { AddWalletComponent } from '@modules/add-wallet/components/add-wallet/add-wallet.component';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit, OnDestroy {
  user:User;
  readonly menu:NavSection[]=Menu.navSections;
  readonly roles=Globals.roles;
  private subsAuth$:Subscription;
  portals:{[key:string]:ComponentPortal<any>}={
    login:new ComponentPortal(LoginComponent),
    wallet:new ComponentPortal(AddWalletComponent)
  }
  open:boolean=false;
  
  constructor(private authService:AuthService, private sso:ScrollStrategyOptions, private overlay:Overlay) {
    this.user=this.authService.currentUser;
    this.subsAuth$=this.subsAuth$=this.authService.userAuth$.subscribe(
      isAuth=>{
        this.user=this.authService.currentUser;
      }
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subsAuth$.unsubscribe();
  }

  toggleMenu():void{
    if(this.open){
      gsap.to('.mobile-nav',{opacity:0,duration:.3}).then(
        ()=>{
          this.open=false;
        }
      );
      return;
    }
    this.open=true;
  }

  logout(){
    this.authService.reset();
    this.toggleMenu();
  }

  close(event:KeyboardEvent){
    if (event.key.toUpperCase().includes("ESC")) {
      gsap.to('.mobile-nav',{opacity:0,duration:.3}).then(
        ()=>{
          this.open=false;
        }
      );
    }
  }

  openMenu(){
    gsap.to('.mobile-nav',{opacity:1,duration:.5});
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import gsap from 'gsap';
import { User } from '@models/user';
import { Menu } from '@static/menu';
import { NavSection } from '@models/view/navSection';
import { AuthService } from '@services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Globals } from '@static/globals';
import { Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { LoginComponent } from '@modules/login/components/login/login.component';
import { AddWalletComponent } from '@modules/add-wallet/components/add-wallet/add-wallet.component';
import { Router } from '@angular/router';

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
  components:{[key:string]:any}={
    login:LoginComponent,
    wallet:AddWalletComponent
  }
  open:boolean=false;
  
  constructor(private authService:AuthService, private sso:ScrollStrategyOptions, private overlay:Overlay, private router:Router) {
    this.user=this.authService.currentUser;
    this.subsAuth$=this.authService.userAuth$.subscribe(
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
    this.router.navigate(['home']);
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

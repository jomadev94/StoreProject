import { Component, OnDestroy, OnInit, StaticProvider } from '@angular/core';
import { User } from '@models/user';
import { AuthService } from '@services/auth/auth.service';
import { Subscription } from 'rxjs';
import { Globals } from '@static/globals';
import { Router } from '@angular/router';
import { MobileNavMenuComponent } from './mobile-nav-menu/mobile-nav-menu.component';
import { DATA_ANY } from '@static/data';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit, OnDestroy {
  user:User;
  component=MobileNavMenuComponent;
  providers:StaticProvider[]=[];
  readonly roles=Globals.roles;
  private subsAuth$:Subscription;
  icon:IconProp='bars';
  
  constructor(private authService:AuthService, private router:Router) {
    this.user=this.authService.currentUser;
    this.subsAuth$=this.authService.userAuth$.subscribe(
      isAuth=>{
        this.user=this.authService.currentUser;
        this.providers=[{provide:DATA_ANY,useValue:this.user}]
      }
    );
  }

  changeIcon(){
    this.icon=this.icon === 'xmark'? 'bars':'xmark';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subsAuth$.unsubscribe();
  }

}

import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '@enumerables/roles';
import { AuthService } from '@services/auth/auth.service';
import { InactiveService } from '@services/inactive/inactive.service';
import { DATA_OVREF } from '@static/data';
import gsap from 'gsap';

@Component({
  selector: 'app-inactivity-modal',
  templateUrl: './inactivity-modal.component.html',
  styleUrls: ['./inactivity-modal.component.scss']
})
export class InactivityModalComponent implements OnInit, OnDestroy {

  count:number=10;
  interval:any;

  constructor(@Inject(DATA_OVREF) public ovRef: OverlayRef,private router:Router, private authService:AuthService) {
    this.ovRef.backdropClick().subscribe(()=>{
      this.closeModal();
    });
    this.interval=setInterval(()=>{
      if(this.count == 0){
        this.logout();
        return
      }
      this.count--;
    },1000)
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  logout(){
    clearInterval(this.interval);
    this.authService.reset();
    this.closeModal();
    this.router.navigate(['/home']);
  }

  closeModal(){
    gsap.to('.modal-box',{duration:.2,opacity:0,ease:"power2"}).then(()=>{
      this.ovRef.detach();
    });
  }

}

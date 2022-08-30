import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth/auth.service';
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
    this.ovRef.backdropClick().subscribe(async()=>{
      await this.closeModal();
    });
    this.interval=setInterval(async ()=>{
      if(this.count == 0){
        await this.logout();
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

  async logout(){
    clearInterval(this.interval);
    await this.authService.reset();
    await this.closeModal();

    this.router.navigate(['/home']);
  }

  async closeModal(){
    await gsap.to('.modal-box',{duration:.2,opacity:0,ease:"power2"});
    this.ovRef.detach();
  }

}

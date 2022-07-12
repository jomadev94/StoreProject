import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import gsap from 'gsap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-menu',
  templateUrl: './modal-menu.component.html',
  styleUrls: ['./modal-menu.component.scss']
})
export class ModalMenuComponent implements OnInit, OnDestroy {

  @Input() overRef: OverlayRef;
  private _routerSubs:Subscription;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.overRef.backdropClick().subscribe(()=>{
      this.close();
    });
    this._routerSubs=this.router.events.subscribe(()=>{
      this.close();
    })
  }

  ngOnDestroy(): void {
    this._routerSubs.unsubscribe();
  }

  close(){
    gsap.to('.modal-menu',{duration:.2,opacity:0,ease:"power2"}).then(()=>{
      this.overRef.detach();
    });
  }

}

import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() title:string;
  @Input() eventModal:EventEmitter<boolean>;

  private _routerSubs:Subscription;

  constructor(private router:Router) {
  }

  ngOnDestroy(): void {
    this._routerSubs.unsubscribe();
  }

  ngOnInit(): void {
    this._routerSubs=this.router.events.subscribe(()=>{
      this.close();
    })
  }

  close(){
    this.eventModal.emit(true);
  }

}

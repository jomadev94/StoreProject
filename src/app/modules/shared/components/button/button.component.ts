import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { LoadService } from '@services/load/load.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {

  @Input() type:string="button";
  @Input() disabled:boolean;
  @Input() className:string='button-primary';
  @Input() text:string;
  @Input() autoLoad:boolean=true;
  @Input() load:boolean=false;
  @Output() clicked:EventEmitter<boolean> = new EventEmitter<boolean>();

  load$:Subscription;

  constructor(private loadService:LoadService) {
  }
  
  ngOnInit(): void {
    if(this.autoLoad){
      this.load$=this.loadService.isLoading$.subscribe(res=>{
        this.load=res;
      });
    } 
  }

  ngOnDestroy(): void {
    if(this.autoLoad)this.load$.unsubscribe();
  }

  emit(){
    this.clicked.emit(true);
  }

}

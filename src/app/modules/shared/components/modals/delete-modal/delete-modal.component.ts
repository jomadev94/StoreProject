import { OverlayRef } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { ToDeleteService } from '@services/toDelete/to-delete.service';
import { DATA_ANY, DATA_ID, DATA_KEY, DATA_OVREF, DATA_TITLE } from '@static/data';
import gsap from 'gsap';
import {firstValueFrom, lastValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit{

  errMsg:string[]=[];

  constructor(@Inject(DATA_OVREF) public overRef:OverlayRef,
  @Inject(DATA_ID) public id:string,
  @Inject(DATA_ANY) public item:any,
  @Inject(DATA_TITLE) public title:string,
  @Inject(DATA_KEY) public key:string,
  private toDeleteService:ToDeleteService
  ) { }
  

  ngOnInit(): void {
  }

  async deleteItem(){
    const res=await firstValueFrom(this.toDeleteService.delete(this.key,this.id));
    if(res.success){
      this.toDeleteService.markToDelete(this.key);
      this.closeModal();
      return
    }
    this.errMsg=res.errorMessage;
  }

  closeModal(){
    gsap
      .to('.modal-box', { duration: 0.2, opacity: 0, ease: 'power2' })
      .then(() => {
        this.overRef.detach();
      });
  }

}

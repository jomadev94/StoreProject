import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Image } from '@models/view/image';
import { DATA_IMGS, DATA_NUMBER } from '@static/data';

@Component({
  selector: 'app-full-preview',
  templateUrl: './full-preview.component.html',
  styleUrls: ['./full-preview.component.scss']
})
export class FullPreviewComponent implements OnInit {

  imgSelectedFull:Image;
  currentPosition: number = 0;

  @HostListener('document:keydown',['$event'])
  onKeydown(event: KeyboardEvent){
    if(event.key==="ArrowLeft"){
      this.prevFull();
    }
    if(event.key === "ArrowRight"){
      this.nextFull();
    }
  }

  constructor(@Inject(DATA_IMGS) public imgs:Image[],@Inject(DATA_NUMBER) public indexFull:number) {
    this.imgSelectedFull=this.imgs[this.indexFull];
  }

  ngOnInit(): void {
  }

  nextFull() {
    if (this.indexFull < this.imgs.length - 1) {
      this.indexFull++;
      this.imgSelectedFull = this.imgs[this.indexFull];
    }
  }

  prevFull() {
    if (this.indexFull > 0) {
      this.indexFull--;
      this.imgSelectedFull = this.imgs[this.indexFull];
    }
  }

}

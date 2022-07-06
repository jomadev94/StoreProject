import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Image } from '@models/view/image';

@Component({
  selector: 'app-img-preview',
  templateUrl: './img-preview.component.html',
  styleUrls: ['./img-preview.component.scss']
})
export class ImgPreviewComponent implements OnInit {

  @Output() clicked:EventEmitter<Event> = new EventEmitter<Event>();
  @Input() imgsPreview:Image[];
  @Input() icon:IconProp;

  constructor() { }

  ngOnInit(): void {
  }

  emit(event:Event){
    this.clicked.emit(event);
  }

}

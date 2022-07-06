import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { LoadService } from '@services/load/load.service';
import { Observable, Subscription } from 'rxjs';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent extends InputModelComponent implements OnInit {

  @Output() isClicked: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() buttonIcon: IconName;
  @Input() type: string="text";
  @Input() load: boolean | null=false;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  onClick(){
    this.isClicked.emit(true);
  }

}

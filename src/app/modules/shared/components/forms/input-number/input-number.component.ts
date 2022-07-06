import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends InputModelComponent  implements OnInit {
  
  @Input() numberIcon: IconName;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}

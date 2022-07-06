import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-input-model',
  template:'',
})
export class InputModelComponent{

  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() hideLabel:boolean=false;
  @Input() label: string;
  @Input() labelIcon: IconName;
  @Input() labelIconFormat: IconPrefix = 'fas';
  @Input() placeholder: string;
  @Input() fullHeight: boolean=false;

  constructor() { }

}

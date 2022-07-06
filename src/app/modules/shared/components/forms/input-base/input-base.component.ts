import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Globals } from '@static/globals';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent extends InputModelComponent implements OnInit {

  errors = Globals.errors;
  fieldError: string;
  specialControl = ['terms'];

  constructor() {
    super();
  }

  ngOnInit(): void {}

  checkError() {
    const control = this.form.get(this.controlName);
    let error = false;
    if (control?.invalid && (control.dirty || control?.touched)) {
      const validation = Object.keys(control?.errors as Object)[0];
      switch (validation) {
        case 'maxlength':
        case 'max':
        case 'min':
          let error = control?.getError(validation) as Object;
          let value = Object.values(error)[0];
          this.fieldError = this.errors[validation]
            .replace('#', this.label)
            .replace('X', value);
          break;
        default:
          if (this.specialControl.includes(this.controlName)) {
            this.fieldError = this.errors[this.controlName];
            break;
          }
          this.fieldError = this.errors[validation].replace('#', this.label);
          break;
      }
      error = true;
    }
    return error;
  }

}

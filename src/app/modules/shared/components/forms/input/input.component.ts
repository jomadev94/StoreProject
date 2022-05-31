import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { Globals } from '@static/globals';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() label: string;
  @Input() labelIcon: IconName;
  @Input() numberIcon: IconName;
  @Input() labelIconFormat: IconPrefix = 'fas';
  @Input() placeholder: string;
  @Input() type: string;

  isPassword: boolean = false;
  errors = Globals.errors;
  fieldError: string;
  styleClass: string = '';
  specialTypes = ['number', 'checkbox'];

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'password') {
      this.styleClass = 'pass';
      this.isPassword = true;
    }
  }

  checkError() {
    this.styleClass = this.isPassword ? 'pass' : '';
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
          if (this.specialTypes.includes(this.type)) {
            this.fieldError = this.errors[this.type];
            break;
          }
          this.fieldError = this.errors[validation].replace('#', this.label);
          break;
      }
      error = true;
      this.styleClass += ' invalid';
    }
    return error;
  }

  toggleShow() {
    this.type = this.type == 'password' ? 'text' : 'password';
  }
}

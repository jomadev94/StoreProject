import {
  AbstractControl,
  AsyncValidatorFn,
} from '@angular/forms';
import { map } from 'rxjs';
import { UserService } from '../services/user/user.service';

export function emailExistValidator(user: UserService): AsyncValidatorFn {
  return (control: AbstractControl) =>{
    return user
      .findEmail(control.value)
      .pipe(map((res) => (res.success ? null : { emailExist: true })));
  }
}

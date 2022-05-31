import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '@models/credentials';
import { AuthService } from '@services/auth/auth.service';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() modalClose = new EventEmitter<boolean>();
  loginForm: FormGroup;
  errorMessages: string[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router:Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.loginForm.valueChanges.subscribe(()=>{
      this.errorMessages=[];
    });
  }

  ngOnInit(): void {}

  getValue(controlName:string){
    return this.loginForm.get(controlName)?.value
  }

  prepareSend(){
    const credentials:Credentials={
      email: this.getValue('email'),
      password: this.getValue('password'),
    }
    return credentials;
  }

  login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.userService.login(this.prepareSend()).subscribe(res=>{
        if(res.success){
          this.authService.setAuth(res.data.token,res.data.user);
          this.modalClose.emit(true);
          this.router.navigate(['home']);
        }else{
          this.errorMessages=res.errorMessage;
        }
      });
    }
  }

}

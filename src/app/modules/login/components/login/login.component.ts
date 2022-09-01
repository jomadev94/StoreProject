import { OverlayRef } from '@angular/cdk/overlay';
import {
  Component,
  Inject,
  OnInit,
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
import { DATA_OVREF } from '@static/data';
import gsap from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessages: string[]=[];

  constructor(
    @Inject(DATA_OVREF) public ovRef: OverlayRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
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

  closeModal(){
    gsap.to('.modal-box',{duration:.2,opacity:0,ease:"power2"}).then(()=>{
      this.ovRef.detach();
    });
  }

  resetMessage(){
    setTimeout(()=>{
      this.errorMessages=[];
    },6000);
  }

  login() {
    this.loginForm.markAllAsTouched();
    this.errorMessages=[];
    if (this.loginForm.valid) {
      this.userService.login(this.prepareSend()).subscribe(res=>{
        if(res.success){
          this.authService.setAuth(res.data.token,res.data.refresh,res.data.user);
          this.closeModal();
        }else{
          this.errorMessages=res.errorMessage;
          this.resetMessage();
        }
      });
    }
  }

}

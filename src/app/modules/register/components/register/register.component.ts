import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import gsap from 'gsap';
import { Register } from '@models/register';
import { UserService } from '@services/user/user.service';
import { birthdayValidator } from '@validators/birthdayValidator';
import { emailExistValidator } from '@validators/emailExistValidator';
import { matchValidator } from '@validators/matchValidator';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@models/view/button';
import { Globals } from '@static/globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  load:boolean=false;
  errorMessages: string[]=[];
  success:boolean=false;
  button:Button[]=[Globals.buttons['home']];
  
  constructor(private formBuilder:FormBuilder, private userService:UserService) {
    this.registerForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(40)]],
      lastname:['',[Validators.required,Validators.maxLength(40)]],
      email:['',[Validators.required,Validators.maxLength(60),Validators.email],emailExistValidator(userService)],
      birthday:['',[Validators.required,birthdayValidator()]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,20}')]],
      repeatPassword:['',Validators.required],
      terms:[false,Validators.requiredTrue],
    },{validators:[matchValidator('password','repeatPassword')],updateOn:"change"})
  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(
      res=>{
        this.errorMessages=[];
      }
    )
  }

  getValue(controlName:string){
    return this.registerForm.get(controlName)?.value;
  }

  showCreated(){
    const audio=new Audio("/assets/sound/alert/created.mp3");
    audio.load();
    audio.play();
    gsap.to('.box',{rotateY:180, duration:1, ease: 'circ'});
  }

  resetMessages(){
    setTimeout(()=>{
      this.errorMessages=[];
    },5000)
  }

  register(){
    this.load=true;
    const data:Register={
      userId: uuidv4(),
      name:this.getValue('name'),
      lastname:this.getValue('lastname'),
      birthday: this.getValue('birthday'),
      email: this.getValue('email'),
      password: this.getValue('password')
    }
    this.userService.register(data).subscribe(res=>{
      this.load=false;
      this.success=res.success;
      if(res.success){
        this.showCreated();
        this.registerForm.reset();
      }else{
        this.errorMessages=res.errorMessage;
        this.resetMessages();
      }
    })
  }

}

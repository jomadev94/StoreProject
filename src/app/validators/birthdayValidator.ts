import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function birthdayValidator():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const birthday= new Date(control.value);
        const currentDate:Date=new Date();

        if(!birthday){
            return null;
        }

        if(birthday > currentDate){
            return { younger:true }
        }

        let age= currentDate.getFullYear() - birthday.getFullYear();
        const diffMonth= currentDate.getMonth() - birthday.getMonth();
        if(diffMonth < 0 || (diffMonth === 0 && currentDate.getDate() < birthday.getDate())){
            age--;
        }

        return age < 18? {younger:true}:null;
    }
}
import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchValidator(field1:string,field2:string){
    return (control:AbstractControl): ValidationErrors | null =>{
        const repeatControl= control.get(field2);
        const repeat=repeatControl?.value;
        const password= control.get(field1)?.value;

        if(password === repeat){
            return null;
        }

        repeatControl?.setErrors({noMatch:true});
        return {noMatch:true};
    }
}
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function selectValidator():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const selected= control.value;
        return selected === "-1" || selected === ""? {required:true}:null;
    }
}
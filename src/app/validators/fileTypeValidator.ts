import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fileTypeValidator(types: string[]) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const files = value.map((f: any) => f.file) as File[];
    for (let file of files) {
        const extension=file.name.split(".")[1];
        if(!types.includes(extension)){
            return {invalidFormat:true}
        }
    }
    return null;
  };
}

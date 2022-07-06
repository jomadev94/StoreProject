import { AbstractControl, ValidationErrors } from '@angular/forms';

export function fileSizeValidator(size:number) {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const files = value.map((f: any) => f.file) as File[];
    for (let file of files) {
        const fileSize=(file.size/1000)/1000;
        if(fileSize>size){
            return {maxSize:true}
        }
    }
    return null;
  };
}
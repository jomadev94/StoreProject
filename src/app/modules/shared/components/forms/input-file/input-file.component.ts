import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '@models/view/image';
import { InputModelComponent } from '../input-model/input-model.component';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss'],
})
export class InputFileComponent extends InputModelComponent {
  
  @Input() maxAdd: number = 5;
  imgsPreview: Image[] = [];
  private formats: string[] = ['png', 'jpg', 'jpeg'];
  currentIndex: number = 0;

  constructor(
    private sanatizer: DomSanitizer,
    private formBuilder: FormBuilder
  ) {
    super();
  }

  private createGroup(data: any): FormGroup {
    return this.formBuilder.group(data);
  }

  get filesControl() {
    return this.form.get(this.controlName) as FormArray;
  }

  get files():File[]{
    return this.form.value.files.map((f:any)=>f.file);
  }

  async onSelectFiles(event: any) {
    const files = event.target.files;
    if (files && this.validateCant(files)) {
      for (let file of files) {
        this.filesControl.push(this.createGroup({ file }));
      }
      this.filesControl.markAsDirty();
      for (
        this.currentIndex;
        this.currentIndex < this.filesControl.length;
        this.currentIndex++
      ) {
        const file = this.filesControl.at(this.currentIndex).value.file;
        const blob: any = await this.extractBase64(file);
        this.imgsPreview.push({ src: blob.base, alt: file.name });
      }
    }
  }

  validateCant(files: FileList) {
    return this.files.length + files.length < this.maxAdd
  }

  extractBase64(file: File) {
    return new Promise((resolve, reject) => {
      try {
        const extension=file.name.split(".")[1];
        if(!this.formats.includes(extension)){
          resolve({ blob: file, base: '/assets/img/alert/file-error.png' });
          return;
        }
        const unsafeImg = window.URL.createObjectURL(file);
        const image = this.sanatizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve({
            blob: file,
            image,
            base: reader.result,
          });
        };
        return;
      } catch (error) {
        resolve({ blob: file, base: '/assets/img/alert/file-error.png' });
        return;
      }
    });
  }

  remove(event: any) {
    const indexDelete = this.files.findIndex(e => e.name === event.target.id);
    if(indexDelete >= 0){
      this.imgsPreview.splice(indexDelete, 1);
      this.filesControl.removeAt(indexDelete);
      this.currentIndex--;
    }
  }
}

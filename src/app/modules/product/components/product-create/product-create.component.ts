import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tag } from '@models/tag';
import { FileService } from '@services/file/file.service';
import { ProductService } from '@services/product/product.service';
import { fileSizeValidator } from '@validators/fileSizeValidator';
import { fileTypeValidator } from '@validators/fileTypeValidator';
import gsap from 'gsap';
import { v4 as uuid } from 'uuid';
import { FileUpload } from '@models/file';
import { CreateProduct } from '@models/createProduct';
import { selectValidator } from '@validators/selectValidator';
import { Product } from '@models/product';
import { Globals } from '@static/globals';
import { Button } from '@models/view/button';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  @ViewChild('steps') steps: ElementRef;
  infoForm: FormGroup;
  fileForm: FormGroup;
  files: FileUpload[] = [];
  tags: Tag[] = [];
  currentStep: number = 1;
  load: boolean = false;
  created:boolean=false;
  sectionButton: Button[] = [Globals.buttons['home']];
  checkSteps: any;

  constructor(
    private formBuilder: FormBuilder,
    private fileService: FileService,
    private productService: ProductService
  ) {
    this.infoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(80)]],
      category: ["", selectValidator()],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      stock: [
        0,
        [Validators.required, Validators.min(0), Validators.max(100000)],
      ],
      price: [100, [Validators.required, Validators.min(100)]],
      discount: [
        0,
        [Validators.required, Validators.min(0), Validators.max(90)],
      ],
    });
    this.fileForm = this.formBuilder.group({
      files: this.formBuilder.array(
        [],
        [
          Validators.required,
          fileTypeValidator(['png', 'jpg', 'jpeg']),
          fileSizeValidator(10),
        ]
      ),
    });
    this.checkSteps = {
      1: () => {
        return this.infoForm.valid;
      },
      2: () => {
        return this.fileForm.valid;
      },
      3: () => {
        return this.infoForm.valid && this.fileForm.valid;
      },
    };
  }

  canNext(): boolean {
    const result = this.checkSteps[this.currentStep]();
    return result === null ? false : result;
  }

  async saveFiles(productId: string) {
    const forms = this.fileForm.get('files') as FormArray;
    try {
      for (let index = 0; index < forms.length; index++) {
        const path = await this.fileService.upload(
          productId,
          forms.at(index).value.file
        );
        const file: FileUpload = {
          fileId: uuid(),
          path: path!,
        };
        this.files.push(file);
      }
    } catch (error) {
      return;
    }
  }

  getValue(form: FormGroup, key: string) {
    return form.get(key)!.value;
  }

  async next() {
    if (this.currentStep <= 3 && this.canNext()) {
      if (this.currentStep === 3) {
        this.load = true;
        const id = uuid();
        await this.saveFiles(id);
        if (!this.fileService.hasError) {
          const info: Product = this.infoForm.value as Product;
          info.productId = uuid();
          info.date=new Date();
          const product: CreateProduct = {
            product: info,
            files: this.files,
            tags: this.tags,
          };
          this.productService.create(product).subscribe((res) => {
            if (res.success) {
              this.created=true;
            }
          });
        }
        this.load = false;
        return;
      }
      this.moveNext();
    }
  }

  prev() {
    if (this.currentStep > 1) {
      this.movePrev();
    }
  }

  async moveNext() {
    const elem = this.steps.nativeElement as HTMLElement;
    const width = elem.parentElement?.offsetWidth!;
    elem.children[this.currentStep].classList.add('active');
    await gsap.to(elem, {
      translateX: -width,
      duration: 0.4,
      ease: 'slow',
    });
    elem.children[this.currentStep - 1].classList.remove('active');
    this.currentStep++;
    await gsap.to(elem, { translateX: 0, duration: 0 });
  }

  async movePrev() {
    const elem = this.steps.nativeElement as HTMLElement;
    const width = elem.parentElement?.offsetWidth!;
    elem.children[this.currentStep - 2].classList.add('active');
    await gsap.to(elem, {
      translateX: -width,
      duration: 0,
    });
    this.currentStep--;
    await gsap.to(elem, { translateX: 0, duration: 0.4, ease: 'slow' });
    elem.children[this.currentStep].classList.remove('active');
  }
}

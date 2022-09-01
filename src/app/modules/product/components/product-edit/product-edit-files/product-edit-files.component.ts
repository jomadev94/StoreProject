import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '@models/product';
import { Image } from '@models/view/image';
import { DeleteModalComponent } from '@modules/shared/components/modals/delete-modal/delete-modal.component';
import { FileService } from '@services/file/file.service';
import { ToDeleteService } from '@services/toDelete/to-delete.service';
import { DATA_ANY, DATA_ID, DATA_KEY, DATA_OVREF, DATA_TITLE } from '@static/data';
import { fileSizeValidator } from '@validators/fileSizeValidator';
import { fileTypeValidator } from '@validators/fileTypeValidator';
import gsap from 'gsap';
import { lastValueFrom} from 'rxjs';

@Component({
  selector: 'app-product-edit-files',
  templateUrl: './product-edit-files.component.html',
  styleUrls: ['./product-edit-files.component.scss']
})
export class ProductEditFilesComponent implements OnInit {

  @Input() product:Product;
  imgs:Image[]=[];
  form:FormGroup
  msg:string[]=[];
  error:boolean=false;
  ovRef:OverlayRef;
  key="File"
  index:number;
  load:boolean=false;

  constructor(private formBuilder:FormBuilder,private overlay:Overlay, private toDeleteService:ToDeleteService, private fileService:FileService) {
    const config:OverlayConfig={
      hasBackdrop:true,
      backdropClass:'overlay-dark',
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: this.overlay.scrollStrategies.block()
    }
    this.ovRef=this.overlay.create(config);
    this.ovRef.attachments().subscribe(() => {
      gsap.to('.modal-box', { duration: 1, scale: 1, ease: 'bounce' });
    });
    this.toDeleteService.deleted$.subscribe(key=>{
      if(key===this.key){
        this.product.files?.splice(this.index,1);
        this.imgs.splice(this.index,1);
      }
    })
  }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      files: this.formBuilder.array(
        [],
        [
          fileTypeValidator(['png', 'jpg', 'jpeg']),
          fileSizeValidator(10),
        ]
      ),
    });
    this.product.files?.forEach(f=>{
      this.imgs.push({
        src: f.path,
        alt: f.fileId,
      });
    });
  }

  get cantFiles(){
    return this.form.get('files')?.value.length;
  }

  resetMessages(){
    setTimeout(()=>{
      this.msg=[];
    },6000)
  }

  remove(event:any){
    if(this.imgs.length === 1){
      this.error=true;
      this.msg=["El producto debe contener al menos una imagen"];
      this.resetMessages();
      return;
    }
    const id=event.target?.id as string;
    this.index=this.product.files!.findIndex(f=>f.fileId === id);
    const portalInjector = Injector.create({
      providers: [
        { provide: DATA_OVREF, useValue: this.ovRef },
        { provide: DATA_ID, useValue: id },
        { provide: DATA_ANY, useValue: id },
        { provide: DATA_TITLE, useValue: "Eliminar imagen" },
        { provide: DATA_KEY, useValue: this.key },
      ],
    });
    const portal = new ComponentPortal(DeleteModalComponent, null, portalInjector);
    this.ovRef.attach(portal);
  }

  async addFiles(){
    this.load=true;
    const forms = this.form.get('files') as FormArray;
    const files=forms.value.map((f:any)=>f.file);
    const toUpload=await this.fileService.saveFiles(this.product.productId,files);
    if(toUpload != null){
      const res=await lastValueFrom(this.fileService.addFilesToDB(toUpload));
      if(res.success){
        this.error=false;
        this.msg=["Imagenes subidas exitosamente"];
        toUpload.forEach(
          f=>{
            this.imgs.push({alt:f.fileId,src:f.path});
          }
        );
      }
      else{
        this.error=true;
        this.msg=res.errorMessage;
      }
      this.resetMessages();
    }
    this.load=false;
  }

}

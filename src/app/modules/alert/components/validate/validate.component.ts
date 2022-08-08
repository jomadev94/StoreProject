import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '@models/view/image';
import { UserService } from '@services/user/user.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.scss']
})
export class ValidateComponent implements OnInit {

  img:Image;
  title:string;

  constructor(private route:ActivatedRoute, private userService:UserService) {
  }

  async ngOnInit(): Promise<void>{
    const key=this.route.snapshot.paramMap.get('key');
    const res= await lastValueFrom(this.userService.activate(key!));
    if(res.success){
      this.title="Usuario activado exitosamente!";
      this.img={src:"/assets/img/alert/ok.png",alt:"usuario activado"};
      return;
    }
    this.title="Error al activar usuario";
    this.img={src:"/assets/img/alert/wrong.png",alt:"no se pudo activar el usuario"};
  }

}

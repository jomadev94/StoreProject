import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadService } from '@services/load/load.service';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {

  @Input() condition:boolean;
  @Input() text:string;

  load$:Subject<boolean> = this.loadService.isLoading$;

  constructor(private loadService:LoadService) { }

  ngOnInit(): void {
  }

}

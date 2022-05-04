import { Component } from '@angular/core';
import { OpenCloseService } from './services/open-close/open-close.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StoreProject';

  constructor(private openCloseService:OpenCloseService){
  }

  closeAll(){
    this.openCloseService.closeAll();
  }
}

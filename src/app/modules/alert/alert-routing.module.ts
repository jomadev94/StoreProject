import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SoonComponent } from './components/soon/soon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'not-found', component: NotFoundComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'soon', component: SoonComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertRoutingModule {}

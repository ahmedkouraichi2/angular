import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: AppareilViewComponent },
  {path:'appareils/:id',component:SingleAppareilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicRoutingModule } from './public/public-routing.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: PublicRoutingModule }
    ]
  }
];

@NgModule({
  imports: [
    PublicRoutingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

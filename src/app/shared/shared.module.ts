import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MasterPageComponent } from './components/master-page/master-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [FooterComponent, NavBarComponent, MasterPageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    MasterPageComponent,
  ]
})
export class SharedModule { }

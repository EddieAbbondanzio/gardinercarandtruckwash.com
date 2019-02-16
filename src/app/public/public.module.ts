import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, ServicesComponent, AboutUsComponent, LocationComponent, ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    LocationComponent,
    ServicesComponent
  ]
})
export class PublicModule { }

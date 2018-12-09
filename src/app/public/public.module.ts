import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommunityComponent } from './pages/community/community.component';
import { LocationComponent } from './pages/location/location.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [HomeComponent, ServicesComponent, AboutUsComponent, CommunityComponent, LocationComponent, ContactUsComponent],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }

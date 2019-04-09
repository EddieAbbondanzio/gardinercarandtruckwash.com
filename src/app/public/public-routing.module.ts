import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LocationComponent } from './pages/location/location.component';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'about-us', component: AboutUsComponent },
  {path: 'contact-us', component: ContactUsComponent },
  {path: 'location', component: LocationComponent },
  {path: 'services', component: ServicesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class PublicRoutingModule { }

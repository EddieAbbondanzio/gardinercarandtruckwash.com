import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [SideBarComponent, ContactBannerComponent, HeroComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

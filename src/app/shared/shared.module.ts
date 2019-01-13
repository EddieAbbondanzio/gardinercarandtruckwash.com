import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [ContactBannerComponent, FooterComponent, ContentComponent, CardComponent, NavBarComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ContactBannerComponent,
    FooterComponent,
    ContentComponent,
    CardComponent,
    NavBarComponent
  ]
})
export class SharedModule { }

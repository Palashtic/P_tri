import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { DownloadComponent } from './download/download.component';
import { TeamComponent } from './team/team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LanguageComponent,
    AboutComponent,
    FeaturesComponent,
    DownloadComponent,
    TeamComponent,
    TestimonialComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

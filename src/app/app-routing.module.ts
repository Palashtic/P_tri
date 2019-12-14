import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {DownloadComponent} from './download/download.component';
import {FeaturesComponent} from './features/features.component';
import {LanguageComponent} from './language/language.component';
import {TeamComponent} from './team/team.component';
import {TestimonialComponent} from './testimonial/testimonial.component';

const routes: Routes = [
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Download', component: DownloadComponent },
  { path: 'Features', component: FeaturesComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Language', component: LanguageComponent },
  { path: 'Team', component: TeamComponent },
  { path: 'Testimonial', component: TestimonialComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

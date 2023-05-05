import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { HomeComponent } from './home/home/home.component';
import { ServicesComponent } from './services/services/services.component';
import { ContactComponent } from './contact/contact/contact.component';
import { FirstaboutComponent } from './home/home/firstabout/firstabout.component';
import { SecondaboutComponent } from './home/home/secondabout/secondabout.component';
import { FirsthomeComponent } from './about/about/firsthome/firsthome.component';
import { SecondhomeComponent } from './about/about/secondhome/secondhome.component';
import { FirstservicesComponent } from './services/services/firstservices/firstservices.component';
import { SecondservicesComponent } from './services/services/secondservices/secondservices.component';
import { SecondcontactComponent } from './contact/contact/secondcontact/secondcontact.component';
import { FirstcontactComponent } from './contact/contact/firstcontact/firstcontact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'firsthome', component: FirstaboutComponent },
      { path: 'secondhome', component: SecondaboutComponent },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      { path: 'firstabout', component: FirsthomeComponent },
      { path: 'secondabout', component: SecondhomeComponent },
    ],
  },
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      { path: 'firstservices', component: FirstservicesComponent },
      { path: 'secondservices', component: SecondservicesComponent },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      { path: 'firstcontact', component: FirstcontactComponent },
      { path: 'secondcontact', component: SecondcontactComponent },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

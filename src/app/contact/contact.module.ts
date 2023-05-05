import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { FirstcontactComponent } from './contact/firstcontact/firstcontact.component';
import { SecondcontactComponent } from './contact/secondcontact/secondcontact.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContactComponent,
    FirstcontactComponent,
    SecondcontactComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ContactComponent],
})
export class ContactModule {}

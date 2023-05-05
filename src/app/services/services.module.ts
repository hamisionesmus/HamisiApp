import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { FirstservicesComponent } from './services/firstservices/firstservices.component';
import { SecondservicesComponent } from './services/secondservices/secondservices.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ServicesComponent,
    FirstservicesComponent,
    SecondservicesComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [ServicesComponent],
})
export class ServicesModule {}

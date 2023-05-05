import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FirsthomeComponent } from './about/firsthome/firsthome.component';
import { SecondhomeComponent } from './about/secondhome/secondhome.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AboutComponent, FirsthomeComponent, SecondhomeComponent],
  imports: [CommonModule, RouterModule],
  exports: [AboutComponent],
})
export class AboutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FirstaboutComponent } from './home/firstabout/firstabout.component';
import { SecondaboutComponent } from './home/secondabout/secondabout.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FirstService } from './home/homeservices/first.service';

@NgModule({
  declarations: [HomeComponent, FirstaboutComponent, SecondaboutComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    MatCardModule,
  ],
  exports: [HomeComponent],
  providers: [FirstService],
})
export class HomeModule {}

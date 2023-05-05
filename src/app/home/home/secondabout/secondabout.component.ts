import { Component, OnInit } from '@angular/core';
import { FirstService } from '../homeservices/first.service';
@Component({
  selector: 'app-secondabout',
  templateUrl: './secondabout.component.html',
  styleUrls: ['./secondabout.component.css'],
})
export class SecondaboutComponent implements OnInit {
  myInfo: any;
  constructor(private FirstService: FirstService) {}
  ngOnInit() {
    this.myInfo = this.FirstService.getAll();
  }
}

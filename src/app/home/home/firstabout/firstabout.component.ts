import { Component, OnInit } from '@angular/core';
import { FirstService } from '../homeservices/first.service';

@Component({
  selector: 'app-firstabout',
  templateUrl: './firstabout.component.html',
  styleUrls: ['./firstabout.component.css'],
})
export class FirstaboutComponent implements OnInit {
  myInfo: any;
  constructor(private FirstService: FirstService) {}
  ngOnInit() {
    this.myInfo = this.FirstService.getAll();
  }
}


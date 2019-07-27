import { Component, OnInit } from '@angular/core';
import { CarPreviewService } from '../../services/car-preview.service';
import { CarPreviewModel } from '../../models/car-preview-model';


@Component({
  selector: 'app-overview-page',
  templateUrl: './car-overview-page.component.html',
  styleUrls: ['./car-overview-page.component.css']
})
export class CarOverviewPageComponent implements OnInit {
  constructor(private myCarPreviewService: CarPreviewService) {}

  carMockArray: Array<CarPreviewModel>;

  ngOnInit() {
    this.carMockArray = this.myCarPreviewService.showFirstMockData();
  }
}

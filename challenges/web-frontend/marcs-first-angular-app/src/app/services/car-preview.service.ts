import { Injectable } from '@angular/core';
import { CarPreviewModel } from '../models/car-preview-model';

@Injectable({
  providedIn: 'root'
})
export class CarPreviewService {
  constructor() {}

  CarPreviewObjects: CarPreviewModel[];

  showFirstMockData(): CarPreviewModel[] {    
    this.CarPreviewObjects = new Array<CarPreviewModel>();
    for (let index = 0; index < 10; index++) {
      let carPreviewobject = new CarPreviewModel();
      carPreviewobject.Erstzulassung = new Date('04.05.2018');
      carPreviewobject.FuelType = 'Diesel';
      carPreviewobject.Mileage = 28741;
      carPreviewobject.Transmission = 'Automatik';
      this.CarPreviewObjects.push(carPreviewobject);
    }
    return this.CarPreviewObjects;
  }
}

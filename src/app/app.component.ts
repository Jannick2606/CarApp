import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ECarsData } from './interfaces/ecars-data';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarApp';
  eCars$: Observable<Array<ECarsData>> =this.carService.emitCars();
  constructor(private carService: CarService){
  }
}
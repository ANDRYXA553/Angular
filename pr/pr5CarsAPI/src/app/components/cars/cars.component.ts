import {Component, OnInit} from '@angular/core';
import {CarInterface} from "./interface/cars";
import {CarsService} from "../../sevices/cars.service";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  error: any;
  cars: CarInterface[]
  modelControl = new FormControl(null, [Validators.required])
  priceControl = new FormControl(null, Validators.required)
  yearControl = new FormControl(null, Validators.required)

  FormGroup = new FormGroup({
    model: this.modelControl,
    price: this.priceControl,
    year: this.yearControl
  })


  newCar: CarInterface

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {

    this.carsService.getCars().subscribe(value => {
      this.cars = value
    })

  }


  showCars(): void {
    this.newCar = this.FormGroup.value
    this.carsService.postCar(this.newCar).subscribe(value => this.cars.push(value), error => {
      console.log(error.error)
      this.error = error.error
    })

    console.log(this.FormGroup)
  }
}

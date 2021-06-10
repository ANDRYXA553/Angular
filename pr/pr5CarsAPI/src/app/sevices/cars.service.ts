import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarInterface} from "../components/cars/interface/cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  url: string = 'http://192.168.88.253/api/v1/cars'

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarInterface[]> {
    return this.httpClient.get<CarInterface[]>(this.url)
  }

  postCar(car: CarInterface): Observable<CarInterface> {
    return this.httpClient.post<CarInterface>(this.url, car)
  }
}

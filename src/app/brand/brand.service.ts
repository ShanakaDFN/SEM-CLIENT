import { Brand } from 'src/app/brand/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) { }

  public addBrand(brand: Brand) : Observable<any>{
    return this.http.post("http://localhost:8082/brand/add", brand, {responseType : 'text' as'json'});
}
}

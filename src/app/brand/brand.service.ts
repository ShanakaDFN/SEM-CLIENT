import { Brand } from 'src/app/brand/brand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8082/brand/';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  //baseUrl : string = "http://localhost:8082/brand/";

  constructor(private http : HttpClient) { }

  public addBrand(brand: Brand) : Observable<any>{
    return this.http.post(baseUrl+"add", brand, {responseType : 'text' as'json'});
  }

  getAll(): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${baseUrl}getAll`);
  }

  get(id: number): Observable<any> {
    return this.http.get(`${baseUrl}get/${id}`);
  }

  update(id: number, brand: Brand): Observable<any> {
    return this.http.put(`${baseUrl}update/${id}`, brand);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}delete/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: string): Observable<Brand[]> {
    return this.http.get<Brand[]>(`${baseUrl}?name=${name}`);
  }
}

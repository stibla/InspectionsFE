import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegexcalculationService {

  private baseUrl = 'http://localhost:8080/regexcalculation';

  constructor(private http: HttpClient) { }

  getRegExCalculationList(): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}`);
    }

  updateRegExCalculation(regExCalculation: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, regExCalculation);
  }

  deleteRegExCalculation(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`) ;
  }

  
}

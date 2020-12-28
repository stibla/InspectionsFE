import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspection } from './inspection';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  private baseUrl = 'http://localhost:8080/inspections';

  constructor(private http: HttpClient) { }

  getInspectionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getInspection(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateInspection(inspection: Inspection): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, inspection);
  }

  upload(file: File, idInspection: Number): Observable<HttpEvent<any>> {  //HttpEvent<any>
    const formData: FormData = new FormData();

    formData.append('file', file);
    formData.append('n_inspection_id', idInspection.toString());
    /*return this.http.post(`http://localhost:8080/upload`, formData, 
    {reportProgress: true,
      responseType: 'json'});*/
    const req = new HttpRequest('POST', `http://localhost:8080/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);//*/
  }

  getFiles(idInspection: Number): Observable<any> {
    return this.http.get(`${this.baseUrl}/files/${idInspection}`);
  }

  deleteFiles(id: String): Observable<any> {
    //alert('delete service ' + `${this.baseUrl}/files/${id}`);
    return this.http.delete(`http://localhost:8080/files/${id}`) ;
    //const req = new HttpRequest('DELETE', `${this.baseUrl}/files/${id}`);

    //return this.http.request(req);
  }
}

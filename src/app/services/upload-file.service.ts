import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  private baseUrl = 'http://localhost:8080';
  //private baseUrl = '';

  constructor(private http: HttpClient) { }

  delete(id: String): Observable<any> {
    //alert('delete service ' + `${this.baseUrl}/files/${id}`);
    return this.http.delete(`${this.baseUrl}/files/${id}`) ;
    //const req = new HttpRequest('DELETE', `${this.baseUrl}/files/${id}`);

    //return this.http.request(req);
  }

  convert(id: String): Observable<any> {
    return this.http.put(`${this.baseUrl}/files/${id}`, "") ;
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  async get(url: string): Promise<any> {
    return await this.http.get(`${environment.api}/${url}`).toPromise();
  }
}

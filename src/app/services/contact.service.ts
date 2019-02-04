import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

interface IContactData {
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  send(data: IContactData) {
    let url = environment.serviceURL + '/contact'
    return this.http.post(url, data);
  }
}

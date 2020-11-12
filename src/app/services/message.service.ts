import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Utilisateur } from '../modals/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private uri = 'http://localhost:8087/api/message/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getMessage(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + id, options);
  }

  createMessage(message) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'send/', message, options);
  }

}
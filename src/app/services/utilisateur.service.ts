import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private uri = 'http://localhost:8087/api/utilisateur/';
  headers = new HttpHeaders();


  constructor(private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) { }


  register(utilisateur) {
    return this.http.post(this.uri + 'save', utilisateur);
  }

  authentication(login, password) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'authentication/' + login + '/' + password, options);
  }
  getByLogin(login) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'findByLogin/' + login, options);
  }
  updateUtilisateur(utilisateur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + '/update', utilisateur, options);
  }

  loadMessage(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get('http://localhost:8087/api/message/' + id, options);
  }

  uploadFile(file, dejaja) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    this.headers.append("Content-Type", "multipart/form-data");
    const options = { headers: this.headers };
    let formData = new FormData();
    formData.append('file', file);
    formData.append('mail', dejaja);
    return this.http.post(this.uri + 'uploadfile/', formData, options);
  }
  getAll() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get/', options);
  }

  deleteUtilisateur(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + id, options);
  }

  getById(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get/' + id, options);
  }
}




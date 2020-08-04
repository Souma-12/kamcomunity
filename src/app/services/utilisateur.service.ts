import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  headers = new HttpHeaders();


  constructor(private http: HttpClient,private router: Router,private spinner:NgxSpinnerService) { }


  register(utilisateur){
    return this.http.post('http://localhost:8087/api/utilisateur/save',utilisateur);
  }
  authentication(login, password) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get('http://localhost:8087/api/utilisateur/authentication/' + login + '/' + password, options);
  }
  getByLogin(login) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get('http://localhost:8087/api/utilisateur/findByLogin/' + login, options);
  }
  updateUser(utilisateur) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put('http://localhost:8085/api/utilisateur/update', utilisateur, options);
  }
  
    loadMessage(id) {
      this.headers.append('Accept', 'application/json;charset=UTF-8');
      const options = { headers: this.headers };
      return this.http.get('http://localhost:8085/api/message/'+ id, options);  }
  }




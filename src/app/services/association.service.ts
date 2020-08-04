import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private uri = 'http://localhost:8087/api/association/';
  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }



  uploadFile(file, mail, id, type) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    this.headers.append("Content-Type", "multipart/form-data");
    const options = { headers: this.headers };
    let formData = new FormData();
    formData.append('file', file);
    formData.append('id', id);
    formData.append('mail', mail);
    formData.append('type', type);
    return this.http.post(this.uri + 'uploadfile/', formData, options);
  }
  getAll() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get/', options);
  }

  deleteAssociation(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + id, options);
  }
  updateAssociation(association) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', association, options);
  }

  getById(id) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get/' + id, options);
  }
}

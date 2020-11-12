import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedUser;
  constructor(private cookies : CookieService, private utilisateurService: UtilisateurService ) { }

  
  ngOnInit() {
    if(this.cookies.get('loggedUser')){
      this.loggedUser = JSON.parse(this.cookies.get('loggedUser'));
    } else {
      this.getConnectedUser();
    }

  }

  getConnectedUser() {
    const login = this.cookies.get('login');
    this.utilisateurService.getByLogin(login).subscribe(data => {
      console.log('data',data);
      this.loggedUser = data;
      this.cookies.set('loggedUser', JSON.stringify(this.loggedUser))
    }, error => {
    });
  }
}

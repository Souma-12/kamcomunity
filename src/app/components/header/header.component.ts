import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUser: any;
  messages: any;
  constructor(private router: Router, private utilisateurService: UtilisateurService, 
    private sanitizer: DomSanitizer, private cookies : CookieService,private messageService: MessageService) { }

  ngOnInit() {
    this.getConnectedUser();
  }
  transform(base64Image) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(base64Image);
  }

  getConnectedUser() {
    const login = this.cookies.get('login');
    this.utilisateurService.getByLogin(login).subscribe(data => {
      console.log('data',data);

      this.loggedUser = data;
      this.loadMessage( this.loggedUser.id_utilisateur);
      this.cookies.set('loggedUser', JSON.stringify(this.loggedUser))
    }, error => {
      this.router.navigate(['/login']);
    });
  }
  clearStorage() {
    localStorage.clear();
  }
  loadMessage(id){
    this.messageService.getMessage(id).subscribe(res =>{
      console.log('res res:', res);
      this.messages = res;
    }, error => {
      this.router.navigate(['/login']);
    });
  }
}

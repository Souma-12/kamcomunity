import { Component, OnInit, Input  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin : FormGroup;
  login;
  connectionError = false;
  connectedUser;
  username ;
  password ;
  invalidLogin = false;
 
  
  @Input() error: string | null;

  constructor(private spinner:NgxSpinnerService,private loginservice: AuthenticationService, private http:HttpClient,
     private utilisateurService:UtilisateurService,private router: Router,
     private formBuilder:FormBuilder,private cookieService: CookieService) { 
     
      
  }
  
  ngOnInit() {
    
   
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]})
  }

  checkLogin() {
    console.log("ssssss",this.formLogin.controls.username.value);
    console.log("ddddd",this.formLogin.controls.password.value);

    this.loginservice.authenticate(this.formLogin.controls.username.value, this.formLogin.controls.password.value).subscribe(
      data => {
        if (data.token!=null){
          console.log("data =",data);
          this.cookieService.set( 'accessToken', 'Bearer '+  data.token );
          this.cookieService.set( 'login', data.username);
          this.router.navigate(['/principal']);
          this.invalidLogin = false;
        }
        else{
          this.invalidLogin=true;
        }
       
      },
      error => {
        this.invalidLogin = true;
        this.error = error.message;

      }
    )
    ;

  }

  

  
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AssociationComponent } from './components/association/association.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './components/body/body.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoutComponent } from './components/logout/logout.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptorService';
import { SafePipe } from './pipes/safe.pipe';
import { UtilisateurPipe } from './pipes/utilisateur.pipe';
import { AssociationPipe } from './pipes/association.pipe';
import { ReseauPipe } from './pipes/reseau.pipe';
import { PaysPipe } from './pipes/pays.pipe';
import { DonPipe } from './pipes/don.pipe';
import { MessagePipe } from './pipes/message.pipe';
import { ToastrModule } from 'ngx-toastr';
import { DonComponent } from './components/don/don.component';
import { ProfilComponent } from './components/profil/profil.component';
import { NavComponent } from './components/nav/nav.component';
//import { ModalModule, AccordionModule, RatingModule } from 'ngx-bootstrap';
//import { TooltipModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UtilisateurComponent,
    AssociationComponent,
    BodyComponent,
    RegistrationComponent,
    LogoutComponent,
    SafePipe,
    UtilisateurPipe,
    AssociationPipe,
    ReseauPipe,
    PaysPipe,
    DonPipe,
    MessagePipe,
    DonComponent,
    ProfilComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule,
    ReactiveFormsModule 
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,useClass: BasicAuthHtppInterceptorService,  multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

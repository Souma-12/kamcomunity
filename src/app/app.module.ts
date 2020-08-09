import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { AssociationComponent } from './components/association/association.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './components/body/body.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LogoutComponent } from './components/logout/logout.component';
import { BasicAuthHtppInterceptorService } from './services/basic-auth-htpp-interceptorService';
import { SafePipe } from './pipes/safe.pipe';
import { ReseauPipe } from './pipes/reseau.pipe';
import { DonPipe } from './pipes/don.pipe';
import { MessagePipe } from './pipes/message.pipe';
import { ToastrModule } from 'ngx-toastr';
import { DonComponent } from './components/don/don.component';
import { ProfilComponent } from './components/profil/profil.component';
import { NavComponent } from './components/nav/nav.component';
import { Page404Component } from './components/page404/page404.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeaderComponent } from './components/header/header.component';
import { ModalModule} from 'ngx-bootstrap/modal';
import { RatingModule } from 'ngx-bootstrap/rating';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartModule } from 'angular-highcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import * as Highcharts from 'highcharts';
import StockModule from 'highcharts/modules/stock';
StockModule(Highcharts);
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FilterAjoutAssociationPipe } from './pipes/association/filter-ajout-association.pipe';
import { FilterAdresseAssociationPipe } from './pipes/association/filter-adresse-association.pipe';
import { FilterEmailAssociationPipe } from './pipes/association/filter-email-association.pipe';
import { FilterFondationAssociationPipe } from './pipes/association/filter-fondation-association.pipe';
import { FilterModificationAssociationPipe } from './pipes/association/filter-modification-association.pipe';
import { FilterNomAssociationPipe } from './pipes/association/filter-nom-association.pipe';
import { FilterPaysAssociationPipe } from './pipes/association/filter-pays-association.pipe';
import { FilterPresentationAssociationPipe } from './pipes/association/filter-presentation-association.pipe';
import { FilterSiteAssociationPipe } from './pipes/association/filter-site-association.pipe';
import { FilterTailleAssociationPipe } from './pipes/association/filter-taille-association.pipe';
import { FilterTypeAssociationPipe } from './pipes/association/filter-type-association.pipe';
import { FilterAdresseUtilisateurPipe } from './pipes/utilisateur/filter-adresse-utilisateur.pipe';
import { FilterAjoutUtilisateurPipe } from './pipes/utilisateur/filter-ajout-utilisateur.pipe';
import { FilterEmailUtilisateurPipe } from './pipes/utilisateur/filter-email-utilisateur.pipe';
import { FilterModifUtilisateurPipe } from './pipes/utilisateur/filter-modif-utilisateur.pipe';
import { FilterNationaliteUtilisateurPipe } from './pipes/utilisateur/filter-nationalite-utilisateur.pipe';
import { FilterNomUtilisateurPipe } from './pipes/utilisateur/filter-nom-candidat.pipe';
import { FilterPrenomUtilisateurPipe } from './pipes/utilisateur/filter-prenom-candidat.pipe';
import { FilterTelUtilisateurPipe } from './pipes/utilisateur/filter-tel-candidat.pipe';
import { FilterTitreUtilisateurPipe } from './pipes/utilisateur/filter-titre-candidat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UtilisateurComponent,
    FilterAjoutAssociationPipe,
    FilterAdresseAssociationPipe,
    FilterEmailAssociationPipe,
    FilterFondationAssociationPipe,
    FilterModificationAssociationPipe,
    FilterNomAssociationPipe,
    FilterPaysAssociationPipe,
    FilterPresentationAssociationPipe,
    FilterSiteAssociationPipe,
    FilterTailleAssociationPipe,
    FilterTypeAssociationPipe,
    FilterAdresseUtilisateurPipe,
    FilterAjoutUtilisateurPipe,
    FilterEmailUtilisateurPipe,
    FilterModifUtilisateurPipe,
    FilterNationaliteUtilisateurPipe,
    FilterNomUtilisateurPipe,
    FilterPrenomUtilisateurPipe,
    FilterTelUtilisateurPipe,
    FilterTitreUtilisateurPipe,
    AssociationComponent,
    BodyComponent,
    RegistrationComponent,
    LogoutComponent,
    SafePipe,
    ReseauPipe,
    DonPipe,
    MessagePipe,
    DonComponent,
    HeaderComponent,
    ProfilComponent,
    NavComponent,
    Page404Component,
    ProfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule,
    ReactiveFormsModule,
    TooltipModule,
    ModalModule,
    RatingModule,
    //BsModalService,
    //BsModalRef,
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartModule,
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxSpinnerModule,
    RatingModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-bottom-right',
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    ModalModule.forRoot(),
    HighchartsChartModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

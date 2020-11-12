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
import { FilterAjoutDonPipe } from './pipes/don/filter-ajout-don.pipe';
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
import { FilterDescriptionDonPipe } from './pipes/don/filter-description-don.pipe';
import { FilterEmailAssociationPipe } from './pipes/association/filter-email-association.pipe';
import { FilterFondationAssociationPipe } from './pipes/association/filter-fondation-association.pipe';
import { FilterModificationAssociationPipe } from './pipes/association/filter-modification-association.pipe';
import { FilterNomAssociationPipe } from './pipes/association/filter-nom-association.pipe';
import { FilterPaysAssociationPipe } from './pipes/association/filter-pays-association.pipe';
import { FilterPresentationAssociationPipe } from './pipes/association/filter-presentation-association.pipe';
import { FilterSiteAssociationPipe } from './pipes/association/filter-site-association.pipe';
import { FilterTailleAssociationPipe } from './pipes/association/filter-taille-association.pipe';
import { FilterPhotoAssociationPipe } from './pipes/association/filter-photo-association.pipe';
import { FilterAdresseUtilisateurPipe } from './pipes/utilisateur/filter-adresse-utilisateur.pipe';
// import { FilterAjoutUtilisateurPipe } from './pipes/utilisateur/filter-ajout-utilisateur.pipe';
// import { FilterEmailUtilisateurPipe } from './pipes/utilisateur/filter-email-utilisateur.pipe';
// import { FilterModifUtilisateurPipe } from './pipes/utilisateur/filter-modif-utilisateur.pipe';
// import { FilterNationaliteUtilisateurPipe } from './pipes/utilisateur/filter-nationalite-utilisateur.pipe';
// import { FilterNomUtilisateurPipe } from './pipes/utilisateur/filter-nom-utilisateur.pipe';
// import { FilterPrenomUtilisateurPipe } from './pipes/utilisateur/filter-prenom-candidat.pipe';
// import { FilterTelUtilisateurPipe } from './pipes/utilisateur/filter-tel-candidat.pipe';
// import { FilterTitreUtilisateurPipe } from './pipes/utilisateur/filter-titre-candidat.pipe';
import { CookieService } from 'ngx-cookie-service';
import { AdminComponent } from './components/admin/admin.component';
import { FilterNomAdminPipe } from './pipes/admin/filter-nom-admin.pipe';
import { FilterPrenomAdminPipe } from './pipes/admin/filter-prenom-admin.pipe';
import { FilterNationnaliteAdminPipe } from './pipes/admin/filter-nationnalite-admin.pipe';
import { FilterEmailAdminPipe } from './pipes/admin/filter-email-admin.pipe';
import { FilterAdresseAdminPipe } from './pipes/admin/filter-adresse-admin.pipe';
import { FilterLangueAdminPipe } from './pipes/admin/filter-langue-admin.pipe';
import { FilterModifAdminPipe } from './pipes/admin/filter-modif-admin.pipe';
import { FilterAjoutAdminPipe } from './pipes/admin/filter-ajout-admin.pipe';
import { FilterTelephoneAdminPipe } from './pipes/admin/filter-telephone-admin.pipe';
import { FilterPasswordAdminPipe } from './pipes/admin/password.pipe';
import { AdherentComponent } from './components/adherent/adherent.component';
import { FilterPasswordAdherentPipe } from './pipes/adherent/filter-password-adherent.pipe';
import { FilterEmailAdherentPipe } from './pipes/adherent/filter-email-adherent.pipe';
import { FilterModifAdherentPipe } from './pipes/adherent/filter-modif-adherent.pipe';
import { FilterNomAdherentPipe } from './pipes/adherent/filter-nom-adherent.pipe';
import { FilterPrenomAdherentPipe } from './pipes/adherent/filter-prenom-adherent.pipe';
import { FilterTelephoneAdherentPipe } from './pipes/adherent/filter-telephone-adherent.pipe';
import { FilterNationnaliteAdherentPipe } from './pipes/adherent/filter-nationnalite-adherent.pipe';
import { FilterAjoutAdherentPipe } from './pipes/adherent/filter-ajout-adherent.pipe';
import { FilterLangueAdherentPipe } from './pipes/adherent/filter-langue-adherentpipe';
import { FilterAdresseAdherentPipe } from './pipes/adherent/filter-adresse-adherent.pipe';
import { FilterPhotoAdherentPipe } from './pipes/adherent/filter-photo-adherent.pipe';
import { FilterIdAssociationDonPipe } from './pipes/don/filter-idAssociation-don.pipe';
import { FilterIdUtilisateurDonPipe } from './pipes/don/filter-idUtilisateur-don.pipe copy';
import { FilterMontantDonPipe } from './pipes/don/filter-montant-don.pipe copy 2';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UtilisateurComponent,
    FilterAjoutAssociationPipe,
    FilterAdresseAssociationPipe,
    FilterDescriptionDonPipe,
    FilterEmailAssociationPipe,
    FilterFondationAssociationPipe,
    FilterModificationAssociationPipe,
    FilterNomAssociationPipe,
    FilterPaysAssociationPipe,
    FilterPresentationAssociationPipe,
    FilterSiteAssociationPipe,
    FilterTailleAssociationPipe,
    FilterPhotoAssociationPipe,
    FilterAdresseUtilisateurPipe,
    FilterAjoutAdherentPipe,
    FilterLangueAdherentPipe,
    FilterAdresseAdherentPipe,
    FilterEmailAdherentPipe,
    FilterPhotoAdherentPipe,
    FilterModifAdherentPipe,
    FilterNationnaliteAdherentPipe,
    FilterNomAdherentPipe,
    FilterPrenomAdherentPipe,
    FilterTelephoneAdherentPipe,
    AssociationComponent,
    BodyComponent,
    RegistrationComponent,
    LogoutComponent,
    SafePipe,
    FilterMontantDonPipe,
    ReseauPipe,
    MessagePipe,
    DonComponent,
    HeaderComponent,
    ProfilComponent,
    NavComponent,
    Page404Component,
    ProfilComponent,
    AdminComponent,
    FilterIdAssociationDonPipe,
    FilterIdUtilisateurDonPipe,
    FilterAjoutDonPipe,
    FilterNomAdminPipe,
    FilterPrenomAdminPipe,
    FilterNationnaliteAdminPipe,
    FilterEmailAdminPipe,
    FilterAdresseAdminPipe,
    FilterLangueAdminPipe,
    FilterTelephoneAdminPipe,
    FilterModifAdminPipe,
    FilterAjoutAdminPipe,
    FilterMontantDonPipe,
    FilterPasswordAdminPipe,
    AdherentComponent,
    FilterPasswordAdherentPipe,





    
 
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
    // BsModalService,
    // BsModalRef,
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true },CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

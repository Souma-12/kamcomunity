import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BodyComponent } from './components/body/body.component';
import { AssociationComponent } from './components/association/association.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { DonComponent } from './components/don/don.component';
import { ProfilComponent } from './components/profil/profil.component';
import { Page404Component } from './components/page404/page404.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdherentComponent } from './components/adherent/adherent.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '404NotFound', component: Page404Component },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },

  {
    path: 'principal', component: BodyComponent, children: [
      { path: 'association', component: AssociationComponent, outlet: 'child1' },
      { path: 'adherant', component: UtilisateurComponent, outlet: 'child1' },
      { path: 'don', component: DonComponent, outlet: 'child1' },
      { path: 'profil', component: ProfilComponent, outlet: 'child1' },
      { path: 'admin', component: AdminComponent, outlet: 'child1' },
      { path: 'adherent', component: AdherentComponent, outlet: 'child1' },


    ]
  },
  { path: '**', redirectTo: '404NotFound', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

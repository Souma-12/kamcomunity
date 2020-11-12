import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaysService } from 'src/app/services/pays.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { AssociationService } from 'src/app/services/association.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  association = false;
  utilisateur = false;
  update = false;
  admin = false;
  tryToSubmit = false;
  fileToUploadCVUtilisateur;
  loggedUser: any = {};
  usedMail = false;
  associationModifie = false;
  updateError = true;
  pwdConfirmation = '';
  pwdConfirm = false;
  password = '';
  fileToUpload;
  fileToUploadAssociation;
  paysList = [];
  type;

  constructor(private utilisateurService: UtilisateurService,private associationService:AssociationService,private cookieService: CookieService, private toastr: ToastrService, private paysService: PaysService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getConnectedUtilisateur();
    this.getPays();

  }

  showFormUpdate() {
    this.update = true;
  }

  modifierMonCompteAdmin() {
    this.tryToSubmit = true;
    if (this.verifUpdateAdmin()) {
      this.spinner.show();
      this.loggedUser.password = this.password;
      this.utilisateurService.updateUtilisateur(this.loggedUser).subscribe(data => {
        this.successUpdate();
        this.loggedUser = data;
        this.update = false;
        this.spinner.hide();
      }, error => {
        this.errorUpdate();
        this.spinner.hide();
      });
    }
  }
  modifierMonCompteAssociation() {
    this.tryToSubmit = true;
    if (this.verifUpdateAssociation()) {
      this.spinner.show();
      this.loggedUser.password = this.password;
      this.associationService.updateAssociation(this.loggedUser).subscribe(data => {
        const res: any = data;
        this.loggedUser = res;
        if (data != null) {
          this.saveImageAssociation(res.id);
          console.log('data',data)
          this.successUpdate();
        } else {
          console.log('errrr',data)

          this.errorUpdate();
        }
        this.update = false;
        this.spinner.hide();
      }, error => {
        this.errorUpdate();
        this.spinner.hide();
      });
    }
  }
  

  modifierMonCompteUtilisateur() {
    this.tryToSubmit = true;
    if (this.verifUpdateUtilisateur()) {
      this.spinner.show();
      this.loggedUser.password = this.password;
      this.utilisateurService.updateUtilisateur(this.loggedUser).subscribe(data => {
        const res: any = data;
        this.loggedUser = res;
        if (data != null) {
          this.saveImageUtilisateur(res.id);
          this.successUpdate();
        } else {
          this.errorUpdate();
        }
        this.update = false;
        this.spinner.hide();
      }, error => {
        this.spinner.hide();
      });
    }
  }

  saveImageUtilisateur(id) {
    if (this.fileToUpload != null) {
      this.utilisateurService.uploadFile(this.fileToUpload, this.loggedUser.email).subscribe(result => {
        if (result === 'OK') {
          this.successUpdate();
        }
      }, error => {
        this.errorUpdate();
      });
    }
    // if (this.fileToUploadCVUtilisateur != null) {
    //   this.utilisateurService.uploadFile(this.fileToUploadCVUtilisateur, this.loggedUser.email, id,
    //     ).subscribe(result => {
    //     if (result != null) {
    //       this.successUpdate();
    //     }
    //   }, error => {
    //     this.errorUpdate();
    //   });
    // }
  }

  saveImageAssociation(id) {
    this.associationService.uploadFile(this.fileToUploadAssociation, this.loggedUser.email, this.type,id).subscribe(result => {
      if (result === 'OK') {
        console.log('result',result)

        this.successUpdate();
      }else{
        console.log('error file')
        this.errorUpdate();
      }
    }, error => {

    });
  }

  successUpdate() {
    this.toastr.success('Vos données sont mis à jour avec succés');
  }

  errorUpdate() {
    this.toastr.error('Oops il y a une problème');
  }

  annulerModification() {
    this.update = false;
  }

  getConnectedUtilisateur() {
    const login = this.cookieService.get('login');
    this.utilisateurService.getByLogin(login).subscribe(data => {
      this.loggedUser = data;
      console.log('this.loggedUser ', this.loggedUser )

      if (this.loggedUser.role.role === 'ADHERENT') {
        this.utilisateur = true;
        this.association = false;
        this.admin = false;
      }
      if (this.loggedUser.role.role === 'ADMIN') {
        this.association = true;
        this.utilisateur = false;
        this.admin = false;
      }
      if (this.loggedUser.role.role === 'SUPERADMIN') {
        this.association = false;
        this.utilisateur = false;
        this.admin = true;
      }
      this.spinner.hide();
    }, error => {
      this.spinner.hide();
    });
  }
  getPays() {
    this.paysList = this.paysService.getPaysList();
  }

  handleCVCandidatInput(files: FileList) {
    this.fileToUploadCVUtilisateur = files.item(0);
  }

  checkUsedMail() {
    const login = localStorage.getItem('login');
    this.utilisateurService.getByLogin(login).subscribe(data => {
      const user: any = data;
      if (this.loggedUser.email !== user.email) {
        this.utilisateurService.getByLogin(this.loggedUser.email).subscribe(result => {
          if (result == null) {
            this.usedMail = false;
          } else {
            this.usedMail = true;
          }
        }, error => {
          this.associationModifie = false;
          this.updateError = true;
        });
      } else {
        this.usedMail = false;
      }
    });
  }

  checkPwdConfirmation() {
    if (this.pwdConfirmation === this.loggedUser.password) {
      this.pwdConfirm = true;
    } else {
      this.pwdConfirm = false;
    }
  }

  handleImageUtilisateurInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  verifRequired(field) {
    if (field) {
      return true;
    }
    return false;
  }

  verifTelField(tel) {
    const phoneno = new RegExp(/^\+?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/);
    return phoneno.test(String(tel));
  }
  verifEmailField(field) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(field).toLowerCase());
  }

  verifPassWordField(pwd) {
    const re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    return re.test(pwd);
  }

  verifConfirmationPassword(pwd, confirmation) {
    return pwd === confirmation;
  }

  verifUrlField(field) {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(field);
  }

  handleImageAssociationInput(files: FileList) {
    this.fileToUploadAssociation = files.item(0);
  }

  verifUpdateUtilisateur() {
    console.log('ff .candidat', this.loggedUser.nom);
    return (this.verifRequired(this.loggedUser.nom) && this.verifRequired(this.loggedUser.prenom) &&
      this.verifRequired(this.loggedUser.dateNaissance) &&
      this.verifRequired(this.loggedUser.diplome) &&
      this.verifRequired(this.loggedUser.tel) && this.verifRequired(this.loggedUser.adresse) &&
      this.verifRequired(this.loggedUser.titre) && this.verifRequired(this.loggedUser.nationalite) &&
      this.verifRequired(this.loggedUser.email) && this.verifRequired(this.password) &&
      this.verifTelField(this.loggedUser.tel) && this.verifEmailField(this.loggedUser.email) &&
       this.verifConfirmationPassword(this.password, this.pwdConfirmation) && !this.usedMail);
  }

  verifUpdateAssociation() {
    return (this.verifRequired(this.loggedUser.nom) && this.verifRequired(this.loggedUser.presentation) &&
      this.verifRequired(this.loggedUser.site) &&
      this.verifRequired(this.loggedUser.taille) && this.verifRequired(this.loggedUser.type) &&
      this.verifRequired(this.loggedUser.fondation) && this.verifRequired(this.loggedUser.adresse) &&
      this.verifRequired(this.loggedUser.pays) && this.verifRequired(this.loggedUser.email) &&
      this.verifRequired(this.password) && this.verifUrlField(this.loggedUser.site) &&
      this.verifEmailField(this.loggedUser.email) && 
      this.verifConfirmationPassword(this.password, this.pwdConfirmation) && !this.usedMail);
  }

  verifUpdateAdmin() {
    return (this.verifRequired(this.loggedUser.email) && 
      this.verifConfirmationPassword(this.password, this.pwdConfirmation) && !this.usedMail && this.verifRequired(this.password)
      && this.verifEmailField(this.loggedUser.email));
  }

 
}

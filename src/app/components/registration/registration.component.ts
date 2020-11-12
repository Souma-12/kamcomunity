import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { formatDate } from '@angular/common';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { PaysService } from 'src/app/services/pays.service';
import { Utilisateur } from 'src/app/modals/Utilisateur';
// import { RoleStatus } from 'src/app/modals/RoleStatus';
import { Role } from 'src/app/modals/Role';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formReg: FormGroup;
  paysList = [];
  utilisateur;
  fileToUpload: File = null;
  files;
  role;
  roleAdherent: Role = {
    id: 3,
    role: 'ADHERENT'
  };
  savedUser: any;
  constructor(private utilisateurService: UtilisateurService, private formBuilder: FormBuilder, private paysService: PaysService) {
    this.formReg = new FormGroup({
      nom: new FormControl,
      prenom: new FormControl,
      adresse: new FormControl,
      photo: new FormControl,
      telephone: new FormControl,
      nationnalite: new FormControl,
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit() {
    this.getPays()
  };

  registration() {
    this.utilisateur = this.formReg.value;
    this.utilisateur.role = this.roleAdherent;
    this.utilisateur.photo = null;
    this.utilisateurService.register(this.utilisateur).subscribe(
      (res: any) => {
        console.log("result register : ", res);
        this.savedUser = res;
        this.utilisateurService.uploadFile(this.fileToUpload, this.savedUser.username).subscribe(data => {
          console.log("result data : ", data);
        }, error => {
          console.error();
        });
      },
      (error: any) => {
        console.error();
      }
    )
    this.formReg.reset(this.formReg.value);
  }

  handleImageUtilisateurInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  getPays() {
    this.paysList = this.paysService.getPaysList();
  }

}

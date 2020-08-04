import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formReg : FormGroup;
  constructor( private utilisateurService : UtilisateurService,private formBuilder: FormBuilder) { 
    this.formReg = new FormGroup({
      nom : new FormControl,
      prenom : new FormControl,
      telephone : new FormControl,
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(3)]),
      adresse : new FormControl,
      langue : new FormControl,
      dateAjout : new FormControl,

    })
  }

  ngOnInit(): void {
  }

  registration(){
    let dateAj = new Date()
    //this.formReg.patchValue({dateAjout : new Date()})
   // this.formReg.patchValue({dateAjout : formatDate(new Date(), 'dd-MM-yy', 'en')})

    console.log(this.formReg.value);

    this.utilisateurService.register(this.formReg.value).subscribe(
      (res : any) =>{
        console.log(res);
      },
      (error : any) =>{
        console.error();
        
      }
    )

  }
}

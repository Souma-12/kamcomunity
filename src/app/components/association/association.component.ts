import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
/*
  filter = false;
  showEmail = false;
  showAjout = false;
  showNom = true;
  showPresentation = true;
  showTaille = true;
  showSite = true;
  showFondation = false;
  showTel = false;
  showType = true;
  showAdresse = true;
  showPays = false;
  showLogo = true;
  showModification = false;
  associationToDelete;
  employeurs;
  employeurToDisplayDetails;
  nomFilter = '';
  presentationFilter = '';
  siteFilter = '';
  tailleFilter = '';
  adresseFilter = '';
  typeFilter = '';
  emailFilter = '';
  paysFilter = '';
  fondationFilter = '';
  ajoutFilter = '';
  modifFilter = '';

  

  showFilter() {
    this.filter = !this.filter;
  }
  changeSettings(template) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showDeleteModal(template, association) {
    this.associationToDelete = association;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showInfoModal(template, association) {
    this.associationToDisplayDetails = association;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-lg' });
  }

  deleteEmployeur() {
    this.associationService.deleteAssociation(this.employeurToDelete.id).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succés!', 'Employeur supprimé avec succés!');
      this.getAll();
    }, error => {
      this.toastr.error('Erreur!', 'Erreur lors de suppression de l\'employeur');
    });
  }

  getAll() {
    this.employeurService.getAll().subscribe(res => {
      this.employeurs = res;
    });
  }*/

}

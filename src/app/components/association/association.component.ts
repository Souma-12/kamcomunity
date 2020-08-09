import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AssociationService } from 'src/app/services/association.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {
  constructor(private modalService: BsModalService,private toastr: ToastrService, private associationService: AssociationService) { }

  ngOnInit() {
  }

  filter = false;
  showEmail = false;
  showAjout = false;
  showNom = true;
  bsModalRef: BsModalRef;
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
  associations;
  associationToDisplayDetails;
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

  deleteAssociation() {
    this.associationService.deleteAssociation(this.associationToDelete.id).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succés!', 'Employeur supprimé avec succés!');
      this.getAll();
    }, error => {
      this.toastr.error('Erreur!', 'Erreur lors de suppression de l\'employeur');
    });
  }

  getAll() {
    this.associationService.getAll().subscribe(res => {
      this.associations = res;
    });
  }

}

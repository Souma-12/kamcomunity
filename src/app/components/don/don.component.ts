import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DonService } from 'src/app/services/don.service';
import { Message } from 'src/app/modals/Message';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-don',
  templateUrl: './don.component.html',
  styleUrls: ['./don.component.css']
})
export class DonComponent implements OnInit {

  filter = false;
  showMontant = true;
  showIdUtilisateur= true;
  showIdAssociation = true;
  showDescription= true;
  idUtilisateurFilter='';
  idAssociationFilter='';
  showAjout = true;
  bsModalRef: BsModalRef;
  donToAdd: any = {};
  donToDelete;
  donToUpdate;
  tryToSubmit = false;
  dons;
  montantFilter = '';
  descriptionFilter = '';
  dateAjoutFilter = '';
  associationMessage: any;
  messageModel = new Message();
  message: any;
  utilisateur;
  selectedDon;
  loggedUser;
  sumByUser;
  utilisateurMessage: any;
  sumByAssociation: any;
  constructor(private modalService: BsModalService, private toastr: ToastrService, 
    private donService: DonService,private utilisateurService:UtilisateurService ,
    private cookieService: CookieService,private userService:UtilisateurService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.loggedUser  =  JSON.parse(this.cookieService.get("loggedUser"));
    this.getAll();
  }

  showAddModal(template) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showFilter() {
    this.filter = !this.filter;
  }
  changeSettings(template) {
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  showUpdateModal(template, don) {
    this.donToUpdate = don;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showDeleteModal(template, don) {
    this.donToDelete = don;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  addDon() {
    this.tryToSubmit = true;
    if (this.donToAdd && this.donToAdd.montant) {
     console.log("this.this.cookieService.get ",JSON.parse(this.cookieService.get("loggedUser")));
      this.donToAdd.utilisateur =  JSON.parse(this.cookieService.get("loggedUser"));
      this.donService.addDon(this.donToAdd).subscribe(res => {
        this.bsModalRef.hide();
        this.toastr.success('Succés!', 'Don ajouté avec succés!');
        this.tryToSubmit = false;
        this.getAll();
      }, error => {
        this.toastr.error('Erreur!', 'Erreur lors d\'ajout de don!');
      });
    }
  }

  updateDon() {
    this.tryToSubmit = true;
    if (this.donToUpdate && this.donToUpdate.montant) {
      this.donService.updateDon(this.donToUpdate).subscribe(res => {
        this.bsModalRef.hide();
        this.toastr.success('Succés!', 'Don mis à jour avec succés!');
        this.tryToSubmit = false;
      }, error => {
        this.toastr.error('Erreur!', 'Erreur lors de mise à jour du don');
      });
    }
  }

  deleteDon() {
    this.donService.deleteDon(this.donToDelete.id).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succéss!', 'Don supprimé avec succés!');
      this.getAll();
    }, error => {
      this.toastr.error('Erreur!', 'Erreur lors de suppression de don');
    });
  }

  getAll() {
    this.donService.getAll().subscribe(res => {
      this.dons = res;
    });
  }
  
  showMessageModel(template, admin){
    this.utilisateurMessage = admin;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
 
  sendMessage(){
    this.messageModel.message = this.message;
    this.messageModel.receiver = this.utilisateurMessage;
    this.messageModel.sender =  this.loggedUser;
    this.messageService.createMessage(this.messageModel).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succés!', 'Message à envoyé !');
    }, error => {
      this.toastr.error('Erreur!', 'nn');
    });
  }
 
    showSommeModal(template,id){
      console.log('id', id);
      console.log('template', template)

    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
    this.getSum(id);
  }
  getSum(id) {
    this.donService.getSommeDonUtilisateur(id).subscribe(data =>{
      this.sumByUser =data;
      console.log('d this.sumByUserata',  this.sumByUser)

    }, error => {
      this.toastr.error('Erreur!', 'nn');
    });
  }
  showSommeAssociationModal(template,id){
    console.log('id', id);
    console.log('template', template)

  this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  this.getSumA(id);
}
  getSumA(id) {
    this.donService.getSommeDonAssociation(id).subscribe(data =>{
      this.sumByAssociation =data;
      console.log('d this.sumByUserata',  this.sumByAssociation)

    }, error => {
      this.toastr.error('Erreur!', 'nn');
    });
  }

}
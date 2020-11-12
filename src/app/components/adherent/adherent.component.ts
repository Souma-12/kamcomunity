import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/modals/Message';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'src/app/services/message.service';
import { AdherentService } from 'src/app/services/adherent.service';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.css']
})
export class AdherentComponent implements OnInit {

  filter = false;
  showNom = true;
  showPrenom = true;
  showEmail= true;
  showAdresse= true;
  showNationnalite= true;
  showTel= true;
  showLangue= true;
  showAjout = true;
  showPassword = true;
  showModification = true;
  bsModalRef: BsModalRef;
  adherentToAdd: any = {};
  adherentToUpdate;
  tryToSubmit = false;
  adherents;
  nomFilter = '';
  prenomFilter = '';
  emailFilter = '';
  passwordFilter = '';
  telFilter = '';
  adresseFilter = '';
  nationnaliteFilter = '';
  langueFilter = '';
  photoFilter = '';
  dateAjoutFilter = '';
  dateFinFilter = '';
  showPhoto = true;
  utilisateurMessage:any;
  messageModel = new Message();
  message: any;
  adherent;
  loggedUser: any;
  adherentToDelete:any;
  adherentToDisplayDetails: any;
  constructor(private modalService: BsModalService, private toastr: ToastrService,private utilisateurService:UtilisateurService, 
    private cookieService: CookieService,private messageService: MessageService,private adherentService:AdherentService) { }

  ngOnInit() {
    this.getAll();
    this.loggedUser  =  JSON.parse(this.cookieService.get("loggedUser"));

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

  showUpdateModal(template, adherent) {
    this.adherentToUpdate = adherent;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showDeleteModal(template, adherent) {
    this.adherentToDelete = adherent;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }

 
  updateAdherent() {
    this.tryToSubmit = true;
    if (this.adherentToUpdate && this.adherentToUpdate.nom) {
      this.adherentService.updateAdherent(this.adherentToUpdate).subscribe(res => {
        this.bsModalRef.hide();
        this.toastr.success('Succés!', 'Adherent mis à jour avec succés!');
        this.tryToSubmit = false;
      }, error => {
        this.toastr.error('Erreur!', 'Erreur lors de mise à jour du adherent');
      });
    }
  }

  deleteAdherent() {
    this.adherentService.deleteAdherent(this.adherentToDelete.id).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succéss!', 'Adherent supprimé avec succés!');
      this.getAll();
    }, error => {
      this.toastr.error('Erreur!', 'Erreur lors de suppression d adherent');
    });
  }
 
  

  getAll() {
    this.adherentService.getAllAdherent().subscribe(res => {
      this.adherents = res;
    });
  }
  showMessageModel(template, adherent){
    this.utilisateurMessage = adherent;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showInfoModal(template, adherent) {
    this.adherentToDisplayDetails = adherent;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-lg' });
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

  
}
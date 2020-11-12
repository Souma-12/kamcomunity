import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';
import { Message } from 'src/app/modals/Message';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
  adminToAdd: any = {};
  adminToDelete;
  adminToUpdate;
  tryToSubmit = false;
  admins;
  nomFilter = '';
  prenomFilter = '';
  emailFilter = '';
  passwordFilter = '';
  telFilter = '';
  adresseFilter = '';
  nationnaliteFilter = '';
  langueFilter = '';
  dateAjoutFilter = '';
  dateFinFilter = '';
  utilisateurMessage: any;
  messageModel = new Message();
  message: any;
  admin;
  loggedUser: any;
  constructor(private modalService: BsModalService, private toastr: ToastrService, 
    private adminService: AdminService,private utilisateurService:UtilisateurService, 
    private cookieService: CookieService,private messageService: MessageService ) { }

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

  showUpdateModal(template, admin) {
    this.adminToUpdate = admin;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }
  showDeleteModal(template, admin) {
    this.adminToDelete = admin;
    this.bsModalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  addAdmin() {
    this.tryToSubmit = true;
    if (this.adminToAdd && this.adminToAdd.nom) {
      this.adminService.addAdmin(this.adminToAdd).subscribe(res => {
        this.bsModalRef.hide();
        this.toastr.success('Succés!', 'Admin ajouté avec succés!');
        this.tryToSubmit = false;
        this.getAll();
      }, error => {
        this.toastr.error('Erreur!', 'Erreur lors d\'ajout de admin!');
      });
    }
  }

  updateAdmin() {
    this.tryToSubmit = true;
    if (this.adminToUpdate && this.adminToUpdate.nom) {
      this.adminService.updateAdmin(this.adminToUpdate).subscribe(res => {
        this.bsModalRef.hide();
        this.toastr.success('Succés!', 'Admin mis à jour avec succés!');
        this.tryToSubmit = false;
      }, error => {
        this.toastr.error('Erreur!', 'Erreur lors de mise à jour du admin');
      });
    }
  }

  deleteAdmin() {
    this.adminService.deleteAdmin(this.adminToDelete.id).subscribe(res => {
      this.bsModalRef.hide();
      this.toastr.success('Succéss!', 'Admin supprimé avec succés!');
      this.getAll();
    }, error => {
      this.toastr.error('Erreur!', 'Erreur lors de suppression d admin');
    });
  }

  getAll() {
    this.adminService.getAllAdmin().subscribe(res => {
      this.admins = res;
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

}
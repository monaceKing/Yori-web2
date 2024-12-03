import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
// import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'; 
import { th, tr } from 'intl-tel-input/i18n';


interface Message {
  id: number;
  content: string;
  subject?: string;
  date: Date;
}

@Component({
  selector: 'app-boite-reception',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    FormsModule,
    MatIcon
  ],
  templateUrl: './boite-reception.component.html',
  styleUrl: './boite-reception.component.css'
})

  export class BoiteReceptionComponent {
    receivedMessages: Message[] = [
      { id: 1, content: 'Informations importantes à propos de l\'établissement hotel sotega 1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sed itaque amet dignissimos delectus facere sunt fugit non? Delectus ducimus excepturi, obcaecati sapiente nam reiciendis ipsa impedit itaque quaerat natus?', date: new Date('1996-03-01T23:30:00') },
      { id: 2, content: 'Voici le message 2 avec plus de détails.', date: new Date() },
      { id: 3, content: 'Message numéro 3 pour la discussion.', date: new Date() },
      { id: 4, content: 'Détails supplémentaires du message 4.', date: new Date() },
      { id: 5, content: 'Enfin, le message 5 pour conclure.', date: new Date() }
  ];

  sentMessages: Message[] = []; // Liste des messages envoyés

  selectedMessage?: Message;
  isReplying = false;
  newMessage = false;
  messageSent = false;

  // Propriétés pour la réponse
  replySubject: string = '';
  replyBody: string = '';
  selectedFile?: File;

  selectMessage(message: Message) {
    if (this.selectedMessage === message) {
        this.selectedMessage = undefined; // Ferme le message s'il est déjà ouvert
    } else {
        this.selectedMessage = message; // Ouvre le message sélectionné
    }
}

  openReplyPopup() {
      this.isReplying = true;
      this.replySubject = ''; // Réinitialiser l'objet
      this.replyBody = ''; // Réinitialiser le corps
      this.selectedFile = undefined; // Réinitialiser le fichier sélectionné
  }

  sendNewMessage(){
    this.newMessage = true;
    this.replySubject = ''; // Réinitialiser l'objet
    this.replyBody = ''; // Réinitialiser le corps
  }

  closeReplyPopup() {
      this.isReplying = false;
      this.newMessage = false;
      this.messageSent = false;
  }


  submitReply() {
      if (this.replyBody.trim()) { // Vérifier que le corps du message n'est pas vide
          const newMessage: Message = {
              id: this.sentMessages.length + 1, // Générer un nouvel ID
              content: this.replyBody,
              subject: this.replySubject, // Utiliser la propriété 'subject'
              date: new Date() // Définir la date actuelle
          };

          this.sentMessages.push(newMessage); // Ajouter le nouveau message à la liste des messages envoyés

          // Réinitialiser les champs après envoi
          this.closeReplyPopup();
          this.replySubject = '';
          this.replyBody = '';
          this.selectedFile = undefined; // Réinitialiser le fichier sélectionné
          this.submitReply2();

          console.log('Réponse au message envoyé:', newMessage);
      }
  }


  submitReply2(){
    this.messageSent = true;
    this.newMessage = false;
  }

  onFileSelected(event: Event) {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files.length > 0) {
          this.selectedFile = input.files[0]; // Stocker le fichier sélectionné
      }
  }
}

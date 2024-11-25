import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


interface Message {
  id: number;
  content: string;
}

@Component({
  selector: 'app-boite-reception',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    MatIcon,
    FormsModule
  ],
  templateUrl: './boite-reception.component.html',
  styleUrl: './boite-reception.component.css'
})

  export class BoiteReceptionComponent {
    messages: Message[] = [
      { id: 1, content: 'Ceci est le contenu complet du message 1.' },
      { id: 2, content: 'Voici le message 2 avec plus de détails.' },
      { id: 3, content: 'Message numéro 3 pour la discussion.' },
      { id: 4, content: 'Détails supplémentaires du message 4.' },
      { id: 5, content: 'Enfin, le message 5 pour conclure.' }
  ];
  selectedMessage?: Message;
    isReplying = false;

    // Propriétés pour la réponse
    replySubject: string = '';
    replyBody: string = '';
    selectedFile?: File;

    selectMessage(message: Message) {
        if (this.selectedMessage === message) {
            this.selectedMessage = undefined;
        } else {
            this.selectedMessage = message;
        }
    }

    openReplyPopup() {
        this.isReplying = true;
        this.replySubject = ''; // Réinitialiser l'objet
        this.replyBody = '';    // Réinitialiser le corps
        this.selectedFile = undefined; // Réinitialiser le fichier sélectionné
    }

    closeReplyPopup() {
        this.isReplying = false;
    }

    submitReply() {
        // Logique pour envoyer la réponse
        console.log('Objet:', this.replySubject);
        console.log('Corps:', this.replyBody);
        if (this.selectedFile) {
            console.log('Fichier joint:', this.selectedFile.name);
        }

        this.closeReplyPopup();
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFile = input.files[0]; // Stocker le fichier sélectionné
        }
    }



}

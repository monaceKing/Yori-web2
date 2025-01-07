import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Comment {
    id: number;
    userId: string; // Identifiant de l'utilisateur
    content: string;
    createdDate: Date;
    rating: number; // Appréciation entre 1 et 5
    replies: Comment[];
}
 
@Component({
  selector: 'app-commentaires',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.css'
}) 
export class CommentairesComponent {

  comments: Comment[] = [
    {
      id: 1,
      userId: 'Utilisateur1',
      content: 'déception totale !',
      createdDate: new Date('2024-11-20'),
      rating: 1,
      replies: []
    },
    {
      id: 2,
      userId: 'Utilisateur2',
      content: 'Le service client est très réactif.',
      createdDate: new Date('2024-11-21'),
      rating: 4,
      replies: []
    },
    {
      id: 3,
      userId: 'Utilisateur3',
      content: 'Je recommande vivement ce site.',
      createdDate: new Date('2024-11-22'),
      rating: 5,
      replies: []
    },
    {
      id: 4,
      userId: 'Utilisateur4',
      content: 'Un peu déçu par le service client.',
      createdDate: new Date('2024-11-23'),
      rating: 3,
      replies: []
    },
    {
      id: 5,
      userId: 'Utilisateur5',
      content: 'très belles chambres, j\'adore!.',
      createdDate: new Date('2024-11-24'),
      rating: 4,
      replies: []
    }
  ];

    newCommentContent: string = '';
    newCommentUserId: string = '';
    newCommentRating: number = 0; // Initialisé à zéro
    replyContent: { [key: number]: string } = {}; // Pour stocker les réponses par ID de commentaire
    replyingToCommentId: number | null = null; // ID du commentaire auquel on répond

  addComment() {
    // Vérifiez que les champs ne sont pas vides et que la note est valide
    if (this.newCommentUserId && this.newCommentContent && this.newCommentRating >= 1 && this.newCommentRating <= 5) {
      const comment: Comment = {
        id: this.comments.length + 1,
        userId: this.newCommentUserId,
        content: this.newCommentContent,
        createdDate: new Date(),
        rating: this.newCommentRating,
        replies: []
      };

      this.comments.push(comment);

      // Réinitialiser les champs
      this.newCommentContent = '';
      this.newCommentUserId = '';
      this.newCommentRating = 0; // Réinitialisé à zéro
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  }

  addReply(commentId: number, replyContentValue: string) {
    const comment = this.comments.find(c => c.id === commentId);
    if (comment && replyContentValue) { // Vérifiez que le contenu de la réponse n'est pas vide
      const reply: Comment = {
        id: comment.replies.length + 1, // Utilisation de la longueur pour l'ID
        userId: 'Répondant', // Vous pouvez personnaliser cela
        content: replyContentValue,
        createdDate: new Date(),
        rating: 0, // Pas d'étoiles pour les réponses
        replies: []
      };

      comment.replies.push(reply);

      // Réinitialiser le contenu de la réponse après l'ajout
      this.replyContent[commentId] = '';
      this.replyingToCommentId = null; // Réinitialiser l'ID après ajout
    }
  }

  toggleReply(commentId: number) {
    if (this.replyingToCommentId === commentId) {
      this.replyingToCommentId = null; // Fermer le champ si déjà ouvert
    } else {
      this.replyingToCommentId = commentId; // Ouvrir le champ pour ce commentaire
    }
  }

  isReplying(commentId: number): boolean {
    return this.replyingToCommentId === commentId;
  }
}

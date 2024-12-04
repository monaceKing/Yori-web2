import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
export interface Item {
  id: number;
  invoiceNumber: string; // Numéro de la facture
  title: string;
  startDate:String;
  endtDate:String;
  limitDate:String;
  amount: number;
  commission: number;
  selected: boolean; // Pour savoir si la ligne est sélectionnée
}

interface SelectedInvoice {
  invoiceNumber: string;
  commission: number;
} 

@Component({
  selector: 'app-factures',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIcon
  ],
  templateUrl: './factures.component.html',
  styleUrl: './factures.component.css'
})
export class FacturesComponent {
  form: FormGroup;
  [key: string]: any;
  
  items: Item[] = [
    { id: 1, invoiceNumber: 'FAC-001', title: 'Produit A',startDate:'20-07-2024',endtDate:'29-07-2024',limitDate:': 16 avr. 2024', amount: 100, commission: 10, selected: false },
    { id: 2, invoiceNumber: 'FAC-002', title: 'Produit B', startDate:'20-07-2024',endtDate:'29-07-2024',limitDate:': 16 avr. 2024',amount: 200, commission: 20, selected: false },
    { id: 3, invoiceNumber: 'FAC-003', title: 'Produit C', startDate:'20-07-2024',endtDate:'29-07-2024',limitDate:': 16 avr. 2024',amount: 150, commission: 15, selected: false },
    { id: 4, invoiceNumber: 'FAC-004', title: 'Produit D', startDate:'20-07-2024',endtDate:'29-07-2024',limitDate:': 16 avr. 2024',amount: 300, commission: 30, selected: false },
    { id: 5, invoiceNumber: 'FAC-005', title: 'Produit E', startDate:'20-07-2024',endtDate:'29-07-2024',limitDate:': 16 avr. 2024',amount: 250, commission: 25, selected: false }
  ];

    paiements = [
      { id:1, label: 'Carte de crédit/débit', imgSrc: ['assets/img/visa.png', 'assets/img/visa-yellow.png', 'assets/img/GB-card.png'] },
      { id:2, label: 'Paiement digital', imgSrc: ['assets/img/paypal.png'] },
      { id:3, label: 'Airtel Money', imgSrc: ['assets/img/airtel.png'] },
    ];

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        paiement: [null] // Initialise le contrôle pour le paiement sélectionné
      });
    }

  totalAmount = 0;
  totalCommission = 0;

  // Montant dû (total des commissions)
  totalDue = this.items.reduce((sum, item) => sum + item.commission, 0);

  // Montant à payer (total des commissions sélectionnées)
  amountToPay = 0;

  // Pour contrôler l'affichage de la div de paiement
  showPaymentDetails = false;

  // Détails des factures sélectionnées
  selectedInvoices: SelectedInvoice[] = []; // Déclaration explicite du type

  updateTotals() {
    this.totalAmount = this.items
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.amount, 0);

    this.totalCommission = this.items
      .filter(item => item.selected)
      .reduce((sum, item) => sum + item.commission, 0);

    // Mettre à jour les détails des factures sélectionnées
    this.selectedInvoices = this.items
      .filter(item => item.selected)
      .map(item => ({ invoiceNumber: item.invoiceNumber, commission: item.commission }));

    // Mettre à jour le montant à payer
    this.amountToPay = this.totalCommission;
  }

  toggleSelectAll(event: Event) {
    const target = event.target as HTMLInputElement; // Cast de l'événement
    const selectAll = target.checked; // Utiliser `checked` après le cast
    this.items.forEach(item => item.selected = selectAll);
    this.updateTotals(); // Mettre à jour les totaux après la sélection
  }

  processPayment() {
    if (this.amountToPay > 0) {
      this.showPaymentDetails = true; // Afficher la div avec les détails de paiement
      // Optionnel : Vous pouvez également masquer le tableau ici si nécessaire.
    }
  }

  resetView() {
    this.showPaymentDetails = false; // Réinitialiser pour cacher la div de paiement
    this.items.forEach(item => item.selected = false); // Réinitialiser les sélections
    this.updateTotals(); // Mettre à jour les totaux après réinitialisation
  }
  printPage() {
    window.print();
}


isListVisible: boolean = false; // Initialise la visibilité de la liste
toggleList() {
  this.isListVisible = !this.isListVisible; // Inverse la visibilité de la liste
}

}

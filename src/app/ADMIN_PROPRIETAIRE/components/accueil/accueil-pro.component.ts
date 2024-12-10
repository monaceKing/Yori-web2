import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';



interface Client {
  id:number;
  nom: string;
  pays: string;
  statut: string;
  type_propriete: string;
  duree: string;
  evaluation: string;
}


@Component({
  selector: 'app-accueil-pro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon,
    CommonModule
  ],
  templateUrl: './accueil-pro.component.html',
  styleUrl: './accueil-pro.component.css'
})

export class AccueilProComponent implements OnInit, OnDestroy {
  ngOnInit(): void {}

  ngOnDestroy(): void {}


    clients: Client[] = [
    {
      nom: 'Jean Dupont',
      statut: 'Hotellerrie',
      duree: '4 jours',
      pays: "Gabon",
      type_propriete: '',
      evaluation: 'Très bon',
      id: 1
    },
    {
      nom: 'Marie Curie',
      statut: 'Tourisme',
      duree: '5 jours',
      pays: "Gabon",
      type_propriete: "",
      evaluation: 'Très bon',
      id: 2
    },
    {
      nom: 'Pierre Martin',
      statut: 'Hotellerrie',
      duree: '5 jours',
      pays: "Sénégal",
      type_propriete: '',
      evaluation: 'bon',
      id: 3
    },
    {
      nom: 'Sophie Germain',
      statut: 'Hotellerrie',
      duree: '5 jours',
      pays: "Bénin",
      type_propriete: '',
      evaluation: 'Moins bon',
      id: 4
    },
    {
      nom: 'Lucie Aubrac',
      statut: 'Tourisme',
      duree: '5 jours',
      pays: "RDC",
      type_propriete: '',
      evaluation: 'Mauvais',
      id: 5
    },
    {
      nom: 'Antoine Doinel',
      statut: '2024-11-02',
      duree: '5 jours',
      pays: "",
      type_propriete: '',
      evaluation: '',
      id: 6
    },
    {
      nom: 'Clara Zetkin',
      statut: '2024-11-11',
      duree: '3 jours',
      pays: "",
      type_propriete: '',
      evaluation: '',
      id: 7
    },
    {
      nom: 'Gabriel Garcia',
      statut: '2024-10-30',
      duree: '3 jours',
      pays: "",
      type_propriete: '',
      evaluation: '',
      id: 8
    },
    {
      nom: 'Nina Simone',
      statut: '2024-11-03',
      duree: '3 jours',
      pays: "",
      type_propriete: '',
      evaluation: '',
      id: 9
    },
    {
      nom: 'Albert Camus',
      statut: '2024-11-12',
      duree: '7 jours',
      pays: "",
      type_propriete: '',
      evaluation: '',
      id: 10
    },
  ];

  statutsFiltres: string[] = ['Vue d\'ensemble', 'Hotellerrie', 'Tourisme'];
  selectedStatut: string = 'Vue d\'ensemble'; // Valeur par défaut
  
  sousStatuts: { [key: string]: string[] } = {
    'Vue d\'ensemble': ['Option 1', 'Option 2'],
    'Hotellerrie': ['Option A', 'Option B'],
    'Tourisme': ['Option X', 'Option Y']
  };
  
  selectedSousStatut: string = ''; // Initialiser comme une chaîne vide

  onStatutChange() {
    // Réinitialiser la sélection du sous-statut lorsque le statut change
    this.selectedSousStatut = this.sousStatuts[this.selectedStatut]?.[0] || '';
  } dateDebut: string = '';
    dateFin: string = '';
    showCheckboxes: boolean = false;
    selectedStatuts: string[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 5;
    itemsPerPageOptions: number[] = [5, 10, 50];
    selectedClient: any = null;
    showDetails: boolean = false;
    numeroTelephone:boolean = false;
    checkboxValues: { [key: string]: boolean } = {};
    openFiltre: boolean = false;

    afficherFiltre() {
    this.openFiltre = !this.openFiltre;
  }

    labels = [
      { for: 'statut', text: 'Apperçu ' },
      { for: 'dateDebut', text: 'Du ' },
      { for: 'dateFin', text: 'Au ' },
      { for: 'filtre', text: 'Filtre ' }
    ];

    // Fonction pour obtenir la classe dynamique
    getLabelClass(index: number): string {
      switch(index) {
        case 0:
          return 'label-style-1';
        case 1:
          return 'label-style-2';
        case 2:
          return 'label-style-3';
        case 3:
          return 'label-style-4';
        default:
          return '';
      }
    }

    getClientsFiltres() {
        return this.clients.filter(client => {
            const dateArrivee = new Date(client.statut);
            const dateDebutObj = new Date(this.dateDebut);
            const dateFinObj = new Date(this.dateFin);

            const isStatutValide = this.selectedStatut === 'Vue d\'ensemble' || client.statut === this.selectedStatut;
            const isDateValide = (!this.dateDebut || dateArrivee >= dateDebutObj) && (!this.dateFin || dateArrivee <= dateFinObj);

            return isStatutValide && isDateValide;
        });
    }

    // totalTarif(): number {
    //     return this.getClientsFiltres().reduce((total, client) => {
    //         const tarif = Number(client.tarif.replace('€', '').trim()) || 0; // Retire le symbole et convertit
    //         return total + tarif;
    //     }, 0);
    // }

    // totalCommission(): number {
    //     return this.getClientsFiltres().reduce((total, client) => {
    //         const commission = Number(client.commission.replace('€', '').trim()) || 0; // Retire le symbole et convertit
    //         return total + commission;
    //     }, 0);
    // }

    printPage() {
        window.print();
    }

    toggleCheckboxes() {
      this.showCheckboxes = !this.showCheckboxes;
    }

    toggleStatutSelection(statut: string, event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
        this.selectedStatuts.push(statut);
    } else {
        this.selectedStatuts = this.selectedStatuts.filter(s => s !== statut);
    }
    console.log(this.selectedStatuts); // Pour déboguer et voir les statuts sélectionnés
    }

    get paginatedClients() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.getClientsFiltres().slice(start, start + this.itemsPerPage);
    }

    get totalPages() {
      return Math.ceil(this.getClientsFiltres().length / this.itemsPerPage);
    }

    goToPage(page: number) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    }

    onItemsPerPageChange(event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      this.itemsPerPage = Number(selectElement.value);
      this.currentPage = 1; // Réinitialiser à la première page
    }


    // Méthode appelée lors du clic sur le lien
    afficherDetails(client: Client) {
      this.selectedClient = client;
      this.showDetails = true; // On affiche la div conditionnée
    }

    afficherTelephone(){
      this.numeroTelephone = !this.numeroTelephone
    }

      // Méthode pour revenir à la vue par défaut
    revenir() {
      this.selectedClient  = null;
      this.showDetails = false; // On cache la div conditionnée
    }


}

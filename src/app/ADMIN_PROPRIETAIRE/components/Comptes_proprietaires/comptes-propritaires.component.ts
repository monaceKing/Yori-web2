import { CommonModule } from '@angular/common';
import { Component, input, OnDestroy, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ClaudelComponent } from '../../../ADMIN_CLIENT/interfaces/components/analyse/claudel/claudel.component';
import { FransdaComponent } from '../../../ADMIN_CLIENT/interfaces/components/analyse/fransda/fransda.component';
import { AmourComponent } from '../../../ADMIN_CLIENT/interfaces/components/analyse/amour/amour.component';
import { InelComponent } from '../../../ADMIN_CLIENT/interfaces/components/analyse/inel/inel.component';



interface Client {
  id:number;
  nom: string;
  pays: string;
  statut: string;
  contact: string;
  email: string;
  nombreStructure:number;
  duree: string;
}

export interface Comment {
  id: number;
  userId: string; // Identifiant de l'utilisateur
  content: string;
  createdDate: Date;
  rating: number; // Appréciation entre 1 et 5
  replies: Comment[];
}


@Component({
  selector: 'app-comptes-propritaires',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatTabsModule 
  ],
  templateUrl: './comptes-propritaires.component.html',
  styleUrl: './comptes-propritaires.component.css'
})

export class ComptesPropritairesComponent implements OnInit {
    clients: Client[] = [
    {
      nom: 'Jean Dupont',
      contact: '0000000010',
      statut: 'Hotellerrie',
      duree: '45',
      pays: "Gabon",
      email: 'elokosama@gmail.com',
      nombreStructure: 5,
      id: 1
    },
    {
      nom: 'Marie Curie',
      contact: '000000009',
      statut: 'Tourisme',
      duree: '5',
      pays: "Gabon",
      email: "elokosama@gmail.com",
      nombreStructure: 5,
      id: 2
    },
    {
      nom: 'Pierre Martin',
      contact: '000000008',
      statut: 'Hotellerrie',
      duree: '5',
      pays: "Sénégal",
      email: 'elokosama@gmail.com',
      nombreStructure: 3,
      id: 3
    },
    {
      nom: 'Sophie Germain',
      contact: '000000007',
      statut: 'Hotellerrie',
      duree: '5',
      pays: "Bénin",
      email: 'elokosama@gmail.com',
      nombreStructure: 2,
      id: 4
    },
    {
      nom: 'Lucie Aubrac',
      contact: '000000006',
      statut: 'Tourisme',
      duree: '5',
      pays: "RDC",
      email: 'elokosama@gmail.com',
      nombreStructure: 1,
      id: 5
    },
    {
      nom: 'Antoine Doinel',
      contact: '000000005',
      statut: 'Tourisme',
      duree: '5',
      pays: "",
      email: 'elokosama@gmail.com',
      nombreStructure: 7,
      id: 6
    },
    {
      nom: 'Clara Zetkin',
      contact: '000000004',
      statut: 'Tourisme',
      duree: '3',
      pays: "",
      email: 'elokosama@gmail.com',
      nombreStructure: 6,
      id: 7
    },
    {
      nom: 'Gabriel Garcia',
      contact: '000000003',
      statut: 'Hotellerrie',
      duree: '3',
      pays: "",
      email: 'elokosama@gmail.com',
      nombreStructure: 6,
      id: 8
    },
    {
      nom: 'Nina Simone',
      contact: '000000002',
      statut: 'Hotellerrie',
      duree: '3',
      pays: "",
      email: 'elokosama@gmail.com',
      nombreStructure: 6,
      id: 9
    },
    {
      nom: 'Albert Camus',
      contact: '000000001',
      statut: 'Hotellerrie',
      duree: '7',
      pays: "",
      email: 'elokosama@gmail.com',
      nombreStructure: 6,
      id: 10
    },
    ];

    images: string[] = [
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
      'assets/img/chambre.png',
    ];

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

      // isLeftSidebarCollapsed = input<boolean>();
      // changeIsLeftSidebarCollapsed = output<boolean>();
      items = [
        { 
            icon: 'fal fa-user',
            label: 'Nombre de réservations',
            component: FransdaComponent
        },
        {
            icon: 'fal fa-user-times',
            label: 'Réservations annulées',
            component: ClaudelComponent
        },
    ];
    
    items2 = [
        {
            icon: 'fal fa-sack-dollar',
            label: 'Montant des réservations',
            component: AmourComponent
        },
        {
            icon: 'fal fa-hand-holding',
            label: 'Montant des commissions',
            component: InelComponent
        },
    ];
    
    activeComponent: any; // Composant actif pour items
    selectedTab: number = 0; // Onglet sélectionné pour items
    
    activeComponentItems2: any; // Composant actif pour items2
    selectedTabItems2: number = 0; // Onglet sélectionné pour items2
    
    ngOnInit() {
        const storedTabIndex = localStorage.getItem('activeTab');
        if (storedTabIndex) {
            this.selectedTab = +storedTabIndex; // Convertir en nombre
        }
    
        const storedTabIndexItems2 = localStorage.getItem('activeTabItems2');
        if (storedTabIndexItems2) {
            this.selectedTabItems2 = +storedTabIndexItems2; // Convertir en nombre
        }
    
        this.setActiveComponent(this.selectedTab); // Initialiser le composant actif pour items
        this.setActiveComponentItems2(this.selectedTabItems2); // Initialiser le composant actif pour items2
    }
    
    // Méthodes pour gérer les items
    setActiveComponent(tabIndex: number) {
        if (tabIndex < this.items.length) {
            this.activeComponent = this.items[tabIndex].component; // Mettre à jour le composant actif pour items
        }
    }
    
    selectTab(tabIndex: number) {
        this.selectedTab = tabIndex; // Met à jour l'onglet sélectionné pour items
        localStorage.setItem('activeTab', tabIndex.toString()); // Stocke l'index dans localStorage
        this.setActiveComponent(tabIndex); // Mettre à jour le composant actif
    }
    
    // Méthodes pour gérer les items2 (duplicata des méthodes de items)
    setActiveComponentItems2(tabIndex: number) {
        if (tabIndex < this.items2.length) {
            this.activeComponentItems2 = this.items2[tabIndex].component; // Mettre à jour le composant actif pour items2
        }
    }
    
    selectTabItems2(tabIndex: number) {
        this.selectedTabItems2 = tabIndex; // Met à jour l'onglet sélectionné pour items2
        localStorage.setItem('activeTabItems2', tabIndex.toString()); // Stocke l'index dans localStorage
        this.setActiveComponentItems2(tabIndex); // Mettre à jour le composant actif
    }
    
    
    


    statutsFiltres: string[] = ['Vue d\'ensemble', 'Hotellerrie', 'Tourisme'];
    selectedStatut: string = 'Vue d\'ensemble'; // Valeur par défaut
    
    sousStatuts: { [key: string]: string[] } = {
      'Hotellerrie': ['Hotel (s)', 'Motel (s)','Appartement (s)'],
      'Tourisme': ['Autres', 'Randonnés','Parcs','Campings','Plages privées','Maisons traditionnelles']
    };
    
    // Liste des évaluations pour le filtre
    evaluationsFiltres: string[] = ['Tout grouper', 'Très bon', 'Bon', 'Moyen', 'Mauvais'];
    selectedEvaluation: string = 'Tout grouper'; // Valeur par défaut

    
  // Liste des durées pour le filtre
  dureesFiltres: string[] = ['Tous les années'];
  selectedDuree: string = 'Tous les années'; // Valeur par défaut
 

  dialogueMessage : boolean=false;
  dialogueMessageEnvoye:boolean=false

  constructor() {
    // Initialiser le sous-statut en fonction du statut par défaut
    this.onStatutChange();
    this.initializeCountryFilters();
    this.initializeDurationFilters();
  }

  onStatutChange() {
    // Réinitialiser la sélection du sous-statut lorsque le statut change
    this.selectedSousStatut = this.sousStatuts[this.selectedStatut]?.[0] || '';
  }

  initializeCountryFilters() {
    const uniqueCountries = new Set(this.clients.map(client => client.pays));
    this.paysFiltres.push(...Array.from(uniqueCountries));
  }

  initializeDurationFilters() {
    const uniqueDurations = new Set(this.clients.map(client => client.duree));
    this.dureesFiltres.push(...Array.from(uniqueDurations)); // Ajoute "Tous" et les durées uniques
  }

  get filteredClients() {
    return this.clients.filter(client => {
      const matchesPays = this.selectedPays === 'Tous les pays' || client.pays === this.selectedPays;
      // const matchesEvaluation = this.selectedEvaluation === 'Tout grouper' || client.evaluation === this.selectedEvaluation;
      const matchesDuree = this.selectedDuree === 'Tous les années' || client.duree === this.selectedDuree;

      // return matchesPays && matchesEvaluation && matchesDuree;
      return matchesPays  && matchesDuree;
    });
  }


    selectedSousStatut: string = ''; // Initialiser comme une chaîne vide
    filterPays: string = ''; // Propriété pour le filtre
    dateDebut: string = '';
    dateFin: string = '';
    paysFiltres: string[] = ['Tous les pays'];
    selectedPays: string = 'Tous les pays'; // Valeur par défaut
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

    // labels = [
    //   { for: 'statut', text: 'Apperçu ' },
    //   { for: 'pays', text: 'Région ' },
    //   { for: 'evaluation', text: 'Evaluation ' },
    //   { for: 'duree', text: 'Filtre par année ' },
    //   { for: 'filtre', text: 'Filtre ' }
    // ];

    // Fonction pour obtenir la classe dynamique
    // getLabelClass(index: number): string {
    //   switch(index) {
    //     case 0:
    //       return 'label-style-1';
    //     case 1:
    //       return 'label-style-2';
    //     case 2:
    //       return 'label-style-3';
    //     case 3:
    //       return 'label-style-4';
    //     case 4:
    //       return 'label-style-5';
    //     default:
    //       return '';
    //   }
    // }

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
      return this.filteredClients.slice(start, start + this.itemsPerPage); // Appliquer le filtrage ici
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

    toogleMessage(){
      this.dialogueMessage = !this.dialogueMessage
    }

    messageenvoye(){
      this.dialogueMessage = !this.dialogueMessage
      this.dialogueMessageEnvoye = !this.dialogueMessageEnvoye

    }
    fermerMessageenvoye(){
      this.dialogueMessageEnvoye = !this.dialogueMessageEnvoye

    }

}

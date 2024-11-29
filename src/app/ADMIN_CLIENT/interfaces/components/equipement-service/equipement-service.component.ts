import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-equipement-service',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './equipement-service.component.html',
  styleUrl: './equipement-service.component.css'
})
export class EquipementServiceComponent implements OnInit{
  ngOnInit(): void {
  }
    // Liste des éléments à afficher avec des checkboxes
    lists = [
      { id:1 , label:'Restaurant' },
      { id:2 , label:'Service d`\étage' },
      { id:3 , label:'Bar' },
      { id:4 , label:'Réception ouverte 24h/24' },
      { id:5 , label:'Sauna' },
      { id:6 , label:'Centre de remise en forme' },
      { id:7 , label:'Jardin' },
      { id:8 , label:'Terrasse' },
      { id:9 , label:'Chambres non-fumeurs' },
      { id:10, label: 'Chambres fumeurs' },
      { id:11, label: 'Navette aéroport' },
      { id:12, label: 'Chambres familiales' },
      { id:13, label: 'Spa et centre de bien-être' },
      { id:14, label: 'Bain à remous/jacuzzi' },
      { id:15, label: 'Connexion Wi-Fi gratuite' },
      { id:16, label: 'Climatisation' },
      { id:17, label: 'Parc aquatique' },
      { id:18, label: 'Borne de recharge pour les véhicules électriques' },
      { id:19, label: 'Piscine' },
      { id:20, label: 'Plage' },
    ];

    languageItems = [
      { id:1 , label:'Français' },
      { id:2 , label:'Anglais' },
      { id:3 , label:'Espagnol' },
      { id:4 , label:'Italien' },
      { id:5 , label:'Portugais' },
      { id:6 , label:'deutsch' },
    ];


    // Object pour gérer les options de petit-déjeuner
    breakfastOptions = {
      A_la_carte: false,
      Africain: false,
      Americain: false,
      Asiatique: false,
      Buffet: false,
      Petit_dejeuner_a_emporter : false,
      Continental: false,
      Végétalien: false,
      Casher: false,
      Végétarien : false,
      Sans_gluten: false,
      Halal: false,
      Anglais_ou_irlandais_complet : false,
    };


    // Déclarez un objet paymentMethods
    paymentMethods = {
    visa: false,
    Paiement_digital: false,
    Paysing: false,
    Ebilling: false
    };


    // Méthode pour gérer la sélection des checkboxes
    onCheckboxChange(item: any) {
      item.selected = !item.selected;
    }

    onCheckboxChange2(item: any) {
      item.selected = !item.selected;
    }

    // Méthode pour basculer l'état des options de petit-déjeuner
    toggleBreakfastOption(option: keyof typeof this.breakfastOptions) {
    this.breakfastOptions[option] = !this.breakfastOptions[option];
  }



  form: FormGroup;
  [key: string]: any;
  // searchTerm: string = '';

  vues = [
    { id: 1, label: 'Terrasse' },
    { id: 2, label: 'Vue sur le terrain de sport' },
    { id: 3, label: 'Balcon' },
    ];

    moas = [
      { id:1, label: 'Français' },
      { id:2, label: 'Anglais' },
      { id:3, label: 'Espagnol' },
      { id:4, label: 'Italien' },
      { id:5, label: 'Portugais' },
      { id:6, label: 'deutsch' },
    ];

    paiements = [
      { id:1, label: 'Carte de crédit/débit', imgSrc: ['assets/img/eux.png', 'assets/img/eux.png', 'assets/img/eux.png'] },
      { id:2, label: 'Paiement digital', imgSrc: ['assets/img/eux.png'] },
      { id:3, label: 'Paysing', imgSrc: ['assets/img/eux.png'] },
      { id:4, label: 'Ebilling', imgSrc: ['assets/img/eux.png'] },
    ];


    // Options de menu
    menuOptions = [
    'À la carte',
    'Africain',
    'Américain',
    'Asiatique',
    'Buffet',
    'Petit déjeuner à emporter',
    'Continental',
    'Végétalien',
    'Casher',
    'Végétarien',
    'Sans gluten',
    'Halal',
    'Anglais/irlandais complet'
    ];

    searchTerm: string = '';
    filteredLists = this.lists;
    showPopup: boolean = false; // Contrôle l'affichage du pop-up
    selectedOption: string = ''; // Pour stocker la valeur sélectionnée


    constructor(private fb: FormBuilder) {
      // Initialiser le FormGroup
      this.form = this.fb.group({});
      // Ajouter des contrôles pour chaque tableau
      this.initializeControls(this.vues, 'vue');
      this.initializeControls(this.moas, 'moa');
      this.initializeControls(this.languageItems, 'languageItem');
      this.initializeControls(this.lists, 'list');
      //Barre de recherche
      this.lists.forEach(list => {
        this.form.addControl('list' + list.id, this.fb.control(false));
      });
      this.initializeControls(this.paiements, 'paiement');
      // Ajoutez d'autres initialisations ici...

      // Initialiser les contrôles pour les options de stationnement
      this.form.addControl('parkingAccess', this.fb.control(''));
      this.form.addControl('breakfast', this.fb.control(''));
      this.form.addControl('breakfastIncluded', this.fb.control(''));
      this.form.addControl('parkingCost', this.fb.control(''));
      this.form.addControl('parkingDuration', this.fb.control(''));
      this.form.addControl('reservationNeeded', this.fb.control(''));
      this.form.addControl('parkingLocation', this.fb.control(''));
      this.form.addControl('parkingType', this.fb.control(''));
      this.form.addControl('parkingValide', this.fb.control(''));

      // Initialiser les contrôles pour la politique de l'établissement
      this.form.addControl('cancellationPolicy', this.fb.control('')); // Politique d'annulation
      this.form.addControl('cancellationCondition', this.fb.control('')); // Condition de remboursement
      this.form.addControl('arrivalStart', this.fb.control('')); // Heure d'arrivée début
      this.form.addControl('arrivalEnd', this.fb.control('')); // Heure d'arrivée fin
      this.form.addControl('departureStart', this.fb.control('')); // Heure de départ début
      this.form.addControl('departureEnd', this.fb.control('')); // Heure de départ fin
      this.form.addControl('acceptChildren', this.fb.control('')); // Acceptation des enfants
      this.form.addControl('acceptPets', this.fb.control('')); // Acceptation des animaux

      // Initialiser le FormArray pour les options de menu
      this.form.addControl('selectedMenuOptions', this.fb.array([]));
    }

    onSearchChange(event: Event): void {
      const input = event.target as HTMLInputElement; // Type assertion
      this.searchTerm = input.value.toLowerCase();
      this.filteredLists = this.lists.filter(list =>
        list.label.toLowerCase().includes(this.searchTerm)
      );
    }


    onCheckboxChange3(event: Event): void {
      this.showPopup = true; // Afficher le pop-up lorsque l'état change
    }

    onRadioChange(event: Event): void {
      const input = event.target as HTMLInputElement;
      this.selectedOption = input.value; // Stocke la valeur sélectionnée
      this.showPopup = true; // Afficher le pop-up lorsque l'état change
    }

    submitForm(): void {
      // Logique pour soumettre le formulaire
      console.log('Form submitted with selected option:', this.selectedOption);
      this.showPopup = false; // Masquer le pop-up après soumission
    }

    initializeControls(items: any[], prefix: string) {
      items.forEach(item => {
        this.form.addControl(`${prefix}${item.id}`, this.fb.control(false));
      });
    }

      // Méthode pour filtrer les listes en fonction du terme de recherche
    // get filteredLists() {
    //     return this.lists.filter(list =>
    //       list.label.toLowerCase().includes(this.searchTerm.toLowerCase())
    //     );
    // }


  // Méthode pour obtenir le FormArray
  get selectedMenuOptions(): FormArray {
    return this.form.get('selectedMenuOptions') as FormArray;
  }


  // Méthode pour basculer la sélection d'une option
  toggleOption(option: string) {
    const index = this.selectedMenuOptions.controls.findIndex(control => control.value === option);

    if (index === -1) {
      this.selectedMenuOptions.push(this.fb.control(option)); // Ajouter l'option si elle n'est pas déjà sélectionnée
    } else {
      this.selectedMenuOptions.removeAt(index); // Retirer l'option si elle est déjà sélectionnée
    }
  }

  // Méthode pour vérifier si une option est sélectionnée
  isSelected(option: string): boolean {
    return this.selectedMenuOptions.controls.some(control => control.value === option);
  }




    getCheckedItems(prefix: string) {
      return this[prefix + 's'].filter((item: { id: any; }) => this.form.get(`${prefix}${item.id}`)?.value);
    }


    onSubmit() {
      console.log(this.form.value); // Affiche les valeurs du formulaire dans la console
    }


}

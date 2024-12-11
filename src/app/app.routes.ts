import { RouterModule, Routes } from '@angular/router';
import { Acceuil1Component } from './acceuil1/acceuil1.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { PageErrorComponent } from './core/components/page-error/page-error.component';
import { AuthLayoutComponent } from './core/components/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/components/layouts/main-layout/main-layout.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/components/home/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClientLayoutComponent } from './core/components/layouts/client-layout/client-layout.component';
import { Espace1Component } from './hotels/espace1/espace1.component';
import { ListeEtablissementsComponent } from './hotels/liste-etablissements/liste-etablissements.component';
import { ChoixEtablissementComponent } from './etablissements/choix-etablissement/choix-etablissement.component';
import { AjoutEtablissementComponent } from './core/components/layouts/ajout-etablissement/ajout-etablissement.component';
import { ProgressionComponent } from './core/components/progression/progression.component';
import { Progression2Component } from './core/components/progression2/progression2.component';
import { Progression3Component } from './core/components/progression3/progression3.component';
import { Progression4Component } from './core/components/progression4/progression4.component';
import { LoadingComponent } from './hotels/loading/loading.component';
import { LayoutTourismComponent } from './core/components/layouts/layout-tourism/layout-tourism.component';
import { TourimsProgression1Component } from './tourism/tourims-progression1/tourims-progression1.component';
import { TourimsProgression2Component } from './tourism/tourims-progression2/tourims-progression2.component';
import { TourimsProgression3Component } from './tourism/tourims-progression3/tourims-progression3.component';
import { NomUtilisateurComponent } from './ADMIN_CLIENT/components/nom-utilisateur/nom-utilisateur.component';
import { MotDePasseComponent } from './ADMIN_CLIENT/components/mot-de-passe/mot-de-passe.component';
import { ProblemeConnexionComponent } from './ADMIN_CLIENT/components/probleme-connexion/probleme-connexion.component';
import { PasseOublieComponent } from './ADMIN_CLIENT/components/passe-oublie/passe-oublie.component';
import { CreerCompteComponent } from './ADMIN_CLIENT/components/creer-compte/creer-compte.component';
import { InfosUtilisateurComponent } from './ADMIN_CLIENT/components/infos-utilisateur/infos-utilisateur.component';
import { CreerPasseComponent } from './ADMIN_CLIENT/components/creer-passe/creer-passe.component';
import { ContacterEquipeComponent } from './ADMIN_CLIENT/components/contacter-equipe/contacter-equipe.component';
import { InterfaceLayoutComponent } from './ADMIN_CLIENT/interfaces/interface-layout/interface-layout.component';
import { AmourComponent } from './ADMIN_CLIENT/interfaces/components/analyse/amour/amour.component';
import { ClaudelComponent } from './ADMIN_CLIENT/interfaces/components/analyse/claudel/claudel.component';
import { FransdaComponent } from './ADMIN_CLIENT/interfaces/components/analyse/fransda/fransda.component';
import { InelComponent } from './ADMIN_CLIENT/interfaces/components/analyse/inel/inel.component';
import { ConfirmeIdentiteComponent } from './ADMIN_CLIENT/components/confirme-identite/confirme-identite.component';
import { SelectionnePhoneComponent } from './ADMIN_CLIENT/components/selectionne-phone/selectionne-phone.component';
import { Authentification2facteursComponent } from './ADMIN_CLIENT/components/authentification2facteurs/authentification2facteurs.component';
import { ChangerPasseComponent } from './ADMIN_CLIENT/components/changer-passe/changer-passe.component';
import { ProblemeVerificationComponent } from './ADMIN_CLIENT/components/probleme-verification/probleme-verification.component';
import { ServiceClientCodeComponent } from './ADMIN_CLIENT/components/service-client-code/service-client-code.component';
import { ServiceClientComponent } from './ADMIN_CLIENT/components/service-client/service-client.component';
import { InterfaceLayout2Component } from './ADMIN_PROPRIETAIRE/layout/interface-layout2/interface-layout2.component';

export const routes: Routes =  [
    {
      path: '',
      component: MainLayoutComponent,
      children: [
        { path: '', component: Acceuil1Component }, // Route par défaut
        { path:'home', component:HomeComponent}
        // Ajoutez d'autres routes nécessitant le header1 et footer ici
      ]
    },


    {
      path: '',
      component: AuthLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent},
        { path: 'choix-etablissement', component: ChoixEtablissementComponent},
        // Ajoutez d'autres routes nécessitant pas le header et footer ici
      ]
    },

        // Côté Hotel
    {
      path: '',
      component: ClientLayoutComponent,
      children: [
        { path: 'espace1', component: Espace1Component },
        { path: 'list', component: ListeEtablissementsComponent },

        // Ajoutez d'autres routes nécessitant le header2 et footer ici
      ]
    },
    {
      path: '',
      component: AjoutEtablissementComponent,
      children: [
        { path: 'ajout-hotel', component:ProgressionComponent},
        { path: 'info-hotel', component: Progression2Component},
        { path: 'enregistrement-hotel', component: Progression3Component},
        { path: 'finalisation', component: Progression4Component},
        // Ajoutez d'autres routes nécessitant le header3 et footer ici
      ]
    },


    //Côté Tourisme

    {
      path: '',
      component: LayoutTourismComponent,
      children:[
        { path: 'ajout-tourism', component:TourimsProgression1Component},
        { path: 'photo-tourism', component:TourimsProgression2Component},
        { path: 'complement-tourism', component:TourimsProgression3Component},
      ]
    },


      //ADMIN_CLIENT

      // 1 Auth
      {
        path:'',
        component:AuthLayoutComponent,
        children:[
          {path:'connectez-vous', component:NomUtilisateurComponent},
          {path:'mot-de-passe', component:MotDePasseComponent},
          {path:'probleme-connexion', component:ProblemeConnexionComponent},
          {path:'passe-oublier', component:PasseOublieComponent},
          {path:'creer-compte', component:CreerCompteComponent},
          {path:'infos-utilisateur', component:InfosUtilisateurComponent},
          {path:'creer-passe', component:CreerPasseComponent},
          {path:'contacter-equipe', component:ContacterEquipeComponent},
          {path:'confirme-identite', component:ConfirmeIdentiteComponent},
          {path:'selectionne-phone', component:SelectionnePhoneComponent},
          {path:'authentification2facteurs', component:Authentification2facteursComponent},
          {path:'changer-passe', component:ChangerPasseComponent},
          {path:'probleme-verification', component:ProblemeVerificationComponent},
          {path:'service-client-code', component:ServiceClientCodeComponent},
          {path:'service-client', component:ServiceClientComponent},
        ]
      },


      // 2 Interface
      {
        path:'interface',
        component:InterfaceLayoutComponent,
        children:[
            { path: 'amour', component: AmourComponent },
            { path: 'claudel', component: ClaudelComponent },
            { path: 'nombre-reservation', component: FransdaComponent },
            { path: 'inel', component: InelComponent },
        ]
      },

      {
        path:'pro',
        component:InterfaceLayout2Component
      },

    { path:'loading', component: LoadingComponent},
    { path: '**', component: PageErrorComponent } // Redirige pour les routes inconnues
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

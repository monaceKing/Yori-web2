import { AfterViewInit, Component, ElementRef, HostListener, inject, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Credentials, LoginService } from '../../core/services/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-login',
	standalone: true,
	imports: [ReactiveFormsModule, MatInputModule, MatButtonModule,CommonModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css'
})



export class  LoginComponent implements AfterViewInit{

  isLargeScreen: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: null) {
    this.isLargeScreen = window.innerWidth > 768; // Ajustez la taille selon vos besoins
  }

  ngOnInit() {
    this.onResize(null); // Vérifie la taille initiale de l'écran
  }

	private router = inject(Router);
	private formBuilder = inject(FormBuilder);
	private loginService = inject(LoginService);
	private loginSubscription: Subscription | null = null;

	isLoginFormVisible = true;
	loginFormGroup: FormGroup;
	signupFormGroup: FormGroup;

	invalidCredentials = false;

	constructor(private fb: FormBuilder) {
	  this.loginFormGroup = this.fb.group({
		email: ['', [Validators.required, Validators.email]],
		password: ['', [Validators.required]]
	  });

	  this.signupFormGroup = this.fb.group({
		lastname: ['', [Validators.required]],
		// Autres contrôles de formulaire pour le signup
	  });
	}

	showLoginForm() {
	  this.isLoginFormVisible = true;
	}

	showSignupForm() {
	  this.isLoginFormVisible = false;
	}



	// login(event: Event) {
	// 	event.preventDefault();
	//   if (this.loginFormGroup.valid) {
	// 	console.log('Login method called');
	// 	console.log('Login data:', this.loginFormGroup.value);
	// 	this.loginSubscription = this.loginService.login(this.loginFormGroup.value as Credentials).subscribe({
	// 		next: (result: User | null | undefined) => {
	// 		this.navigateHome();
	// 		},
	// 		error: (error) => {
	// 			console.log("Problème avec le serveur");
	// 			this.invalidCredentials = true;
	// 		//   this.invalidCredentials = true;
	// 		   // Affiche une erreur si les identifiants sont incorrects
	// 		}
	// 	  });
	//   } else {
	// 	console.log('Login form is invalid');
	//   }
	// }

  login(event: Event){
    this.navigateHome();
  }

	navigateHome() {
		this.router.navigate(['home']);
	  }

	signup() {
	  if (this.signupFormGroup.valid) {
		console.log('Signup data:', this.signupFormGroup.value);
		// Implémenter la logique de signup
	  } else {
		console.log('Signup form is invalid');
	  }
	}



	//Style pour le Formulaire
	@ViewChild('loginText') loginText!: ElementRef;
	@ViewChild('loginForm') loginForm!: ElementRef;
	@ViewChild('loginBtn') loginBtn!: ElementRef;
	@ViewChild('signupBtn') signupBtn!: ElementRef;

	ngAfterViewInit() {
	  // Ajoutez des événements aux boutons
		this.signupBtn.nativeElement.onclick = () => {
		this.loginForm.nativeElement.style.marginLeft = '-50%';
		this.loginText.nativeElement.style.marginLeft = '-50%';
	};

		this.loginBtn.nativeElement.onclick = () => {
		this.loginForm.nativeElement.style.marginLeft = '0%';
		this.loginText.nativeElement.style.marginLeft = '0%';
		};
	}

	onSignupLinkClick(event: Event) {
	  event.preventDefault(); // Empêche la navigation par défaut
	  this.signupBtn.nativeElement.click(); // Simule le clic sur le bouton d'inscription
	}
	}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomUtilisateurComponent } from './nom-utilisateur.component';

describe('NomUtilisateurComponent', () => {
  let component: NomUtilisateurComponent;
  let fixture: ComponentFixture<NomUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomUtilisateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Authentification2facteursComponent } from './creer-passe.component';

describe('Authentification2facteursComponent', () => {
  let component: Authentification2facteursComponent;
  let fixture: ComponentFixture<Authentification2facteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Authentification2facteursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Authentification2facteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

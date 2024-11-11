import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEtablissementComponent } from './type-etablissement.component';

describe('TypeEtablissementComponent', () => {
  let component: TypeEtablissementComponent;
  let fixture: ComponentFixture<TypeEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

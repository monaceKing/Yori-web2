import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesPropritairesComponent } from './reservation.component';

describe('ComptesPropritairesComponent', () => {
  let component: ComptesPropritairesComponent;
  let fixture: ComponentFixture<ComptesPropritairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComptesPropritairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptesPropritairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

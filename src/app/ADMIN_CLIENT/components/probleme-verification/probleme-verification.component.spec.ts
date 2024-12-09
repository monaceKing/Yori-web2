import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeVerificationComponent } from './probleme-connexion.component';

describe('ProblemeVerificationComponent', () => {
  let component: ProblemeVerificationComponent;
  let fixture: ComponentFixture<ProblemeVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemeVerificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemeVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

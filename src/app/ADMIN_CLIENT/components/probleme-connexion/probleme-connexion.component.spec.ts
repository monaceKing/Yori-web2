import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemeConnexionComponent } from './probleme-connexion.component';

describe('ProblemeConnexionComponent', () => {
  let component: ProblemeConnexionComponent;
  let fixture: ComponentFixture<ProblemeConnexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemeConnexionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemeConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementLayoutComponent } from './etablissement-layout.component';

describe('EtablissementLayoutComponent', () => {
  let component: EtablissementLayoutComponent;
  let fixture: ComponentFixture<EtablissementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtablissementLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

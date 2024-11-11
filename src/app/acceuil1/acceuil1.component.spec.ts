import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acceuil1Component } from './acceuil1.component';

describe('Acceuil1Component', () => {
  let component: Acceuil1Component;
  let fixture: ComponentFixture<Acceuil1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acceuil1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acceuil1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

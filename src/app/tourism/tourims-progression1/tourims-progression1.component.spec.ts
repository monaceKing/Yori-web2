import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourimsProgression1Component } from './tourims-progression1.component';

describe('TourimsProgression1Component', () => {
  let component: TourimsProgression1Component;
  let fixture: ComponentFixture<TourimsProgression1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourimsProgression1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourimsProgression1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

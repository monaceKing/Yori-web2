import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourimsProgression3Component } from './tourims-progression3.component';

describe('TourimsProgression3Component', () => {
  let component: TourimsProgression3Component;
  let fixture: ComponentFixture<TourimsProgression3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourimsProgression3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourimsProgression3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

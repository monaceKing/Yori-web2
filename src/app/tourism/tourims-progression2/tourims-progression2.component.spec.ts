import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourimsProgression2Component } from './tourims-progression2.component';

describe('TourimsProgression2Component', () => {
  let component: TourimsProgression2Component;
  let fixture: ComponentFixture<TourimsProgression2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourimsProgression2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourimsProgression2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

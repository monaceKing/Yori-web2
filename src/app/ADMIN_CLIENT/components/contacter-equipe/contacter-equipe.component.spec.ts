import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterEquipeComponent } from './contacter-equipe.component';

describe('ContacterEquipeComponent', () => {
  let component: ContacterEquipeComponent;
  let fixture: ComponentFixture<ContacterEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContacterEquipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContacterEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

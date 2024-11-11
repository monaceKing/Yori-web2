import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerPasseComponent } from './creer-passe.component';

describe('CreerPasseComponent', () => {
  let component: CreerPasseComponent;
  let fixture: ComponentFixture<CreerPasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerPasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

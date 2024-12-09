import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerPasseComponent } from './creer-passe.component';

describe('ChangerPasseComponent', () => {
  let component: ChangerPasseComponent;
  let fixture: ComponentFixture<ChangerPasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangerPasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerPasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

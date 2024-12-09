import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmeIdentiteComponent } from './confirme-identite.component';

describe('ConfirmeIdentiteComponent', () => {
  let component: ConfirmeIdentiteComponent;
  let fixture: ComponentFixture<ConfirmeIdentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmeIdentiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmeIdentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

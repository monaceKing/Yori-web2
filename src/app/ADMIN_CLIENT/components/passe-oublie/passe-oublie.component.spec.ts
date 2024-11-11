import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseOublieComponent } from './passe-oublie.component';

describe('PasseOublieComponent', () => {
  let component: PasseOublieComponent;
  let fixture: ComponentFixture<PasseOublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasseOublieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasseOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

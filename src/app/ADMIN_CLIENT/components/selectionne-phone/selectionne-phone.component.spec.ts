import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionnePhoneComponent } from './creer-passe.component';

describe('SelectionnePhoneComponent', () => {
  let component: SelectionnePhoneComponent;
  let fixture: ComponentFixture<SelectionnePhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionnePhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionnePhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

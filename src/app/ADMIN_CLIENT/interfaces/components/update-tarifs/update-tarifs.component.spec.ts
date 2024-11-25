import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTarifsComponent } from './update-tarifs.component';

describe('UpdateTarifsComponent', () => {
  let component: UpdateTarifsComponent;
  let fixture: ComponentFixture<UpdateTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTarifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

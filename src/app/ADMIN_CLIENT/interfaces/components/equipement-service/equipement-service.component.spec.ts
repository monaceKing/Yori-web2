import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementServiceComponent } from './equipement-service.component';

describe('EquipementServiceComponent', () => {
  let component: EquipementServiceComponent;
  let fixture: ComponentFixture<EquipementServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipementServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipementServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

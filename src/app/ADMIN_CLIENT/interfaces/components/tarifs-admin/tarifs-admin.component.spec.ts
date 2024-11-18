import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifsAdminComponent } from './tarifs-admin.component';

describe('TarifsAdminComponent', () => {
  let component: TarifsAdminComponent;
  let fixture: ComponentFixture<TarifsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

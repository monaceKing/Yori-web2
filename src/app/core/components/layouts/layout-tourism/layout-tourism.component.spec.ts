import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTourismComponent } from './layout-tourism.component';

describe('LayoutTourismComponent', () => {
  let component: LayoutTourismComponent;
  let fixture: ComponentFixture<LayoutTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutTourismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

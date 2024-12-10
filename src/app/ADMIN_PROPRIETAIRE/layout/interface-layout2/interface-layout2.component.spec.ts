import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceLayout2Component } from './interface-layout2.component';

describe('InterfaceLayout2Component', () => {
  let component: InterfaceLayout2Component;
  let fixture: ComponentFixture<InterfaceLayout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceLayout2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceLayout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

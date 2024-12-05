import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetfSidebarComponent } from './letf-sidebar.component';

describe('LetfSidebarComponent', () => {
  let component: LetfSidebarComponent;
  let fixture: ComponentFixture<LetfSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetfSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetfSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

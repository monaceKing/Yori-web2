import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceClientCodeComponent } from './creer-passe.component';

describe('ServiceClientCodeComponent', () => {
  let component: ServiceClientCodeComponent;
  let fixture: ComponentFixture<ServiceClientCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceClientCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceClientCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoEtablisssementComponent } from './photo-etablisssement.component';

describe('PhotoEtablisssementComponent', () => {
  let component: PhotoEtablisssementComponent;
  let fixture: ComponentFixture<PhotoEtablisssementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoEtablisssementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoEtablisssementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

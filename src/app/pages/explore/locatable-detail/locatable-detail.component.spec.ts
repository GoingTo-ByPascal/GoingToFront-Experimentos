import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatableDetailComponent } from './locatable-detail.component';

describe('LocatableDetailComponent', () => {
  let component: LocatableDetailComponent;
  let fixture: ComponentFixture<LocatableDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocatableDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

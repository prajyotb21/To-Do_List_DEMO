import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClgDetailComponent } from './clg-detail.component';

describe('ClgDetailComponent', () => {
  let component: ClgDetailComponent;
  let fixture: ComponentFixture<ClgDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClgDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

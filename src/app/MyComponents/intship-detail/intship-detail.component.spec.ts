import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntshipDetailComponent } from './intship-detail.component';

describe('IntshipDetailComponent', () => {
  let component: IntshipDetailComponent;
  let fixture: ComponentFixture<IntshipDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntshipDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

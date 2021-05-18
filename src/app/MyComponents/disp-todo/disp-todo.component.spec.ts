import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispTodoComponent } from './disp-todo.component';

describe('DispTodoComponent', () => {
  let component: DispTodoComponent;
  let fixture: ComponentFixture<DispTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

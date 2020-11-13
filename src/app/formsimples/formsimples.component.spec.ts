import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsimplesComponent } from './formsimples.component';

describe('FormsimplesComponent', () => {
  let component: FormsimplesComponent;
  let fixture: ComponentFixture<FormsimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

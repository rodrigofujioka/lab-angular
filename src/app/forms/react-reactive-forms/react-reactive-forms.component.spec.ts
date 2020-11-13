import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactReactiveFormsComponent } from './react-reactive-forms.component';

describe('ReactReactiveFormsComponent', () => {
  let component: ReactReactiveFormsComponent;
  let fixture: ComponentFixture<ReactReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

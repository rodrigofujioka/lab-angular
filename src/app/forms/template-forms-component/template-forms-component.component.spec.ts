import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormsComponentComponent } from './template-forms-component.component';

describe('TemplateFormsComponentComponent', () => {
  let component: TemplateFormsComponentComponent;
  let fixture: ComponentFixture<TemplateFormsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

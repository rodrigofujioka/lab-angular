import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreativoListaComponent } from './formreativo-lista.component';

describe('FormreativoListaComponent', () => {
  let component: FormreativoListaComponent;
  let fixture: ComponentFixture<FormreativoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormreativoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreativoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

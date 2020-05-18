import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeImagemComponent } from './exibe-imagem.component';

describe('ExibeImagemComponent', () => {
  let component: ExibeImagemComponent;
  let fixture: ComponentFixture<ExibeImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibeImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibeImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

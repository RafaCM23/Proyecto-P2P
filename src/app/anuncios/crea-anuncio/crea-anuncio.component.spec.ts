import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaAnuncioComponent } from './crea-anuncio.component';

describe('CreaAnuncioComponent', () => {
  let component: CreaAnuncioComponent;
  let fixture: ComponentFixture<CreaAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

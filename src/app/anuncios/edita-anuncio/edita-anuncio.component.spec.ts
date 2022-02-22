import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaAnuncioComponent } from './edita-anuncio.component';

describe('EditaAnuncioComponent', () => {
  let component: EditaAnuncioComponent;
  let fixture: ComponentFixture<EditaAnuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaAnuncioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

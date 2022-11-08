import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaProdutoComponent } from './adiciona-produto.component';

describe('AdicionaProdutoComponent', () => {
  let component: AdicionaProdutoComponent;
  let fixture: ComponentFixture<AdicionaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionaProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

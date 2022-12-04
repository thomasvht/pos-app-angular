import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbeheerContainerComponent } from './productbeheer-container.component';

describe('ProductbeheerContainerComponent', () => {
  let component: ProductbeheerContainerComponent;
  let fixture: ComponentFixture<ProductbeheerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbeheerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbeheerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbeheerContainerComponent } from './productbeheer-container.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductbeheerContainerComponent', () => {
  let component: ProductbeheerContainerComponent;
  let fixture: ComponentFixture<ProductbeheerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbeheerContainerComponent ],
      imports: [MatDialogModule],
      providers: [MatDialog],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductbeheerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverviewComponent } from './product-overview.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProductOverviewComponent', () => {
  let component: ProductOverviewComponent;
  let fixture: ComponentFixture<ProductOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOverviewComponent ],
      imports: [MatDialogModule],
      providers: [MatDialog],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
});

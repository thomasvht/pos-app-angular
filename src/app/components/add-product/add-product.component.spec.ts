import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ],
      imports: [MatDialogModule],
      providers: [{provide: MAT_DIALOG_DATA, useValue:  {then: () => {}}}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
});

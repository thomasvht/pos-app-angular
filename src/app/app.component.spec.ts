import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseService } from './shared/firebase.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [MatDialogModule],
      providers: [MatDialog, FirebaseService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });


  // it('Should open the dialog', () => {
  //   const dialogOpenSpy = jest.spyOn(dialog, 'open');
  //   expect(dialogOpenSpy).toHaveBeenCalled();
  // });

  // it('test_dialog_closes', () => {
  //   const dialogCloseSpy = jest
  //     .spyOn(dialogRef, 'afterClosed')
  //     .mockReturnValue(of({ value: 'test' }));
  //   component.newProduct();
  //   expect(dialogCloseSpy).toHaveBeenCalled();
  // });

  // it('test_new_product_added', () => {
  //   const addProductSpy = jest
  //     .spyOn(firebaseService, 'addProduct')
  //     .mockImplementation(() => Promise.resolve());
  //   const dialogRefSpy = jest
  //     .spyOn(dialogRef, 'afterClosed')
  //     .mockReturnValue(
  //       of({
  //         value: { description: 'test', price: 1, volume: 1, volumeUnit: 'kg' },
  //       })
  //     );
  //   component.newProduct();
  //   expect(addProductSpy).toHaveBeenCalledWith({
  //     description: 'test',
  //     price: 1,
  //     volume: 1,
  //     volumeUnit: 'kg',
  //   });
  // });

  // it('test_dialog_does_not_open', () => {
  //   const dialogOpenSpy = jest.spyOn(dialog, 'open').mockReturnValue({
  //     afterClosed: () => of({ value: null }),
  //   } as MatDialogRef<AddProductComponent>);
  //   component.newProduct();
  //   expect(dialogOpenSpy).not.toHaveBeenCalled();
  // });

  // it('test_form_submission_fails', () => {
  //   const addProductSpy = jest
  //     .spyOn(firebaseService, 'addProduct')
  //     .mockImplementation(() => Promise.resolve());
  //   const dialogRefSpy = jest
  //     .spyOn(dialogRef, 'afterClosed')
  //     .mockReturnValue(
  //       of({
  //         value: { description: '', price: null, volume: null, volumeUnit: '' },
  //       })
  //     );
  //   component.newProduct();
  //   expect(addProductSpy).not.toHaveBeenCalled();
  // });

  // it('test_firebase_service_called', () => {
  //   const addProductSpy = jest
  //     .spyOn(firebaseService, 'addProduct')
  //     .mockImplementation(() => Promise.resolve());
  //   const dialogRefSpy = jest
  //     .spyOn(dialogRef, 'afterClosed')
  //     .mockReturnValue(
  //       of({
  //         value: { description: 'test', price: 1, volume: 1, volumeUnit: 'kg' },
  //       })
  //     );
  //   component.newProduct();
  //   expect(addProductSpy).toHaveBeenCalledWith({
  //     description: 'test',
  //     price: 1,
  //     volume: 1,
  //     volumeUnit: 'kg',
  //   });
  //   expect(addProductSpy).not.toHaveBeenCalledWith({
  //     description: '',
  //     price: null,
  //     volume: null,
  //     volumeUnit: '',
  //   });
  // });
});

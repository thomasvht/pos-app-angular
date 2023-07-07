import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  // Tests that the 'newProduct' function opens the 'AddProductComponent' dialog
  it('Should open a dialog when pressing the button for a new product.', () => {
    const dialogOpenSpy = jest.spyOn(TestBed.inject(MatDialog), 'open');
    const appComponent = fixture.componentInstance;
    appComponent.newProduct();
    expect(dialogOpenSpy).toHaveBeenCalledWith(AddProductComponent, {
      height: '540px',
      width: '800px',
    });
  });
});

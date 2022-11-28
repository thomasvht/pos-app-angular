import { FormGroup } from '@angular/forms';
import { FirebaseService } from './shared/firebase.service';
import { AddProductComponent } from './components/add-product/add-product.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dialog: MatDialog, private firebaseService: FirebaseService) {
  }

  public newProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '540px',
      width: '800px',
    });

    dialogRef
    .afterClosed()
    .subscribe((result: FormGroup) => {
      if(result.value) {
        this.firebaseService.addProduct(result.value);
      }
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  form: FormGroup = this.formBuilder.group({
    description: undefined,
    price: undefined,
    volume: undefined,
    volumeUnit: undefined
  });

  constructor(private formBuilder: FormBuilder) { }
}

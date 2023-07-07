import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaContainerComponent } from './kassa-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirebaseService } from 'src/app/shared/firebase.service';

describe('KassaContainerComponent', () => {
  let component: KassaContainerComponent;
  let fixture: ComponentFixture<KassaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaContainerComponent ],
      providers: [FirebaseService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KassaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create the component', () => {
    expect(component).toBeTruthy();
  });
});

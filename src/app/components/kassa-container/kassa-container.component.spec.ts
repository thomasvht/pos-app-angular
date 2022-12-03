import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KassaContainerComponent } from './kassa-container.component';

describe('KassaContainerComponent', () => {
  let component: KassaContainerComponent;
  let fixture: ComponentFixture<KassaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KassaContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KassaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

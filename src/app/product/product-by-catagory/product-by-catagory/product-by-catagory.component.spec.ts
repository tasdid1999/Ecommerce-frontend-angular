import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCatagoryComponent } from './product-by-catagory.component';

describe('ProductByCatagoryComponent', () => {
  let component: ProductByCatagoryComponent;
  let fixture: ComponentFixture<ProductByCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductByCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

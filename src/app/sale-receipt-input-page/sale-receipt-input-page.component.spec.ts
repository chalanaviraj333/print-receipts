import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReceiptInputPageComponent } from './sale-receipt-input-page.component';

describe('SaleReceiptInputPageComponent', () => {
  let component: SaleReceiptInputPageComponent;
  let fixture: ComponentFixture<SaleReceiptInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleReceiptInputPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleReceiptInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

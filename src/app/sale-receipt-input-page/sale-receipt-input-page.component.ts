import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User {
  name: string;
}


@Component({
  selector: 'app-sale-receipt-input-page',
  templateUrl: './sale-receipt-input-page.component.html',
  styleUrls: ['./sale-receipt-input-page.component.css']
})
export class SaleReceiptInputPageComponent implements OnInit {

  public picker = new Date;

  constructor() { }

  ngOnInit() {

  }

  printThisPage() {
    window.print();
  }

  OnClickSave(form: NgForm) {
    console.log(form.value);
  }

}

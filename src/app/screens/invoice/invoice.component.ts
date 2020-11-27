import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../../_services/invoice.service';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }
  invoices = [];
  ngOnInit(): void {
    this.getListInvoice();
  }

  getListInvoice(){
    this.invoiceService.getInvoiceList().subscribe(data => {
      this.invoices = data;
    })
  }

}

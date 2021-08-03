import { Component, OnInit } from '@angular/core';

interface MonthInvoice {
  date: string;
  month: string;
  invoice: number;
  rate?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  barData: MonthInvoice[] = [];
  constructor() {

  }

  ngOnInit(): void {
    this.barData = [
      {
        "date":"2021-02-28T19:00:00.000Z",
        "month":"март 2021",
        "invoice":2770330.45
     },
     {
        "date":"2021-03-31T19:00:00.000Z",
        "month":"апрель 2021",
        "invoice":2538605.94
     },
     {
        "date":"2021-04-30T19:00:00.000Z",
        "month":"май 2021",
        "invoice":723000
     }
    ];

    this.barData.forEach(item => {
      item.rate = item.invoice*100/3000000;
    })
  }
}

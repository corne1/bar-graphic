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

    // const maxInvoice = this.barData.sort((a,b) => b.invoice - a.invoice)[0].invoice;
    const maxInvoice: number = this.getMaxInvoice(this.barData);
    console.log(maxInvoice);
    this.barData.forEach(item => {
      item.rate = item.invoice*100/maxInvoice;
    })
  }

  // ---- sort Array with SHELL SORT and return max invoice
  private getMaxInvoice(arr: MonthInvoice[]): number {
    const n = arr.length;
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
      for (let i = gap; i < n; i++) {
        const element = arr[i];
        let j;
        for (j=i; j>=gap && arr[j-gap]>element; j-=gap) {
          arr[j]=arr[j-gap];
        }
        arr[j] = element;
      }
    }

    const digitsCount = String(arr[0].invoice.toFixed()).trim().length;
    const realDegreeOfNumber = Math.pow(10, digitsCount);

    const numberToCeil = arr[0].invoice/(realDegreeOfNumber/10);
    const maxInvoice = Math.ceil(numberToCeil)*realDegreeOfNumber/10;
    console.log(numberToCeil);
    return maxInvoice;
  }
}

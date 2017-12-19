import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exchanges: any[] = this.getExchanges();
  cryptos: any[] = this.getCryptos();
  currency: string = "USD";

  constructor() { }

  ngOnInit() {
  }

  getExchanges() {
    return [
      { name: 'Bitfinex' },
      { name: 'Bittrex' },
      { name: 'Binance' },
    ];
  }
  getCryptos() {
    return [
      { name: 'Bitcoin' },      
      { name: 'Ethereum' },      
      { name: 'Litecoin' }
    ];
  }

}

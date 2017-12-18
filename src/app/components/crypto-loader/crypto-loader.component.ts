import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crypto-loader',
  templateUrl: './crypto-loader.component.html',
  styleUrls: ['./crypto-loader.component.css']
})
export class CryptoLoaderComponent implements OnInit {
  @Input() exchange: any;
  @Input() crypto: any;
  @Input() currency: any;
  
  constructor() { }

  ngOnInit() {
  }

}

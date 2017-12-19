import { Component, OnInit, Input } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'crypto-loader',
  templateUrl: './crypto-loader.component.html',
  styleUrls: ['./crypto-loader.component.css']
})
export class CryptoLoaderComponent implements OnInit {
  @Input() exchange: any;
  @Input() crypto: any;
  @Input() currency: any;

  latestValue: number;
  
  constructor() { }

  ngOnInit() {
    this.latestValue = 0.0001;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Crypto';
  coins = [
    {
      coinName: 'Bitcoin',
      coinImg: '../assets/Bitcoin.png',
      coinRate: '26,752.62',
      someInfo:
        "Bitcoin (BTC) is the world's first cryptocurrency built on distributed ledger (blockchain) technology, with a proof of work (PoW) mechanism that is not backed by any country's central bank or government.",
    },
    {
      coinName: 'Ethereum',
      coinImg: '../assets/ethereum.png',
      coinRate: '1,827.84',
      someInfo:
        'Ethereum is an open-source software platform that uses Ether (ETH) as the native digital currency and enables the creation of smart contracts and decentralised applications (DApps) without downtime, fraud, control, or interference from a third party.',
    },
    {
      coinName: 'Tether',
      coinImg: '../assets/tether.png',
      coinRate: '1',
      someInfo:
        'Tether (USDT) is a cryptocurrency pegged to the US dollar. Currently the most popular stablecoin in the market, USDT is backed 100% by actual assets in the Tether platform’s reserve account. Each unit of USDT has a monetary value of US$1. USDT provides protection from the volatility of cryptocurrencies.',
    },
    {
      coinName: 'BNB',
      coinImg: '../assets/bnb.png',
      coinRate: '305.54',
      someInfo:
        'BNB, also known as Binance Coin, is the native crypto token of the Binance cryptocurrency exchange and associated blockchains such as Binance Chain and Binance Smart Chain.',
    },
  ];
}

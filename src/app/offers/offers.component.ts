import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit {

  offers = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  loadOffers(keyword): void {
    this.offers = [
      {
        "id": "597687780",
        "name": "Very good " + keyword + ", high quality",
        "price": "49 900 zł"
      },
      {
        "id": "597687781",
        "name": "Very good " + keyword + ", best quality",
        "price": "51 900 zł"
      }
    ];
  }
}

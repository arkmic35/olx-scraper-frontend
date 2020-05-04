import {Component, OnInit} from '@angular/core';
import {OfferService} from "../offer.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.less']
})
export class OffersComponent implements OnInit {

  offers = [];

  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
  }

  loadOffers(keyword): void {
    this.offers = this.offerService.getOffers(keyword);
  }
}

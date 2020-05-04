import {Component, OnInit} from '@angular/core';
import {OfferService} from "../../service/offer.service";

@Component({
  selector: 'app-offers',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.less']
})
export class OffersListComponent implements OnInit {

  offers = [];

  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
  }

  loadOffers(keyword): void {
    this.offerService
      .getOffers(keyword)
      .subscribe(result => {
        this.offers = result.offers;
      })
  }
}

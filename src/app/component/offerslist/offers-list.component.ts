import {Component} from '@angular/core';

import {OfferService} from '../../service/offer.service';
import {ListStatus} from './list.status';

@Component({
  selector: 'app-offers',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.less']
})
export class OffersListComponent {

  status = ListStatus.NO_DATA;
  offers = [];

  constructor(private offerService: OfferService) {
  }

  public loadOffers(keyword): void {
    this.status = ListStatus.LOADING;

    this.offerService
      .getOffers(keyword)
      .subscribe(
        result => this.correctlyLoaded(result),
        error => this.loadingError(error)
      );
  }

  private correctlyLoaded(result) {
    this.offers = result.offers;
    this.status = ListStatus.LOADED;
  }

  private loadingError(result) {
    console.log(result);
    this.status = ListStatus.ERROR;
  }
}

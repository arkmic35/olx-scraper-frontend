import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';

import {OfferService} from '../../service/offer.service';
import {ListStatus} from './list.status';

@Component({
  selector: 'app-offers',
  templateUrl: './offers-list.component.html',
})
export class OffersListComponent implements OnInit, OnDestroy {
  listStatuses = ListStatus;
  status = ListStatus.NO_DATA;
  offers = [];
  isActive = false;

  constructor(private offerService: OfferService) {
  }

  ngOnInit(): void {
    this.isActive = true;
  }

  ngOnDestroy(): void {
    this.isActive = false;
  }

  public loadOffers(keyword): void {
    this.status = ListStatus.LOADING;

    this.offerService
      .getOffers(keyword)
      .pipe(takeWhile(() => this.isActive))
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

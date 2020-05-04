import {Component, ViewChild} from '@angular/core';
import {OffersListComponent} from "./component/offerslist/offers-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'OlxScraperFrontend';
  keyword = '';

  @ViewChild(OffersListComponent, {static: false}) offers;

  onClickSearch() {
    this.offers.loadOffers(this.keyword);
  }
}

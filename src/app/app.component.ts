import {Component, ViewChild} from '@angular/core';
import {OffersComponent} from "./offers/offers.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'OlxScraperFrontend';
  @ViewChild(OffersComponent, {static: false}) offers;

  onClickSearch() {
    this.offers.loadOffers();
  }
}

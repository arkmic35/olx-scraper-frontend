import {Injectable} from '@angular/core';
import {Offer} from "../model/Offer";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor() {
  }

  getOffers(keyword: string): Offer[] {
    return [
      {
        "id": "597687780",
        "name": "Very good " + keyword + " of high quality",
        "price": "49 900 zł"
      },
      {
        "id": "597687781",
        "name": "Very good " + keyword + "of best quality",
        "price": "51 900 zł"
      }
    ];
  }
}

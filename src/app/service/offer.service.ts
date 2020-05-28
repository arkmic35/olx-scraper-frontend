import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {OffersResponse} from "../model/OffersResponse";

@Injectable({providedIn: 'root'})
export class OfferService {

  constructor(private httpClient: HttpClient) {
  }

  getOffers(keyword: string): Observable<OffersResponse> {
    return this.httpClient
      .get<OffersResponse>("http://localhost:8080/offers/olx/" + keyword, {responseType: 'json'});
  }
}

import {OfferService} from './offer.service';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('OfferService', () => {
  let httpClient: HttpClient;
  let service: OfferService;
  let spy: any;

  beforeEach(() => {
    httpClient = new HttpClient(null);
    service = new OfferService(httpClient);
  });

  afterEach(() => {
    httpClient = null;
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http client', () => {
    spy = spyOn(httpClient, 'get').and.returnValue(of("OK"));

    expect(service.getOffers(null)).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });

  it('should call http client with correct arguments', () => {
    let keyword = "MacBook";
    let expectedUrl = "http://localhost:8080/offers/olx/MacBook";

    spy = spyOn(httpClient, 'get')
      .withArgs(expectedUrl, {responseType: 'json'}).and.returnValue(of("OK"));

    expect(service.getOffers(keyword)).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalled();
  });
});

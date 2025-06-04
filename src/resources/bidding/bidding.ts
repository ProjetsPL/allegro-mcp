// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OffersAPI from './offers/offers';
import { Offers } from './offers/offers';

export class Bidding extends APIResource {
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);
}

Bidding.Offers = Offers;

export declare namespace Bidding {
  export { Offers as Offers };
}

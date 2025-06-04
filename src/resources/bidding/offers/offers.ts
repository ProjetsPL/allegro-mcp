// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BidAPI from './bid';
import { Bid, BidPlaceParams, CurrentPrice, MaxPrice, MyBid, Price } from './bid';

export class Offers extends APIResource {
  bid: BidAPI.Bid = new BidAPI.Bid(this._client);
}

Offers.Bid = Bid;

export declare namespace Offers {
  export {
    Bid as Bid,
    type CurrentPrice as CurrentPrice,
    type MaxPrice as MaxPrice,
    type MyBid as MyBid,
    type Price as Price,
    type BidPlaceParams as BidPlaceParams,
  };
}

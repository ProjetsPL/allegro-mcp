// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BidAPI from './bid';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Bid extends APIResource {
  /**
   * Get current user's bid information. Read more:
   * <a href="../../news/nowe-zasoby-zloz-oferte-kupna-w-licytacji-q018m02vDT1" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-place-a-bid-in-an-auction-rjWwEj1e7sG" target="_blank">EN</a>.
   */
  retrieve(offerID: string, options?: RequestOptions): APIPromise<MyBid> {
    return this._client.get(path`/bidding/offers/${offerID}/bid`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Place a bid in an auction. Read more:
   * <a href="../../news/nowe-zasoby-zloz-oferte-kupna-w-licytacji-q018m02vDT1" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-place-a-bid-in-an-auction-rjWwEj1e7sG" target="_blank">EN</a>.
   */
  place(offerID: string, body: BidPlaceParams, options?: RequestOptions): APIPromise<MyBid> {
    return this._client.put(path`/bidding/offers/${offerID}/bid`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * The price data.
 */
export interface CurrentPrice {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

/**
 * The price data.
 */
export interface MaxPrice {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

/**
 * bid response
 */
export interface MyBid {
  /**
   * Auction details.
   */
  auction: MyBid.Auction;

  /**
   * Is this bid currently winning?
   */
  highBidder: boolean;

  /**
   * The price data.
   */
  maxAmount: MaxPrice;

  /**
   * This indicates if the minimal price of the auction has been met or is not set at
   * all. A minimal price can be set by the seller and is the minimum amount the
   * seller is willing to sell the item for. If the highest bid is not higher than
   * the minimal price when the auction ends, the listing ends and the item is not
   * sold.
   */
  minimalPriceMet?: boolean;
}

export namespace MyBid {
  /**
   * Auction details.
   */
  export interface Auction {
    /**
     * The price data.
     */
    currentPrice: BidAPI.CurrentPrice;
  }
}

/**
 * The price data.
 */
export interface Price {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

export interface BidPlaceParams {
  /**
   * The price data.
   */
  maxAmount: MaxPrice;
}

export declare namespace Bid {
  export {
    type CurrentPrice as CurrentPrice,
    type MaxPrice as MaxPrice,
    type MyBid as MyBid,
    type Price as Price,
    type BidPlaceParams as BidPlaceParams,
  };
}

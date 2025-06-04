// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OfferClassifiedsPackagesAPI from './sale/offer-classifieds-packages';
import * as ProductOffersAPI from './sale/product-offers';
import * as SaleAPI from './sale/sale';
import * as SizeTablesAPI from './sale/size-tables';
import * as BidAPI from './bidding/offers/bid';
import * as ProductsAPI from './sale/products/products';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Pricing extends APIResource {
  /**
   * Provides information about fee and commission for an offer. This resource is
   * limited to 25 requests per second for a single user. Read more:
   * <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#kalkulator-oplat" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#fee-calculator" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.pricing.calculateFeePreview();
   * ```
   */
  calculateFeePreview(
    body: PricingCalculateFeePreviewParams,
    options?: RequestOptions,
  ): APIPromise<PricingCalculateFeePreviewResponse> {
    return this._client.post('/pricing/offer-fee-preview', {
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

  /**
   * This endpoint returns current offer quotes (listing and promo fees) cycles for
   * authenticated user and list of offers. Read more:
   * <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#data-naliczenia-kolejnej-oplaty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#check-when-a-fee-is-charged" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.pricing.getOfferQuotes();
   * ```
   */
  getOfferQuotes(
    query: PricingGetOfferQuotesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PricingGetOfferQuotesResponse> {
    return this._client.get('/pricing/offer-quotes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface PricingCalculateFeePreviewResponse {
  /**
   * An array of commissions.
   */
  commissions?: Array<PricingCalculateFeePreviewResponse.Commission>;

  /**
   * An array of quotes.
   */
  quotes?: Array<PricingCalculateFeePreviewResponse.Quote>;
}

export namespace PricingCalculateFeePreviewResponse {
  export interface Commission {
    /**
     * The price data.
     */
    fee?: BidAPI.Price;

    /**
     * Commission fee name.
     */
    name?: string;

    /**
     * Commission fee type.
     */
    type?: string;
  }

  export interface Quote {
    classifiedsPackage?: OfferClassifiedsPackagesAPI.ClassifiedPackage;

    /**
     * Duration in ISO 8601 format.
     */
    cycleDuration?: string;

    /**
     * The price data.
     */
    fee?: BidAPI.Price;

    /**
     * Quote fee name.
     */
    name?: string;

    /**
     * Quote fee type.
     */
    type?: string;
  }
}

export interface PricingGetOfferQuotesResponse {
  count?: number;

  quotes?: Array<PricingGetOfferQuotesResponse.Quote>;
}

export namespace PricingGetOfferQuotesResponse {
  export interface Quote {
    enabled?: boolean;

    fee?: Quote.Fee;

    name?: string;

    nextDate?: string;

    offer?: ProductOffersAPI.OfferID;

    type?: string;
  }

  export namespace Quote {
    export interface Fee {
      amount?: string;

      currency?: string;
    }
  }
}

export interface PricingCalculateFeePreviewParams {
  classifiedsPackages?: PricingCalculateFeePreviewParams.ClassifiedsPackages;

  /**
   * The marketplace on which the offer should be previewed. If omitted, it will
   * default to the base marketplace.
   */
  marketplaceId?: string | null;

  /**
   * Single offer data.
   */
  offer?: PricingCalculateFeePreviewParams.Offer;
}

export namespace PricingCalculateFeePreviewParams {
  export interface ClassifiedsPackages {
    basePackage?: OfferClassifiedsPackagesAPI.ClassifiedPackage;

    /**
     * An array of extra packages.
     */
    extraPackages?: Array<OfferClassifiedsPackagesAPI.ClassifiedExtraPackage>;
  }

  /**
   * Single offer data.
   */
  export interface Offer {
    id?: string;

    category?: SaleAPI.Category;

    fundraisingCampaign?: SizeTablesAPI.JustID;

    parameters?: Array<Offer.Parameter>;

    /**
     * Promo options on base marketplace.
     */
    promotion?: Offer.Promotion;

    publication?: Offer.Publication;

    /**
     * Information on the offer's selling mode.
     */
    sellingMode?: Offer.SellingMode;
  }

  export namespace Offer {
    /**
     * Offer's parameter.
     */
    export interface Parameter {
      id: string;

      /**
       * Parameter's range value
       */
      rangeValue?: ProductsAPI.ParameterRangeValue;

      values?: Array<string>;

      valuesIds?: Array<string>;
    }

    /**
     * Promo options on base marketplace.
     */
    export interface Promotion {
      departmentPage?: boolean;

      emphasized10d?: boolean;

      emphasized1d?: boolean;

      promoPackage?: boolean;
    }

    export interface Publication {
      /**
       * This field must be set to one of the following:<br/> - for auctions: 1 day, 3
       * days, 5 days, 7 days, 10 days<br/> - for buy-now offers: 3 days, 5 days, 7 days,
       * 10 days, 20 days, 30 days<br/> - for advertisements: 10 days, 20 days, 30
       * days.<br/> The value is in ISO 8601 format (example: PT24H, PT72H).
       */
      duration?: string;
    }

    /**
     * Information on the offer's selling mode.
     */
    export interface SellingMode {
      /**
       * The selling format of the offer.
       */
      format?: ProductOffersAPI.SellingModeFormat;

      /**
       * The price data.
       */
      minimalPrice?: ProductOffersAPI.MinimalPrice;

      /**
       * The price data.
       */
      netPrice?: BidAPI.Price;

      /**
       * The price data.
       */
      price?: ProductOffersAPI.BuyNowPrice;

      /**
       * The price data.
       */
      startingPrice?: ProductOffersAPI.StartingPrice;
    }
  }
}

export interface PricingGetOfferQuotesParams {
  offer?: PricingGetOfferQuotesParams.Offer;
}

export namespace PricingGetOfferQuotesParams {
  export interface Offer {
    /**
     * List of offer Ids, maximum 20 values.
     */
    id: Array<string>;
  }
}

export declare namespace Pricing {
  export {
    type PricingCalculateFeePreviewResponse as PricingCalculateFeePreviewResponse,
    type PricingGetOfferQuotesResponse as PricingGetOfferQuotesResponse,
    type PricingCalculateFeePreviewParams as PricingCalculateFeePreviewParams,
    type PricingGetOfferQuotesParams as PricingGetOfferQuotesParams,
  };
}

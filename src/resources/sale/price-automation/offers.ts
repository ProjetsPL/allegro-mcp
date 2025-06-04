// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OffersAPI from './offers';
import * as BidAPI from '../../bidding/offers/bid';
import * as RulesAPI from './rules';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * Use this resource to get automatic pricing rules for offer. This resource is
   * rate limited to 5 requests per second. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-aktualnie-przypisane-reguly-przelicznika-cen-w-ofercie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-price-automation-rules-currently-assigned-to-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.priceAutomation.offers.retrieveRules(
   *     '15521818197',
   *   );
   * ```
   */
  retrieveRules(offerID: string, options?: RequestOptions): APIPromise<OfferRetrieveRulesResponse> {
    return this._client.get(path`/sale/price-automation/offers/${offerID}/rules`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Offer Rule configuration. For "EXCHANGE_RATE" the field is not allowed. For
 * "FOLLOW_BY_ALLEGRO_MIN_PRICE", "FOLLOW_BY_MARKET_MIN_PRICE" and
 * "FOLLOW_BY_TOP_OFFER_PRICE" it is necessary for the rule to work.
 */
export interface AutomaticPricingOfferRuleConfiguration {
  /**
   * Price range. This field is optional.
   */
  priceRange?: AutomaticPricingOfferRuleConfiguration.PriceRange;
}

export namespace AutomaticPricingOfferRuleConfiguration {
  /**
   * Price range. This field is optional.
   */
  export interface PriceRange {
    /**
     * The price data.
     */
    maxPrice: BidAPI.Price;

    /**
     * The price data.
     */
    minPrice: BidAPI.Price;

    /**
     * Price range currency type.
     *
     * - `BASE_MARKETPLACE_CURRENCY` - The price must be defined in the same currency
     *   as offer base marketplace currency.
     * - `MARKETPLACE_CURRENCY` - The price must be defined in the same currency as
     *   marketplace currency. For a base marketplace this is the only accepted value.
     */
    type: 'BASE_MARKETPLACE_CURRENCY' | 'MARKETPLACE_CURRENCY';
  }
}

export interface OfferRetrieveRulesResponse {
  /**
   * List of assigned rules.
   */
  rules: Array<OfferRetrieveRulesResponse.Rule>;

  /**
   * The date the rule assignments to offer were last modified in ISO 8601 format.
   */
  updatedAt: string;
}

export namespace OfferRetrieveRulesResponse {
  export interface Rule {
    marketplace: Rule.Marketplace;

    rule: Rule.Rule;

    /**
     * The date the rule assignment to offer.marketplace was last modified in ISO 8601
     * format.
     */
    updatedAt: string;

    /**
     * Offer Rule configuration. For "EXCHANGE_RATE" the field is not allowed. For
     * "FOLLOW_BY_ALLEGRO_MIN_PRICE", "FOLLOW_BY_MARKET_MIN_PRICE" and
     * "FOLLOW_BY_TOP_OFFER_PRICE" it is necessary for the rule to work.
     */
    configuration?: OffersAPI.AutomaticPricingOfferRuleConfiguration;
  }

  export namespace Rule {
    export interface Marketplace {
      /**
       * The id of a marketplace.<br/> Available marketplaces can be determined using
       * <a href="#operation/marketplacesGET">GET /marketplaces</a>.
       */
      id: string;
    }

    export interface Rule {
      /**
       * Identifier of a automatic pricing rule.
       */
      id: string;

      /**
       * The field is deprecated and will be removed in the future. To obtain rule
       * details use the following
       * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
       * with rule.id from the response.
       */
      type: Rule.Type;
    }

    export namespace Rule {
      /**
       * The field is deprecated and will be removed in the future. To obtain rule
       * details use the following
       * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
       * with rule.id from the response.
       */
      export interface Type extends RulesAPI.AutomaticPricingRuleType {}
    }
  }
}

export declare namespace Offers {
  export {
    type AutomaticPricingOfferRuleConfiguration as AutomaticPricingOfferRuleConfiguration,
    type OfferRetrieveRulesResponse as OfferRetrieveRulesResponse,
  };
}

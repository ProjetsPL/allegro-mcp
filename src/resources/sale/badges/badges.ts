// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BadgesAPI from './badges';
import * as OffersAPI from './offers';
import { OfferUpdateCampaignParams, OfferUpdateCampaignResponse, Offers } from './offers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Badges extends APIResource {
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);

  /**
   * Use this resource to get a list of badges in authorized seller's offers. Read
   * more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#kampanie-przypisane-do-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#check-badges-assigned-to-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const badges = await client.sale.badges.list();
   * ```
   */
  list(
    query: BadgeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BadgeListResponse> {
    return this._client.get('/sale/badges', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * This resource allows you to apply for a badge. Most badges involve additional
   * fee charged. Your badge application will be verified and you will be notified
   * about the verification status via e-mail. You can use _Location_ provided in
   * header of the response to track your application status. Application will be
   * removed after 30 days when status of the application was changed form PROCESSED
   * or DECLINED. Fees will be charged in accordance with Annex No. 1 to the
   * <a href="https://allegro.pl/regulaminy/regulamin-strefy-okazji-9dGVAPB69In"
   *     target="_blank">Daily deals zone terms and conditions</a>.
   *
   * By using this resource you agree to the
   * <a href="https://allegro.pl/regulaminy/regulamin-strefy-okazji-9dGVAPB69In"
   *     target="_blank">Daily deals zone terms and conditions</a> or
   * <a href="https://allegro.pl/regulaminy/regulamin-programu-bonusowego-prowizja-nawet-0-5-0KPkAE7wkcv"
   *     target="_blank">Commission discount terms and conditions</a>. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zglos-oferte-do-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#submit-offer-to-a-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const badgeApplication = await client.sale.badges.apply({
   *   campaign: { id: 'BARGAIN' },
   *   offer: { id: '12345678' },
   *   prices: { bargain: { amount: '9.99', currency: 'PLN' } },
   * });
   * ```
   */
  apply(body: BadgeApplyParams, options?: RequestOptions): APIPromise<BadgeApplication> {
    return this._client.post('/sale/badges', {
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

export interface BadgeApplication {
  /**
   * Badge application ID.
   */
  id: string;

  campaign: BadgeApplicationCampaign;

  /**
   * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
   */
  createdAt: string;

  offer: BadgeApplicationOffer;

  /**
   * Information about processing of the application.
   */
  process: BadgeApplication.Process;

  /**
   * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt: string;

  /**
   * Required by DISCOUNT and SOURCING campaign.
   */
  prices?: BadgeApplicationPrices | null;

  /**
   * Constraints of purchase of this offer while it participates in the campaign.
   * Optional for all campaigns types.
   */
  purchaseConstraints?: BadgeApplicationPurchaseConstraints;
}

export namespace BadgeApplication {
  /**
   * Information about processing of the application.
   */
  export interface Process {
    /**
     * A list of rejection reasons for the badge application. Returned for
     * process.status = DECLINED only.
     */
    rejectionReasons: Array<BadgesAPI.BadgeApplicationRejectionReason>;

    status: 'REQUESTED' | 'PROCESSED' | 'DECLINED';
  }
}

/**
 * Bargain price. Required by DISCOUNT and SOURCING campaign.
 */
export interface BadgeApplicationBargainPrice {
  /**
   * Value must be greater than minimal, decimal places aligned with market rules.
   */
  amount?: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217). Only base currency for a given
   * marketplace is supported, example: PLN for allegro-pl, CZK for allegro-cz, EUR
   * for allegro-sk.
   */
  currency?: string;
}

export interface BadgeApplicationCampaign {
  /**
   * Badge campaign ID.
   */
  id: string;
}

export interface BadgeApplicationOffer {
  /**
   * Offer ID.
   */
  id: string;
}

/**
 * Required by DISCOUNT and SOURCING campaign.
 */
export interface BadgeApplicationPrices {
  /**
   * Bargain price. Required by DISCOUNT and SOURCING campaign.
   */
  bargain?: BadgeApplicationBargainPrice | null;
}

/**
 * Constraints of purchase of this offer while it participates in the campaign.
 * Optional for all campaigns types.
 */
export interface BadgeApplicationPurchaseConstraints {
  /**
   * Limits of purchase of this offer while it participates in the campaign. Only
   * DISCOUNT and SOURCING campaigns.
   */
  limit?: BadgeApplicationPurchaseConstraints.Limit;
}

export namespace BadgeApplicationPurchaseConstraints {
  /**
   * Limits of purchase of this offer while it participates in the campaign. Only
   * DISCOUNT and SOURCING campaigns.
   */
  export interface Limit {
    /**
     * Limits of purchase of this offer per user while it participates in the campaign.
     */
    perUser?: Limit.PerUser;
  }

  export namespace Limit {
    /**
     * Limits of purchase of this offer per user while it participates in the campaign.
     */
    export interface PerUser {
      /**
       * Maximum number of items that one user can buy of this offer, while it
       * participates in the campaign.
       */
      maxItems?: number;
    }
  }
}

export interface BadgeApplicationRejectionReason {
  /**
   * Code corresponding to the message. For more information visit
   * <a href="/badge/#6" target="_blank">the list of available codes</a>.
   */
  code: string;

  /**
   * List of messages with rejection reasons.
   */
  messages: Array<BadgeApplicationRejectionReason.Message>;
}

export namespace BadgeApplicationRejectionReason {
  export interface Message {
    /**
     * Detailed message.
     */
    text: string;

    /**
     * Optional link that redirects to page associated with rejection reason.
     */
    link?: string | null;
  }
}

/**
 * List of badges
 */
export interface BadgeListResponse {
  badges: Array<BadgeListResponse.Badge>;
}

export namespace BadgeListResponse {
  export interface Badge {
    campaign: Badge.Campaign;

    offer: BadgesAPI.BadgeApplicationOffer;

    /**
     * Information about badge processing.
     */
    process: Badge.Process;

    /**
     * Provided for DISCOUNT and SOURCING campaigns.
     */
    prices?: Badge.Prices | null;

    /**
     * Time period when the badge is displayed on the list of offers or on the offer
     * page.
     */
    publication?: Badge.Publication | null;
  }

  export namespace Badge {
    export interface Campaign {
      /**
       * Badge campaign ID.
       */
      id: string;

      /**
       * Badge campaign name.
       */
      name?: string;
    }

    /**
     * Information about badge processing.
     */
    export interface Process {
      /**
       * A list of messages with rejection reasons. Returned for process.status =
       * DECLINED only.
       */
      rejectionReasons: Array<BadgesAPI.BadgeApplicationRejectionReason>;

      status: 'IN_VERIFICATION' | 'WAITING_FOR_PUBLICATION' | 'ACTIVE' | 'FINISHED' | 'DECLINED';
    }

    /**
     * Provided for DISCOUNT and SOURCING campaigns.
     */
    export interface Prices {
      /**
       * Bargain price. Required by DISCOUNT and SOURCING campaign.
       */
      bargain?: BadgesAPI.BadgeApplicationBargainPrice | null;

      /**
       * Suggested market price. Calculated automatically based on the offer's price
       * history.
       */
      market?: Prices.Market;

      /**
       * Prices that relate to the price reconciliation.
       */
      subsidy?: Prices.Subsidy;
    }

    export namespace Prices {
      /**
       * Suggested market price. Calculated automatically based on the offer's price
       * history.
       */
      export interface Market {
        /**
         * Value must be greater than minimal, decimal places aligned with market rules.
         */
        amount?: string;

        /**
         * The currency provided as a 3-letter code in accordance with ISO 4217 standard
         * (https://en.wikipedia.org/wiki/ISO_4217). Only base currency for a given
         * marketplace is supported, example: PLN for allegro-pl, CZK for allegro-cz, EUR
         * for allegro-sk.
         */
        currency?: string;
      }

      /**
       * Prices that relate to the price reconciliation.
       */
      export interface Subsidy {
        /**
         * The price requested by partner.
         */
        sellerPrice?: Subsidy.SellerPrice;

        /**
         * The price visible as the Buy Now price.
         */
        targetPrice?: Subsidy.TargetPrice;
      }

      export namespace Subsidy {
        /**
         * The price requested by partner.
         */
        export interface SellerPrice {
          /**
           * Value must be greater than minimal, decimal places aligned with market rules.
           */
          amount?: string;

          /**
           * The currency provided as a 3-letter code in accordance with ISO 4217 standard
           * (https://en.wikipedia.org/wiki/ISO_4217). Only base currency for a given
           * marketplace is supported, example: PLN for allegro-pl, CZK for allegro-cz, EUR
           * for allegro-sk.
           */
          currency?: string;
        }

        /**
         * The price visible as the Buy Now price.
         */
        export interface TargetPrice {
          /**
           * Value must be greater than minimal, decimal places aligned with market rules.
           */
          amount?: string;

          /**
           * The currency provided as a 3-letter code in accordance with ISO 4217 standard
           * (https://en.wikipedia.org/wiki/ISO_4217). Only base currency for a given
           * marketplace is supported, example: PLN for allegro-pl, CZK for allegro-cz, EUR
           * for allegro-sk.
           */
          currency?: string;
        }
      }
    }

    /**
     * Time period when the badge is displayed on the list of offers or on the offer
     * page.
     */
    export interface Publication {
      type: 'ALWAYS' | 'SINCE' | 'WITHIN' | 'UNTIL' | 'NEVER';

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      from?: string;

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      to?: string | null;
    }
  }
}

export interface BadgeListParams {
  /**
   * The maximum number of badges returned in the response.
   */
  limit?: number;

  marketplace?: BadgeListParams.Marketplace;

  offer?: BadgeListParams.Offer;

  /**
   * Offset.
   */
  offset?: number;
}

export namespace BadgeListParams {
  export interface Marketplace {
    /**
     * The marketplace of badges.
     */
    id?: string;
  }

  export interface Offer {
    /**
     * Offer ID.
     */
    id?: string;
  }
}

export interface BadgeApplyParams {
  campaign: BadgeApplicationCampaign;

  offer: BadgeApplicationOffer;

  /**
   * Required by DISCOUNT and SOURCING campaign.
   */
  prices?: BadgeApplicationPrices | null;

  /**
   * Constraints of purchase of this offer while it participates in the campaign.
   * Optional for all campaigns types.
   */
  purchaseConstraints?: BadgeApplicationPurchaseConstraints;
}

Badges.Offers = Offers;

export declare namespace Badges {
  export {
    type BadgeApplication as BadgeApplication,
    type BadgeApplicationBargainPrice as BadgeApplicationBargainPrice,
    type BadgeApplicationCampaign as BadgeApplicationCampaign,
    type BadgeApplicationOffer as BadgeApplicationOffer,
    type BadgeApplicationPrices as BadgeApplicationPrices,
    type BadgeApplicationPurchaseConstraints as BadgeApplicationPurchaseConstraints,
    type BadgeApplicationRejectionReason as BadgeApplicationRejectionReason,
    type BadgeListResponse as BadgeListResponse,
    type BadgeListParams as BadgeListParams,
    type BadgeApplyParams as BadgeApplyParams,
  };

  export {
    Offers as Offers,
    type OfferUpdateCampaignResponse as OfferUpdateCampaignResponse,
    type OfferUpdateCampaignParams as OfferUpdateCampaignParams,
  };
}

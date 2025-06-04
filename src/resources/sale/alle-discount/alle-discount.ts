// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubmitOfferCommandsAPI from './submit-offer-commands';
import {
  ErrorsHolder,
  SubmitOfferCommandCreateParams,
  SubmitOfferCommandCreateResponse,
  SubmitOfferCommandRetrieveResponse,
  SubmitOfferCommands,
} from './submit-offer-commands';
import * as WithdrawOfferCommandsAPI from './withdraw-offer-commands';
import {
  WithdrawOfferCommandCreateParams,
  WithdrawOfferCommandCreateResponse,
  WithdrawOfferCommandRetrieveResponse,
  WithdrawOfferCommands,
} from './withdraw-offer-commands';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class AlleDiscount extends APIResource {
  submitOfferCommands: SubmitOfferCommandsAPI.SubmitOfferCommands =
    new SubmitOfferCommandsAPI.SubmitOfferCommands(this._client);
  withdrawOfferCommands: WithdrawOfferCommandsAPI.WithdrawOfferCommands =
    new WithdrawOfferCommandsAPI.WithdrawOfferCommands(this._client);

  /**
   * List current AlleDiscount campaigns. Each campaign has its own list of goods
   * (products) that indicate which offers can be submitted to it. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-dostepnych-kampanii-alleobnizka" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-available-allediscount-campaigns" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.alleDiscount.listCampaigns();
   * ```
   */
  listCampaigns(
    query: AlleDiscountListCampaignsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlleDiscountListCampaignsResponse> {
    return this._client.get('/sale/alle-discount/campaigns', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Endpoint returning info about offers that can be submitted to a given
   * AlleDiscount campaign. Only offer linked to the product in published list of
   * goods (products) can be submitted to a given AlleDiscount campaign. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-ofert-kwalifikujacych-sie-do-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-offers-eligible-for-the-selected-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.alleDiscount.listEligibleOffers(
   *     'campaignId',
   *   );
   * ```
   */
  listEligibleOffers(
    campaignID: string,
    query: AlleDiscountListEligibleOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlleDiscountListEligibleOffersResponse> {
    return this._client.get(path`/sale/alle-discount/${campaignID}/eligible-offers`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Endpoint returning info about offer participations for a given AlleDiscount
   * campaign. With this endpoint you are able to validate if the offer participates
   * in AlleDiscount and if it has lowered price on the platform. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-ofert-zgloszonych-do-wybranej-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-offers-submitted-for-the-selected-campaign" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.alleDiscount.listSubmittedOffers(
   *     'campaignId',
   *   );
   * ```
   */
  listSubmittedOffers(
    campaignID: string,
    query: AlleDiscountListSubmittedOffersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AlleDiscountListSubmittedOffersResponse> {
    return this._client.get(path`/sale/alle-discount/${campaignID}/submitted-offers`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface AlleDiscountListCampaignsResponse {
  /**
   * Array of the available AlleDiscount campaigns.
   */
  alleDiscountCampaigns?: Array<AlleDiscountListCampaignsResponse.AlleDiscountCampaign>;
}

export namespace AlleDiscountListCampaignsResponse {
  export interface AlleDiscountCampaign {
    /**
     * The id of the campaign.
     */
    id?: string;

    /**
     * Time period when the campaign is open for offer submission.
     */
    application?: AlleDiscountCampaign.Application;

    /**
     * Campaign marketplace data.
     */
    marketplace?: AlleDiscountCampaign.Marketplace;

    /**
     * Name of the campaign.
     */
    name?: string;

    /**
     * Time period when reduced price (and possible badge if it applies for campaign)
     * is displayed on the list of offers or on the offer page.
     */
    publication?: AlleDiscountCampaign.Publication;

    /**
     * Field providing info about the type of the campaign. Two possible values:
     *
     * - SOURCING - no additional requirements.
     * - DISCOUNT - requires price lower than the lowest from 30 days, created badge
     *   has crossed out price.
     */
    type?: 'SOURCING' | 'DISCOUNT';

    /**
     * Time period when the campaign is visible in My Allegro.
     */
    visibility?: AlleDiscountCampaign.Visibility;
  }

  export namespace AlleDiscountCampaign {
    /**
     * Time period when the campaign is open for offer submission.
     */
    export interface Application {
      /**
       * Provided in ISO 8601 format.
       */
      from?: string;

      /**
       * Provided in ISO 8601 format.
       */
      to?: string;

      /**
       * Type of campaign visibility. One possible value: - WITHIN
       */
      type?: 'WITHIN';
    }

    /**
     * Campaign marketplace data.
     */
    export interface Marketplace {
      /**
       * The id of the marketplace.
       */
      id?: string;
    }

    /**
     * Time period when reduced price (and possible badge if it applies for campaign)
     * is displayed on the list of offers or on the offer page.
     */
    export interface Publication {
      /**
       * Provided in ISO 8601 format.
       */
      from?: string;

      /**
       * Provided in ISO 8601 format.
       */
      to?: string;

      /**
       * Type of campaign visibility. One possible value: - WITHIN
       */
      type?: 'WITHIN';
    }

    /**
     * Time period when the campaign is visible in My Allegro.
     */
    export interface Visibility {
      /**
       * Provided in ISO 8601 format.
       */
      from?: string;

      /**
       * Provided in ISO 8601 format.
       */
      to?: string;

      /**
       * Type of campaign visibility. One possible value: - WITHIN
       */
      type?: 'WITHIN';
    }
  }
}

export interface AlleDiscountListEligibleOffersResponse {
  /**
   * Number of offers returned in page.
   */
  count?: number;

  /**
   * Array of offers eligible to be submitted to given AlleDiscount campaign.
   */
  eligibleOffers?: Array<AlleDiscountListEligibleOffersResponse.EligibleOffer>;

  /**
   * Total number of eligible offers.
   */
  totalCount?: number;
}

export namespace AlleDiscountListEligibleOffersResponse {
  export interface EligibleOffer {
    /**
     * The id of the offer.
     */
    id?: string;

    /**
     * AlleDiscount specific data.
     */
    alleDiscount?: EligibleOffer.AlleDiscount;

    /**
     * Offer base price.
     */
    basePrice?: EligibleOffer.BasePrice | null;

    /**
     * Offer product data.
     */
    product?: EligibleOffer.Product;
  }

  export namespace EligibleOffer {
    /**
     * AlleDiscount specific data.
     */
    export interface AlleDiscount {
      /**
       * Info if offer matches campaign requirements.
       */
      campaignConditions?: AlleDiscount.CampaignConditions;

      /**
       * Information what will be minimal guaranteed discount if offer is successfully
       * submitted to AlleDiscount campaign. Final discount can be higher and may change
       * for certain campaigns.
       */
      minimumGuaranteedDiscount?: AlleDiscount.MinimumGuaranteedDiscount;

      /**
       * Maximum price of offer that will be accepted in this AlleDiscount campaign. If
       * you send submission with higher price, it will be rejected. You can submit your
       * offer with lower price than one indicated here.
       */
      requiredMerchantPrice?: AlleDiscount.RequiredMerchantPrice;
    }

    export namespace AlleDiscount {
      /**
       * Info if offer matches campaign requirements.
       */
      export interface CampaignConditions {
        /**
         * If true, offer matches campaign requirements and `violations` array will be
         * empty.
         */
        meetsConditions?: boolean;

        /**
         * Example violations:
         *
         * - NOT_ENOUGH_STOCK - offer doesn’t meet the stock requirement.
         * - VAT_INVOICE_REQUIRED - offer doesn’t have vat invoice enabled.
         * - NOT_NEW_OFFER - offer’s condition is not new (e.g used).
         * - OFFER_PRICE_VERIFICATION_IN_PROGRESS - we are still gathering the information
         *   about the offer price. In this case the “basePrice” field should be set to
         *   null.
         */
        violations?: Array<CampaignConditions.Violation>;
      }

      export namespace CampaignConditions {
        export interface Violation {
          /**
           * Code of the violation.
           */
          code?: string;

          /**
           * Violation description.
           */
          message?: string;
        }
      }

      /**
       * Information what will be minimal guaranteed discount if offer is successfully
       * submitted to AlleDiscount campaign. Final discount can be higher and may change
       * for certain campaigns.
       */
      export interface MinimumGuaranteedDiscount {
        /**
         * Guaranteed offer discount as a percentage.
         */
        percentage?: string;
      }

      /**
       * Maximum price of offer that will be accepted in this AlleDiscount campaign. If
       * you send submission with higher price, it will be rejected. You can submit your
       * offer with lower price than one indicated here.
       */
      export interface RequiredMerchantPrice {
        /**
         * Amount of the price.
         */
        amount?: string;

        /**
         * Currency of the price.
         */
        currency?: string;
      }
    }

    /**
     * Offer base price.
     */
    export interface BasePrice {
      /**
       * Amount of the price.
       */
      amount?: string;

      /**
       * Currency of the price.
       */
      currency?: string;
    }

    /**
     * Offer product data.
     */
    export interface Product {
      /**
       * The id of the product.
       */
      id?: string;
    }
  }
}

export interface AlleDiscountListSubmittedOffersResponse {
  /**
   * Number of offers returned in page.
   */
  count?: number;

  /**
   * Array of offers submitted to a given AlleDiscount campaign. This list contains
   * all active and non active offer participations. There can be only one submission
   * for offer in one AlleDiscount campaign.
   */
  submittedOffers?: Array<AlleDiscountListSubmittedOffersResponse.SubmittedOffer>;

  /**
   * Total number of submitted offers.
   */
  totalCount?: number;
}

export namespace AlleDiscountListSubmittedOffersResponse {
  export interface SubmittedOffer {
    /**
     * AlleDiscount campaign data.
     */
    campaign?: SubmittedOffer.Campaign;

    /**
     * Submitted offer data.
     */
    offer?: SubmittedOffer.Offer;

    /**
     * The id of the participation.
     */
    participationId?: string;

    /**
     * AlleDiscount prices data.
     */
    prices?: SubmittedOffer.Prices;

    /**
     * Participation processing data.
     */
    process?: SubmittedOffer.Process;

    /**
     * Limit of purchases on the offer.
     */
    purchaseLimit?: number;
  }

  export namespace SubmittedOffer {
    /**
     * AlleDiscount campaign data.
     */
    export interface Campaign {
      /**
       * The id of the campaign.
       */
      id?: string;
    }

    /**
     * Submitted offer data.
     */
    export interface Offer {
      /**
       * The id of the offer.
       */
      id?: string;
    }

    /**
     * AlleDiscount prices data.
     */
    export interface Prices {
      /**
       * Maximum price for the offer after discount. Can be lower.
       */
      maximumSellingPrice?: Prices.MaximumSellingPrice;

      /**
       * Minimal price reduction on the offer.
       */
      minimalPriceReduction?: Prices.MinimalPriceReduction;

      /**
       * The price you agreed to lower to for the offer.
       */
      proposedPrice?: Prices.ProposedPrice;
    }

    export namespace Prices {
      /**
       * Maximum price for the offer after discount. Can be lower.
       */
      export interface MaximumSellingPrice {
        /**
         * Amount of the price.
         */
        amount?: string;

        /**
         * Currency of the price.
         */
        currency?: string;
      }

      /**
       * Minimal price reduction on the offer.
       */
      export interface MinimalPriceReduction {
        /**
         * Amount of the price.
         */
        amount?: string;

        /**
         * Currency of the price.
         */
        currency?: string;
      }

      /**
       * The price you agreed to lower to for the offer.
       */
      export interface ProposedPrice {
        /**
         * Amount of the price.
         */
        amount?: string;

        /**
         * Currency of the price.
         */
        currency?: string;
      }
    }

    /**
     * Participation processing data.
     */
    export interface Process {
      /**
       * Possible participation errors:
       *
       * - TOO_HIGH_PROPOSED_PRICE - “proposedPrice” field when submitting an offer was
       *   set higher than the “requiredMerchantPrice” of this offer.
       * - PRODUCT_CONFIGURATION_CHANGED - configuration of offer’s product has changed
       *   in the meantime of processing the request.
       * - PRODUCT_NOT_IN_CAMPAIGN - submitted offer’s product is no longer available in
       *   this campaign.
       * - OFFER_NOT_VISIBLE_ON_CAMPAIGN_MARKETPLACE - offer is not visible on the
       *   marketplace of the campaign it was submitted to.
       * - CURRENCY_NOT_SUPPORTED - currency in “proposedPrice” does not match the
       *   currency of the marketplace offer was submitted to.
       * - ALLE_DISCOUNT_SUSPENDED_ACCOUNT - seller submitting offer is suspended and
       *   cannot perform any action.
       */
      errors?: Array<Process.Error>;

      /**
       * - VERIFICATION - participation is being verified. - ACCEPTED - participation in
       *   AlleDiscount was created and has passed initial verification. Participation
       *   will stay in this status until campaign starts or if additional verification
       *   fails. - ACTIVE - participation is active, price on the platform is lowered.
       *   Offer is participating in AlleDiscount. - DECLINED - participation didn’t pass
       *   verification, check process.errors field for more details. - FINISHED -
       *   participation is no longer active.
       */
      status?: 'VERIFICATION' | 'ACCEPTED' | 'ACTIVE' | 'DECLINED' | 'FINISHED';
    }

    export namespace Process {
      /**
       * Error body.
       */
      export interface Error {
        /**
         * Error code.
         */
        code?: string;

        /**
         * Error message.
         */
        message?: string;
      }
    }
  }
}

export interface AlleDiscountListCampaignsParams {
  /**
   * Id of the searched campaign. If present, returns at most one entry.
   */
  campaignId?: string;
}

export interface AlleDiscountListEligibleOffersParams {
  /**
   * Maximum number of offers returned in the eligibleOffers list; max value is 200.
   */
  limit?: number;

  /**
   * If true, filters offers that only meet conditions of the campaign.
   */
  meetsConditions?: boolean;

  /**
   * ID of an offer; if the offer with the given ID exists, returns at most one
   * element in the eligibleOffers list.
   */
  offerId?: string;

  /**
   * The number of offers to skip while listing the results.
   */
  offset?: number;
}

export interface AlleDiscountListSubmittedOffersParams {
  /**
   * Maximum number of offers returned in the eligibleOffers list; max value is 200.
   */
  limit?: number;

  /**
   * ID of an offer; if the offer with the given ID exists, returns at most one
   * element in the submittedOffers list.
   */
  offerId?: string;

  /**
   * The number of offers to skip while listing the results.
   */
  offset?: number;

  /**
   * Id of the participation, returns at most one element in the submittedOffers
   * list.
   */
  participationId?: string;
}

AlleDiscount.SubmitOfferCommands = SubmitOfferCommands;
AlleDiscount.WithdrawOfferCommands = WithdrawOfferCommands;

export declare namespace AlleDiscount {
  export {
    type AlleDiscountListCampaignsResponse as AlleDiscountListCampaignsResponse,
    type AlleDiscountListEligibleOffersResponse as AlleDiscountListEligibleOffersResponse,
    type AlleDiscountListSubmittedOffersResponse as AlleDiscountListSubmittedOffersResponse,
    type AlleDiscountListCampaignsParams as AlleDiscountListCampaignsParams,
    type AlleDiscountListEligibleOffersParams as AlleDiscountListEligibleOffersParams,
    type AlleDiscountListSubmittedOffersParams as AlleDiscountListSubmittedOffersParams,
  };

  export {
    SubmitOfferCommands as SubmitOfferCommands,
    type ErrorsHolder as ErrorsHolder,
    type SubmitOfferCommandCreateResponse as SubmitOfferCommandCreateResponse,
    type SubmitOfferCommandRetrieveResponse as SubmitOfferCommandRetrieveResponse,
    type SubmitOfferCommandCreateParams as SubmitOfferCommandCreateParams,
  };

  export {
    WithdrawOfferCommands as WithdrawOfferCommands,
    type WithdrawOfferCommandCreateResponse as WithdrawOfferCommandCreateResponse,
    type WithdrawOfferCommandRetrieveResponse as WithdrawOfferCommandRetrieveResponse,
    type WithdrawOfferCommandCreateParams as WithdrawOfferCommandCreateParams,
  };
}

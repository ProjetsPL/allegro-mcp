// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OfferPublicationCommandsAPI from './offer-publication-commands';
import * as OffersAPI from './price-automation/offers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferPriceAutomationCommands extends APIResource {
  /**
   * Use this resource to modify the automatic pricing rules of multiple offers at
   * the same time. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#pricing-rules" target="_blank">EN</a>.
   * This resource is rate limited to 150 000 offer changes per hour or 9000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPriceAutomationCommands.create({
   *     modification: {},
   *     offerCriteria: [{}],
   *   });
   * ```
   */
  create(
    body: OfferPriceAutomationCommandCreateParams,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.post('/sale/offer-price-automation-commands', {
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
   * Returns status and summary of the offer-price-automation-command. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#pricing-rules" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPriceAutomationCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(
    commandID: string,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.get(path`/sale/offer-price-automation-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Defaults: limit = 100, offset = 0. Returns status and report of the
   * offer-price-automation-command. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#reguly-cenowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#pricing-rules" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const taskReport =
   *   await client.sale.offerPriceAutomationCommands.tasks(
   *     'commandId',
   *   );
   * ```
   */
  tasks(
    commandID: string,
    query: OfferPriceAutomationCommandTasksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.TaskReport> {
    return this._client.get(path`/sale/offer-price-automation-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface OfferPriceAutomationCommandCreateParams {
  modification:
    | OfferPriceAutomationCommandCreateParams.OfferAutomaticPricingModificationSet
    | OfferPriceAutomationCommandCreateParams.OfferAutomaticPricingModificationRemove;

  /**
   * List of offer criteria.
   */
  offerCriteria: Array<OfferPublicationCommandsAPI.OfferCriterium>;

  /**
   * The Command identifier. This field is optional. If the client does not provide
   * their own command id then the service will generate a command id and return it
   * in the response.
   */
  id?: string;
}

export namespace OfferPriceAutomationCommandCreateParams {
  export interface OfferAutomaticPricingModificationSet {
    /**
     * List of marketplaces to which the rules will be added.
     */
    set?: Array<OfferAutomaticPricingModificationSet.Set>;
  }

  export namespace OfferAutomaticPricingModificationSet {
    export interface Set {
      marketplace: Set.Marketplace;

      rule: Set.Rule;

      /**
       * Offer Rule configuration. For "EXCHANGE_RATE" the field is not allowed. For
       * "FOLLOW_BY_ALLEGRO_MIN_PRICE", "FOLLOW_BY_MARKET_MIN_PRICE" and
       * "FOLLOW_BY_TOP_OFFER_PRICE" it is necessary for the rule to work.
       */
      configuration?: OffersAPI.AutomaticPricingOfferRuleConfiguration;
    }

    export namespace Set {
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
      }
    }
  }

  export interface OfferAutomaticPricingModificationRemove {
    /**
     * List of marketplaces from which rules will be removed.
     */
    remove?: Array<OfferAutomaticPricingModificationRemove.Remove>;
  }

  export namespace OfferAutomaticPricingModificationRemove {
    export interface Remove {
      marketplace: Remove.Marketplace;
    }

    export namespace Remove {
      export interface Marketplace {
        /**
         * The id of a marketplace.<br/> Available marketplaces can be determined using
         * <a href="#operation/marketplacesGET">GET /marketplaces</a>.
         */
        id: string;
      }
    }
  }
}

export interface OfferPriceAutomationCommandTasksParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace OfferPriceAutomationCommands {
  export {
    type OfferPriceAutomationCommandCreateParams as OfferPriceAutomationCommandCreateParams,
    type OfferPriceAutomationCommandTasksParams as OfferPriceAutomationCommandTasksParams,
  };
}

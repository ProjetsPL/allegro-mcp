// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OfferPublicationCommandsAPI from './offer-publication-commands';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferPriceChangeCommands extends APIResource {
  /**
   * Returns status and summary of particular command execution. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#cena" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#price" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPriceChangeCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(
    commandID: string,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.get(path`/sale/offer-price-change-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Change price of offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#cena" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#price" target="_blank">EN</a>.
   * This resource is rate limited to 150 000 offer changes per hour or 9000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPriceChangeCommands.update(
   *     'commandId',
   *   );
   * ```
   */
  update(
    commandID: string,
    body: OfferPriceChangeCommandUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.put(path`/sale/offer-price-change-commands/${commandID}`, {
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
   * Defaults: limit = 100, offset = 0. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#cena" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#price" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const taskReport =
   *   await client.sale.offerPriceChangeCommands.tasks(
   *     'commandId',
   *   );
   * ```
   */
  tasks(
    commandID: string,
    query: OfferPriceChangeCommandTasksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.TaskReport> {
    return this._client.get(path`/sale/offer-price-change-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface OfferPriceChangeCommandUpdateParams {
  /**
   * The way the offer price should be changed. One of three ways is possible: new
   * price, increase/decrease price, percentage change and only one can be chosen at
   * once.
   */
  modification?: OfferPriceChangeCommandUpdateParams.Modification;

  /**
   * List of offer criteria
   */
  offerCriteria?: Array<OfferPublicationCommandsAPI.OfferCriterium>;
}

export namespace OfferPriceChangeCommandUpdateParams {
  /**
   * The way the offer price should be changed. One of three ways is possible: new
   * price, increase/decrease price, percentage change and only one can be chosen at
   * once.
   */
  export interface Modification {
    /**
     * Type of the modification.
     */
    type: string;

    /**
     * The id of a marketplace.<br/> Available marketplaces can be determined using
     * <a href="#operation/marketplacesGET">GET /marketplaces</a>.
     */
    marketplaceId?: string | null;
  }
}

export interface OfferPriceChangeCommandTasksParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace OfferPriceChangeCommands {
  export {
    type OfferPriceChangeCommandUpdateParams as OfferPriceChangeCommandUpdateParams,
    type OfferPriceChangeCommandTasksParams as OfferPriceChangeCommandTasksParams,
  };
}

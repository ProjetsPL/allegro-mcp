// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OfferPublicationCommandsAPI from './offer-publication-commands';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferQuantityChangeCommands extends APIResource {
  /**
   * Returns status and summary of the command. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#liczba-przedmiotow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#quantity" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerQuantityChangeCommands.retrieve(
   *     'commandId',
   *   );
   * ```
   */
  retrieve(
    commandID: string,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.get(path`/sale/offer-quantity-change-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Change quantity of multiple offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#liczba-przedmiotow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#quantity" target="_blank">EN</a>.
   * This resource is rate limited to 250 000 offer changes per hour or 9000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerQuantityChangeCommands.update(
   *     'commandId',
   *   );
   * ```
   */
  update(
    commandID: string,
    body: OfferQuantityChangeCommandUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.GeneralReport> {
    return this._client.put(path`/sale/offer-quantity-change-commands/${commandID}`, {
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
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#liczba-przedmiotow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#quantity" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const taskReport =
   *   await client.sale.offerQuantityChangeCommands.tasks(
   *     'commandId',
   *   );
   * ```
   */
  tasks(
    commandID: string,
    query: OfferQuantityChangeCommandTasksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferPublicationCommandsAPI.TaskReport> {
    return this._client.get(path`/sale/offer-quantity-change-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface OfferQuantityChangeCommandUpdateParams {
  /**
   * The way the offer quantity should be changed. One of two ways is possible: new
   * quantity, increase/decrease quantity and only one can be chosen at once.
   */
  modification?: OfferQuantityChangeCommandUpdateParams.Modification;

  /**
   * List of offer criteria
   */
  offerCriteria?: Array<OfferPublicationCommandsAPI.OfferCriterium>;
}

export namespace OfferQuantityChangeCommandUpdateParams {
  /**
   * The way the offer quantity should be changed. One of two ways is possible: new
   * quantity, increase/decrease quantity and only one can be chosen at once.
   */
  export interface Modification {
    /**
     * modification type
     */
    changeType?: 'FIXED' | 'GAIN';

    /**
     * - For changeType = "FIXED", a new stock quantity > 0
     * - For changeType = "GAIN", an increase/decrease in stock quantity
     */
    value?: number;
  }
}

export interface OfferQuantityChangeCommandTasksParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace OfferQuantityChangeCommands {
  export {
    type OfferQuantityChangeCommandUpdateParams as OfferQuantityChangeCommandUpdateParams,
    type OfferQuantityChangeCommandTasksParams as OfferQuantityChangeCommandTasksParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OffersAPI from './offers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PromoOptions extends APIResource {
  /**
   * Use this resource to get promotion packages assigned to an offer. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-opcje-promowania-przypisane-do-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-promo-options-assigned-to-an-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerPromoOptions =
   *   await client.sale.offers.promoOptions.list('9991337999');
   * ```
   */
  list(offerID: string, options?: RequestOptions): APIPromise<OffersAPI.OfferPromoOptions> {
    return this._client.get(path`/sale/offers/${offerID}/promo-options`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to retrieve promo options for seller offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-opcje-promowania-dla-wielu-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-available-promo-options-for-multiple-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.offers.promoOptions.getAll();
   * ```
   */
  getAll(
    query: PromoOptionGetAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromoOptionGetAllResponse> {
    return this._client.get('/sale/offers/promo-options', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface PromoOptionGetAllResponse {
  /**
   * Number of returned elements.
   */
  count?: number;

  /**
   * Promo options for seller offers.
   */
  promoOptions?: Array<OffersAPI.OfferPromoOptions>;

  /**
   * Total number of available elements.
   */
  totalCount?: number;
}

export interface PromoOptionGetAllParams {
  /**
   * Limit of promo options per page.
   */
  limit?: number;

  /**
   * Distance between the beginning of the document and the point from which promo
   * options are returned.
   */
  offset?: number;
}

export declare namespace PromoOptions {
  export {
    type PromoOptionGetAllResponse as PromoOptionGetAllResponse,
    type PromoOptionGetAllParams as PromoOptionGetAllParams,
  };
}

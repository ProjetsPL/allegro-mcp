// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BadgesAPI from './badges/badges';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BadgeApplications extends APIResource {
  /**
   * Use this resource to get a badge application details. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#pobierz-dane-zgloszenie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#retrieve-campaign-application" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const badgeApplication =
   *   await client.sale.badgeApplications.retrieve(
   *     'applicationId',
   *   );
   * ```
   */
  retrieve(applicationID: string, options?: RequestOptions): APIPromise<BadgesAPI.BadgeApplication> {
    return this._client.get(path`/sale/badge-applications/${applicationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of badge applications. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#pobierz-swoje-zgloszenia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#retrieve-all-campaign-applications" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const badgeApplications =
   *   await client.sale.badgeApplications.list();
   * ```
   */
  list(
    query: BadgeApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BadgeApplicationListResponse> {
    return this._client.get('/sale/badge-applications', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface BadgeApplicationListResponse {
  badgeApplications: Array<BadgesAPI.BadgeApplication>;
}

export interface BadgeApplicationListParams {
  campaign?: BadgeApplicationListParams.Campaign;

  /**
   * The maximum number of applications returned in the response.
   */
  limit?: number;

  offer?: BadgeApplicationListParams.Offer;

  /**
   * Offset.
   */
  offset?: number;
}

export namespace BadgeApplicationListParams {
  export interface Campaign {
    /**
     * Campaign ID.
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

export declare namespace BadgeApplications {
  export {
    type BadgeApplicationListResponse as BadgeApplicationListResponse,
    type BadgeApplicationListParams as BadgeApplicationListParams,
  };
}

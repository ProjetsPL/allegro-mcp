// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PointsOfServiceAPI from '../points-of-service';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ImpliedWarranties extends APIResource {
  /**
   * Use this resource to create an implied warranty definition. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-informacje-o-warunkach-reklamacji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-implied-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const impliedWarrantyResponse =
   *   await client.afterSalesServiceConditions.impliedWarranties.create();
   * ```
   */
  create(body: ImpliedWarrantyCreateParams, options?: RequestOptions): APIPromise<ImpliedWarrantyResponse> {
    return this._client.post('/after-sales-service-conditions/implied-warranties', {
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
   * Use this resource to get an implied warranty details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-reklamacji-przypisane-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-implied-warranties-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const impliedWarrantyResponse =
   *   await client.afterSalesServiceConditions.impliedWarranties.retrieve(
   *     'impliedWarrantyId',
   *   );
   * ```
   */
  retrieve(impliedWarrantyID: string, options?: RequestOptions): APIPromise<ImpliedWarrantyResponse> {
    return this._client.get(path`/after-sales-service-conditions/implied-warranties/${impliedWarrantyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify the implied warranty details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-warunkach-reklamacji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-implied-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const impliedWarrantyResponse =
   *   await client.afterSalesServiceConditions.impliedWarranties.update(
   *     'impliedWarrantyId',
   *   );
   * ```
   */
  update(
    impliedWarrantyID: string,
    body: ImpliedWarrantyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ImpliedWarrantyResponse> {
    return this._client.put(path`/after-sales-service-conditions/implied-warranties/${impliedWarrantyID}`, {
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
   * Use this resource to get seller implied warranties listing. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-reklamacji-przypisane-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-implied-warranties-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const impliedWarranties =
   *   await client.afterSalesServiceConditions.impliedWarranties.list();
   * ```
   */
  list(
    query: ImpliedWarrantyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ImpliedWarrantyListResponse> {
    return this._client.get('/after-sales-service-conditions/implied-warranties', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface AfterSalesServiceAddress {
  /**
   * City name.
   */
  city: string;

  /**
   * Country code.
   */
  countryCode: string;

  /**
   * Company or person name.
   */
  name: string;

  /**
   * Post code.
   */
  postCode: string;

  /**
   * Street name.
   */
  street: string;
}

export interface ImpliedWarrantyPeriod {
  /**
   * Period in ISO 8601 format. Only periods in full years are accepted.
   */
  period?: string;
}

export interface ImpliedWarrantyRequest {
  address?: AfterSalesServiceAddress;

  corporate?: ImpliedWarrantyPeriod;

  /**
   * Implied warranty description.
   */
  description?: string;

  individual?: ImpliedWarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;
}

export interface ImpliedWarrantyResponse {
  /**
   * The ID of the implied warranty definition.
   */
  id?: string;

  address?: AfterSalesServiceAddress;

  corporate?: ImpliedWarrantyPeriod;

  /**
   * Implied warranty description.
   */
  description?: string;

  individual?: ImpliedWarrantyPeriod;

  /**
   * Implied warranty name.
   */
  name?: string;

  seller?: PointsOfServiceAPI.Seller;
}

export interface ImpliedWarrantyListResponse {
  count?: number;

  impliedWarranties?: Array<ImpliedWarrantyListResponse.ImpliedWarranty>;
}

export namespace ImpliedWarrantyListResponse {
  export interface ImpliedWarranty {
    id?: string;

    name?: string;
  }
}

export interface ImpliedWarrantyCreateParams {
  address?: AfterSalesServiceAddress;

  corporate?: ImpliedWarrantyPeriod;

  /**
   * Implied warranty description.
   */
  description?: string;

  individual?: ImpliedWarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;
}

export interface ImpliedWarrantyUpdateParams {
  address?: AfterSalesServiceAddress;

  corporate?: ImpliedWarrantyPeriod;

  /**
   * Implied warranty description.
   */
  description?: string;

  individual?: ImpliedWarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;
}

export interface ImpliedWarrantyListParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace ImpliedWarranties {
  export {
    type AfterSalesServiceAddress as AfterSalesServiceAddress,
    type ImpliedWarrantyPeriod as ImpliedWarrantyPeriod,
    type ImpliedWarrantyRequest as ImpliedWarrantyRequest,
    type ImpliedWarrantyResponse as ImpliedWarrantyResponse,
    type ImpliedWarrantyListResponse as ImpliedWarrantyListResponse,
    type ImpliedWarrantyCreateParams as ImpliedWarrantyCreateParams,
    type ImpliedWarrantyUpdateParams as ImpliedWarrantyUpdateParams,
    type ImpliedWarrantyListParams as ImpliedWarrantyListParams,
  };
}

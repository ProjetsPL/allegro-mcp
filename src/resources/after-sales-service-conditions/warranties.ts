// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PointsOfServiceAPI from '../points-of-service';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Warranties extends APIResource {
  /**
   * Use this resource to create a warranty definition. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-informacje-o-gwarancjach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const warrantyResponse =
   *   await client.afterSalesServiceConditions.warranties.create();
   * ```
   */
  create(body: WarrantyCreateParams, options?: RequestOptions): APIPromise<WarrantyResponse> {
    return this._client.post('/after-sales-service-conditions/warranties', {
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
   * Use this resource to get a warranty details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-informacje-o-gwarancjach-przypisanych-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-warranties-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const warrantyResponse =
   *   await client.afterSalesServiceConditions.warranties.retrieve(
   *     'warrantyId',
   *   );
   * ```
   */
  retrieve(warrantyID: string, options?: RequestOptions): APIPromise<WarrantyResponse> {
    return this._client.get(path`/after-sales-service-conditions/warranties/${warrantyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify the warranty details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-gwarancjach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const warrantyResponse =
   *   await client.afterSalesServiceConditions.warranties.update(
   *     'warrantyId',
   *   );
   * ```
   */
  update(
    warrantyID: string,
    body: WarrantyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WarrantyResponse> {
    return this._client.put(path`/after-sales-service-conditions/warranties/${warrantyID}`, {
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
   * Use this resource to get seller warranties listing. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-informacje-o-gwarancjach-przypisanych-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-warranties-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const warranties =
   *   await client.afterSalesServiceConditions.warranties.list();
   * ```
   */
  list(
    query: WarrantyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WarrantyListResponse> {
    return this._client.get('/after-sales-service-conditions/warranties', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface WarrantyPeriod {
  /**
   * Indices if it is lifetime warranty.
   */
  lifetime?: boolean;

  /**
   * Period in ISO 8601 format.
   */
  period?: string;
}

export interface WarrantyRequest {
  attachment?: WarrantyRequest.Attachment;

  corporate?: WarrantyPeriod;

  /**
   * Warranty description.
   */
  description?: string;

  individual?: WarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;

  /**
   * Defines who is warrantor.
   */
  type?: WarrantyType;
}

export namespace WarrantyRequest {
  export interface Attachment {
    /**
     * The Id of the attachment received in a response from _POST
     * /afters-sales-service-conditions/attachments_
     */
    id?: string;

    /**
     * Attachment file name
     */
    name?: string;
  }
}

export interface WarrantyResponse {
  /**
   * The ID of the warranty definition.
   */
  id?: string;

  attachment?: AttachmentsAPI.AfterSalesServiceAttachment;

  corporate?: WarrantyPeriod;

  /**
   * Warranty description.
   */
  description?: string;

  individual?: WarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;

  seller?: PointsOfServiceAPI.Seller;

  /**
   * Defines who is warrantor.
   */
  type?: WarrantyType;
}

/**
 * Defines who is warrantor.
 */
export type WarrantyType = 'MANUFACTURER' | 'SELLER';

export interface WarrantyListResponse {
  count?: number;

  warranties?: Array<WarrantyListResponse.Warranty>;
}

export namespace WarrantyListResponse {
  export interface Warranty {
    id?: string;

    name?: string;
  }
}

export interface WarrantyCreateParams {
  attachment?: WarrantyCreateParams.Attachment;

  corporate?: WarrantyPeriod;

  /**
   * Warranty description.
   */
  description?: string;

  individual?: WarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;

  /**
   * Defines who is warrantor.
   */
  type?: WarrantyType;
}

export namespace WarrantyCreateParams {
  export interface Attachment {
    /**
     * The Id of the attachment received in a response from _POST
     * /afters-sales-service-conditions/attachments_
     */
    id?: string;

    /**
     * Attachment file name
     */
    name?: string;
  }
}

export interface WarrantyUpdateParams {
  attachment?: WarrantyUpdateParams.Attachment;

  corporate?: WarrantyPeriod;

  /**
   * Warranty description.
   */
  description?: string;

  individual?: WarrantyPeriod;

  /**
   * Warranty name.
   */
  name?: string;

  /**
   * Defines who is warrantor.
   */
  type?: WarrantyType;
}

export namespace WarrantyUpdateParams {
  export interface Attachment {
    /**
     * The Id of the attachment received in a response from _POST
     * /afters-sales-service-conditions/attachments_
     */
    id?: string;

    /**
     * Attachment file name
     */
    name?: string;
  }
}

export interface WarrantyListParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace Warranties {
  export {
    type WarrantyPeriod as WarrantyPeriod,
    type WarrantyRequest as WarrantyRequest,
    type WarrantyResponse as WarrantyResponse,
    type WarrantyType as WarrantyType,
    type WarrantyListResponse as WarrantyListResponse,
    type WarrantyCreateParams as WarrantyCreateParams,
    type WarrantyUpdateParams as WarrantyUpdateParams,
    type WarrantyListParams as WarrantyListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class TaxID extends APIResource {
  /**
   * Use this resource to update tax identification number. For international sellers
   * only.
   *
   * @example
   * ```ts
   * await client.fulfillment.taxID.update();
   * ```
   */
  update(body: TaxIDUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put('/fulfillment/tax-id', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to add tax identification number. For international sellers
   * only.
   *
   * @example
   * ```ts
   * await client.fulfillment.taxID.add();
   * ```
   */
  add(body: TaxIDAddParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/fulfillment/tax-id', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get tax identification number with verification status.
   * After adding or updating the tax identification number the status will be
   * NOT_VERIFIED and you will have to wait for acceptance status to start selling.
   *
   * @example
   * ```ts
   * const taxID = await client.fulfillment.taxID.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<TaxIDGetResponse> {
    return this._client.get('/fulfillment/tax-id', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface TaxIDRequest {
  /**
   * User's tax identification number.
   */
  taxId?: string;
}

export interface TaxIDGetResponse {
  /**
   * User's tax identification number.
   */
  taxId?: string;

  /**
   * Tax identification number verification status. Only the ACCEPTED status allows
   * you to send products to the Allegro Warehouse.
   */
  verificationStatus?: string;
}

export interface TaxIDUpdateParams {
  /**
   * User's tax identification number.
   */
  taxId?: string;
}

export interface TaxIDAddParams {
  /**
   * User's tax identification number.
   */
  taxId?: string;
}

export declare namespace TaxID {
  export {
    type TaxIDRequest as TaxIDRequest,
    type TaxIDGetResponse as TaxIDGetResponse,
    type TaxIDUpdateParams as TaxIDUpdateParams,
    type TaxIDAddParams as TaxIDAddParams,
  };
}

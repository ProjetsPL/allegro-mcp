// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PointsOfServiceAPI from '../points-of-service';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ReturnPolicies extends APIResource {
  /**
   * Use this resource to create a return policy definition. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-informacje-o-warunkach-zwrotow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-return-policy-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const returnPolicyResponse =
   *   await client.afterSalesServiceConditions.returnPolicies.create(
   *     {
   *       address: {
   *         city: 'Poznań',
   *         countryCode: 'PL',
   *         name: 'Allegro.pl sp. z o.o.',
   *         postCode: '11-232',
   *         street: 'Grunwaldzka 182',
   *       },
   *       availability: { range: 'RESTRICTED' },
   *       name: 'name',
   *       options: {
   *         businessReturnAllowed: false,
   *         cashOnDeliveryNotAllowed: true,
   *         collectBySellerOnly: false,
   *         freeAccessoriesReturnRequired: true,
   *         refundLoweredByReceivedDiscount: true,
   *       },
   *       returnCost: {},
   *     },
   *   );
   * ```
   */
  create(body: ReturnPolicyCreateParams, options?: RequestOptions): APIPromise<ReturnPolicyResponse> {
    return this._client.post('/after-sales-service-conditions/return-policies', {
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
   * Use this resource to get a return policy details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-zwrotow-przypisane-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-return-policies-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const returnPolicyResponse =
   *   await client.afterSalesServiceConditions.returnPolicies.retrieve(
   *     'returnPolicyId',
   *   );
   * ```
   */
  retrieve(returnPolicyID: string, options?: RequestOptions): APIPromise<ReturnPolicyResponse> {
    return this._client.get(path`/after-sales-service-conditions/return-policies/${returnPolicyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify the return policy details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-edytowac-informacje-o-warunkach-zwrotu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-update-return-policy-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const returnPolicyResponse =
   *   await client.afterSalesServiceConditions.returnPolicies.update(
   *     'returnPolicyId',
   *     {
   *       address: {
   *         city: 'Poznań',
   *         countryCode: 'PL',
   *         name: 'Allegro.pl sp. z o.o.',
   *         postCode: '11-232',
   *         street: 'Grunwaldzka 182',
   *       },
   *       availability: { range: 'RESTRICTED' },
   *       name: 'name',
   *       options: {
   *         businessReturnAllowed: false,
   *         cashOnDeliveryNotAllowed: true,
   *         collectBySellerOnly: false,
   *         freeAccessoriesReturnRequired: true,
   *         refundLoweredByReceivedDiscount: true,
   *       },
   *       returnCost: {},
   *     },
   *   );
   * ```
   */
  update(
    returnPolicyID: string,
    body: ReturnPolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReturnPolicyResponse> {
    return this._client.put(path`/after-sales-service-conditions/return-policies/${returnPolicyID}`, {
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
   * Use this resource to get seller return policies listing. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-warunki-zwrotow-przypisane-do-konta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-return-policies-assigned-to-the-account" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const returnPolicies =
   *   await client.afterSalesServiceConditions.returnPolicies.list();
   * ```
   */
  list(
    query: ReturnPolicyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReturnPolicyListResponse> {
    return this._client.get('/after-sales-service-conditions/return-policies', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete a return policy definition.
   *
   * @example
   * ```ts
   * await client.afterSalesServiceConditions.returnPolicies.delete(
   *   'returnPolicyId',
   * );
   * ```
   */
  delete(returnPolicyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/after-sales-service-conditions/return-policies/${returnPolicyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The return address of the policy. Can be null if availability range is
 * 'DISABLED'.
 */
export interface ReturnPolicyAddress {
  /**
   * City name. Length is dependent on specified 'countryCode' - for PL, CZ and SK
   * length is equal to 30 characters, for other countries - 200.
   */
  city: string;

  /**
   * Country code.
   */
  countryCode: string;

  /**
   * Company or person name. Length is dependent on specified 'countryCode' - for CZ
   * and SK length is equal to 50 characters, for other countries - 200.
   */
  name: string;

  /**
   * Post code format is dependent on 'countryCode' - PL='XX-XXX', CZ='XXX XX',
   * SK='XXX XX' for other countries format is less restrictive - 16 characters
   * alphanumeric with ' '(space) and '-' allowed.
   */
  postCode: string;

  /**
   * Street name. Length is dependent on specified 'countryCode' - for PL, CZ and SK
   * length is equal to 35 characters, for other countries - 200.
   */
  street: string;
}

export interface ReturnPolicyAvailability {
  /**
   * Indicates if return policy is full, restricted or disabled.
   */
  range: 'FULL' | 'RESTRICTED' | 'DISABLED';

  restrictionCause?: ReturnPolicyAvailability.RestrictionCause | null;
}

export namespace ReturnPolicyAvailability {
  export interface RestrictionCause {
    description?: string;

    /**
     * Type of return policy restrictions. Required if range of policy is set to
     * RESTRICTED or DISABLED, otherwise must be empty. Selected restriction depends on
     * the chosen range of policy. Values 'ALCOHOL', 'FULLY_IMPLEMENTED_SERVICE' and
     * 'BOOKED_SERVICE' are deprecated and should no longer be used. Read more info
     * [PL](https://developer.allegro.pl/tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-zarzadzac-warunkami-zwrotow)
     * /
     * [EN](https://developer.allegro.pl/tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-manage-return-policies).
     */
    name?:
      | 'SEALED_MEDIA'
      | 'SEALED_ITEM_NO_RETURN_DUE_HEALTH_OR_HYGIENE'
      | 'CUSTOM_ITEM'
      | 'SHORT_SHELF_LIFE'
      | 'INSEPARABLY_LINKED'
      | 'PRESS'
      | 'MEDICINAL_PRODUCT'
      | 'NOT_RECORDED_DIGITAL_CONTENT'
      | 'VALUE_DEPENDENT_ON_FINANCIAL_MARKET'
      | 'ALCOHOL'
      | 'FULLY_IMPLEMENTED_SERVICE'
      | 'BOOKED_SERVICE';
  }
}

export interface ReturnPolicyContact {
  /**
   * A valid email address of the seller
   */
  email?: string | null;

  /**
   * A valid phone number of the seller
   */
  phoneNumber?: string | null;
}

/**
 * Can be null if availability range is 'DISABLED'.
 */
export interface ReturnPolicyOptions {
  /**
   * Returns for B2B purchases allowed
   */
  businessReturnAllowed: boolean;

  /**
   * Order sent back with cash on pickup is not allowed
   */
  cashOnDeliveryNotAllowed: boolean;

  /**
   * Return items are picked up by the seller
   */
  collectBySellerOnly: boolean;

  /**
   * If free accessories were added to the order, the client needs to send them back
   */
  freeAccessoriesReturnRequired: boolean;

  /**
   * If there was a discount granted after the order, the return is lowered by the
   * received discount
   */
  refundLoweredByReceivedDiscount: boolean;
}

export interface ReturnPolicyRequest {
  /**
   * The return address of the policy. Can be null if availability range is
   * 'DISABLED'.
   */
  address: ReturnPolicyAddress | null;

  availability: ReturnPolicyAvailability;

  /**
   * Return policy name.
   */
  name: string;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  options: ReturnPolicyOptions | null;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  returnCost: ReturnPolicyReturnCost | null;

  contact?: ReturnPolicyContact | null;

  /**
   * Period in ISO 8601 format. Only periods in full days are accepted.
   */
  withdrawalPeriod?: string;
}

export interface ReturnPolicyResponse {
  /**
   * The ID of the return policy definition.
   */
  id: string;

  availability: ReturnPolicyAvailability;

  /**
   * Return policy name.
   */
  name: string;

  seller: PointsOfServiceAPI.Seller;

  /**
   * The return address of the policy. Can be null if availability range is
   * 'DISABLED'.
   */
  address?: ReturnPolicyAddress | null;

  contact?: ReturnPolicyContact | null;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  options?: ReturnPolicyOptions | null;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  returnCost?: ReturnPolicyReturnCost | null;

  /**
   * Period in ISO 8601 format. Can be null if availability range is 'DISABLED'.
   */
  withdrawalPeriod?: string | null;
}

/**
 * Can be null if availability range is 'DISABLED'.
 */
export interface ReturnPolicyReturnCost {
  /**
   * Indicates who covers the return delivery costs.
   */
  coveredBy?: 'SELLER' | 'BUYER';
}

export interface ReturnPolicyListResponse {
  count?: number;

  returnPolicies?: Array<ReturnPolicyResponse>;
}

export interface ReturnPolicyCreateParams {
  /**
   * The return address of the policy. Can be null if availability range is
   * 'DISABLED'.
   */
  address: ReturnPolicyAddress | null;

  availability: ReturnPolicyAvailability;

  /**
   * Return policy name.
   */
  name: string;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  options: ReturnPolicyOptions | null;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  returnCost: ReturnPolicyReturnCost | null;

  contact?: ReturnPolicyContact | null;

  /**
   * Period in ISO 8601 format. Only periods in full days are accepted.
   */
  withdrawalPeriod?: string;
}

export interface ReturnPolicyUpdateParams {
  /**
   * The return address of the policy. Can be null if availability range is
   * 'DISABLED'.
   */
  address: ReturnPolicyAddress | null;

  availability: ReturnPolicyAvailability;

  /**
   * Return policy name.
   */
  name: string;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  options: ReturnPolicyOptions | null;

  /**
   * Can be null if availability range is 'DISABLED'.
   */
  returnCost: ReturnPolicyReturnCost | null;

  contact?: ReturnPolicyContact | null;

  /**
   * Period in ISO 8601 format. Only periods in full days are accepted.
   */
  withdrawalPeriod?: string;
}

export interface ReturnPolicyListParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace ReturnPolicies {
  export {
    type ReturnPolicyAddress as ReturnPolicyAddress,
    type ReturnPolicyAvailability as ReturnPolicyAvailability,
    type ReturnPolicyContact as ReturnPolicyContact,
    type ReturnPolicyOptions as ReturnPolicyOptions,
    type ReturnPolicyRequest as ReturnPolicyRequest,
    type ReturnPolicyResponse as ReturnPolicyResponse,
    type ReturnPolicyReturnCost as ReturnPolicyReturnCost,
    type ReturnPolicyListResponse as ReturnPolicyListResponse,
    type ReturnPolicyCreateParams as ReturnPolicyCreateParams,
    type ReturnPolicyUpdateParams as ReturnPolicyUpdateParams,
    type ReturnPolicyListParams as ReturnPolicyListParams,
  };
}

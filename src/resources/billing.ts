// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Billing extends APIResource {
  /**
   * The billing entries are sorted in a descending order (newest first) by date on
   * which they occurred. Read more:
   * <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-billingowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#billing-operations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.billing.listBillingEntries();
   * ```
   */
  listBillingEntries(
    query: BillingListBillingEntriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingListBillingEntriesResponse> {
    return this._client.get('/billing/billing-entries', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * List of all billing types. Type names are localized according to
   * "Accept-Language" header. Read more:
   * <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-billingowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#billing-operations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.billing.listBillingTypes();
   * ```
   */
  listBillingTypes(
    params: BillingListBillingTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingListBillingTypesResponse> {
    const { 'Accept-Language': acceptLanguage } = params ?? {};
    return this._client.get('/billing/billing-types', {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage != null ? { 'Accept-Language': acceptLanguage } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface BillingListBillingEntriesResponse {
  /**
   * List of billing types.
   */
  billingEntries?: Array<BillingListBillingEntriesResponse.BillingEntry>;
}

export namespace BillingListBillingEntriesResponse {
  export interface BillingEntry {
    /**
     * ID of the returned billing entry.
     */
    id?: string;

    /**
     * Additional information associated with the returned billing entry.
     */
    additionalInfo?: Array<BillingEntry.AdditionalInfo>;

    /**
     * User account balance calculated on billing date.
     */
    balance?: BillingEntry.Balance;

    /**
     * Date of billing entry.
     */
    occurredAt?: string;

    /**
     * Offer associated with the returned billing entry.
     */
    offer?: BillingEntry.Offer;

    /**
     * Order associated with the returned billing entry.
     */
    order?: BillingEntry.Order;

    /**
     * Tax rate applied to the returned billing entry. Optional field percentage is
     * present if the returned billing entry is subject to tax. In this case,
     * annotation is not returned. Optional field annotation is present if the returned
     * billing entry is exempt from tax or tax is not applicable; the possible value is
     * "OUT_OF_SCOPE". In this case, percentage is not returned.
     */
    tax?: BillingEntry.Tax;

    type?: BillingEntry.Type;

    /**
     * Money value of the returned billing entry.
     */
    value?: BillingEntry.Value;
  }

  export namespace BillingEntry {
    export interface AdditionalInfo {
      /**
       * The display name for the additional information type. This value is translated
       * based on the "Accept-Language" header. By default a message in English is
       * returned.
       */
      name?: string;

      /**
       * The technical key identifying the type of additional information.
       */
      type?: string;

      /**
       * The actual value associated with the given additional information type.
       */
      value?: string;
    }

    /**
     * User account balance calculated on billing date.
     */
    export interface Balance {
      /**
       * Monetary amount of the balance calculated for the returned billing entry.
       */
      amount?: string;

      /**
       * Three-letter currency code (ISO-4217) of the balance of the returned billing
       * entry.
       */
      currency?: string;
    }

    /**
     * Offer associated with the returned billing entry.
     */
    export interface Offer {
      /**
       * ID of the offer associated with the billing entry.
       */
      id?: string;

      /**
       * Name of the offer associated with the billing entry. This field is populated
       * asynchronously, which means the value may appear with a delay.
       */
      name?: string;
    }

    /**
     * Order associated with the returned billing entry.
     */
    export interface Order {
      /**
       * Order id
       */
      id?: string;
    }

    /**
     * Tax rate applied to the returned billing entry. Optional field percentage is
     * present if the returned billing entry is subject to tax. In this case,
     * annotation is not returned. Optional field annotation is present if the returned
     * billing entry is exempt from tax or tax is not applicable; the possible value is
     * "OUT_OF_SCOPE". In this case, percentage is not returned.
     */
    export interface Tax {
      /**
       * Optional annotation explaining the tax rate.
       */
      annotation?: string;

      /**
       * Optional tax rate shown as a number in the range 0-100.
       */
      percentage?: string;
    }

    export interface Type {
      /**
       * Three-letter code of the billing type of the returned billing entry.
       */
      id?: string;

      /**
       * Billing type of the returned billing entry. This type is translated based on the
       * value of the "Accept-Language" header. By default a message in English is
       * returned.
       */
      name?: string;
    }

    /**
     * Money value of the returned billing entry.
     */
    export interface Value {
      /**
       * Monetary amount of the returned billing entry.
       */
      amount?: string;

      /**
       * Three-letter currency code (ISO-4217) of the returned billing entry.
       */
      currency?: string;
    }
  }
}

/**
 * List of billing types.
 */
export type BillingListBillingTypesResponse =
  Array<BillingListBillingTypesResponse.BillingListBillingTypesResponseItem>;

export namespace BillingListBillingTypesResponse {
  export interface BillingListBillingTypesResponseItem {
    /**
     * ID of the billing type.
     */
    id?: string;

    /**
     * Localized type name.
     */
    description?: string;
  }
}

export interface BillingListBillingEntriesParams {
  /**
   * Number of returned operations.
   */
  limit?: number;

  /**
   * The marketplace ID where operation was made. By default the marketplace ID where
   * the user is registered. **Note:** Business marketplace is not a separate user's
   * billing and defaults back to the main marketplace for given country.
   */
  marketplaceId?: string;

  occurredAt?: BillingListBillingEntriesParams.OccurredAt;

  offer?: BillingListBillingEntriesParams.Offer;

  /**
   * Index of the first returned payment operation from all search results.
   */
  offset?: number;

  order?: BillingListBillingEntriesParams.Order;

  type?: BillingListBillingEntriesParams.Type;
}

export namespace BillingListBillingEntriesParams {
  export interface OccurredAt {
    /**
     * Date from which billing entries are filtered. If occurredAt.lte is also set,
     * occurredAt.gte cannot be later.
     */
    gte?: string;

    /**
     * Date to which billing entries are filtered. If occurredAt.gte is also set,
     * occurredAt.lte cannot be earlier.
     */
    lte?: string;
  }

  export interface Offer {
    /**
     * Offer ID by which billing entries are filtered.
     */
    id?: string;
  }

  export interface Order {
    /**
     * Order UUID by which billing entries are filtered.
     */
    id?: string;
  }

  export interface Type {
    /**
     * List of billing types by which billing entries are filtered.
     */
    id?: Array<string>;
  }
}

export interface BillingListBillingTypesParams {
  /**
   * Expected language of name translations.
   */
  'Accept-Language'?: string;
}

export declare namespace Billing {
  export {
    type BillingListBillingEntriesResponse as BillingListBillingEntriesResponse,
    type BillingListBillingTypesResponse as BillingListBillingTypesResponse,
    type BillingListBillingEntriesParams as BillingListBillingEntriesParams,
    type BillingListBillingTypesParams as BillingListBillingTypesParams,
  };
}

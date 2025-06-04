// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class RefundClaims extends APIResource {
  /**
   * Use this resource to create a refund application. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-utworzyc-wniosek-o-rabat-transakcyjny" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-create-a-sale-commission-refund-application" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const refundClaim =
   *   await client.order.refundClaims.create();
   * ```
   */
  create(body: RefundClaimCreateParams, options?: RequestOptions): APIPromise<RefundClaimCreateResponse> {
    return this._client.post('/order/refund-claims', {
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
   * Use this resource to get refund application details. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-pojedynczy-wniosek-o-rabat-transakcyjny" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-single-sale-commission-refund" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const refundClaim =
   *   await client.order.refundClaims.retrieve('claimId');
   * ```
   */
  retrieve(claimID: string, options?: RequestOptions): APIPromise<RefundClaim> {
    return this._client.get(path`/order/refund-claims/${claimID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of refund applications based on the provided
   * query parameters. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-utworzonych-wnioskow-o-rabat-transakcyjny" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-list-of-sale-commission-refunds" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const refundClaims = await client.order.refundClaims.list();
   * ```
   */
  list(
    query: RefundClaimListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RefundClaimListResponse> {
    return this._client.get('/order/refund-claims', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to cancel a refund application. This cannot be undone. Read
   * more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-anulowac-wniosek-o-rabat-transakcyjny" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-cancel-sale-commission-refund" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.order.refundClaims.cancel('claimId');
   * ```
   */
  cancel(claimID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/order/refund-claims/${claimID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Detailed information about the refund application.
 */
export interface RefundClaim {
  /**
   * ID of the returned refund application.
   */
  id?: string;

  /**
   * Buyer associated with the refund application.
   */
  buyer?: RefundClaim.Buyer;

  /**
   * Money value of the returned refund application.
   */
  commission?: RefundClaim.Commission;

  /**
   * Date when the refund application was created.
   */
  createdAt?: string;

  /**
   * Purchase associated with the refund application.
   */
  lineItem?: RefundClaim.LineItem;

  /**
   * Quantity of product for which the seller filed the refund application.
   */
  quantity?: number;

  /**
   * Status of the returned refund application. - `IN_PROGRESS` - the application is
   * being processed or awaits user or admin action. - `WAITING_FOR_PAYMENT_REFUND` -
   * the application is being processed and awaits payment refund to buyer. -
   * `GRANTED` - the application was accepted and a commission refund was granted as
   * requested, or the application was rejected and the seller successfully appealed.
   *
   * - `REJECTED` - the application was rejected and no commission was refunded. -
   *   `REJECTED_AFTER_APPEAL` - the application was initially rejected and the
   *   seller unsuccessfully appealed. - `CANCELLED` - the application was cancelled
   *   by the seller. - `APPEALED` - the application was rejected and the seller
   *   appealed, but the appeal has not yet finished processing.
   */
  status?:
    | 'IN_PROGRESS'
    | 'WAITING_FOR_PAYMENT_REFUND'
    | 'GRANTED'
    | 'REJECTED'
    | 'REJECTED_AFTER_APPEAL'
    | 'CANCELLED'
    | 'APPEALED';

  /**
   * Type of commission refund application. - `MANUAL` - the application was created
   * manually by the seller. - `AUTOMATIC` - the application was created
   * automatically.
   */
  type?: 'MANUAL' | 'AUTOMATIC';
}

export namespace RefundClaim {
  /**
   * Buyer associated with the refund application.
   */
  export interface Buyer {
    /**
     * ID of the buyer associated with the refund application.
     */
    id?: string;

    /**
     * Login of the buyer associated with the refund application.
     */
    login?: string;
  }

  /**
   * Money value of the returned refund application.
   */
  export interface Commission {
    /**
     * Monetary amount of the returned refund application.
     */
    amount?: number;

    /**
     * Three-letter currency code (ISO-4217) of the returned refund application.
     */
    currency?: string;
  }

  /**
   * Purchase associated with the refund application.
   */
  export interface LineItem {
    /**
     * ID of the purchase associated with the refund application.
     */
    id?: string;

    /**
     * Date when the purchase was made.
     */
    boughtAt?: string;

    /**
     * Offer associated with the purchase.
     */
    offer?: LineItem.Offer;

    /**
     * Total quantity of product purchased by the buyer. Equal to or greater than
     * quantity for which the seller filed the refund application.
     */
    quantity?: number;
  }

  export namespace LineItem {
    /**
     * Offer associated with the purchase.
     */
    export interface Offer {
      /**
       * ID of the offer associated with the purchase.
       */
      id?: string;

      /**
       * Name of the offer associated with the purchase.
       */
      name?: string;
    }
  }
}

export interface RefundClaimCreateResponse {
  /**
   * ID of created claim.
   */
  id?: string;
}

export interface RefundClaimListResponse {
  /**
   * Count of refund applications returned.
   */
  count?: number;

  /**
   * Collection of refund applications.
   */
  refundClaims?: Array<RefundClaim>;
}

export interface RefundClaimCreateParams {
  /**
   * Purchase for which a refund application will be created.
   */
  lineItem?: RefundClaimCreateParams.LineItem;

  /**
   * Quantity of product for which the refund application will be created. Must be
   * greater than zero.
   */
  quantity?: number;
}

export namespace RefundClaimCreateParams {
  /**
   * Purchase for which a refund application will be created.
   */
  export interface LineItem {
    /**
     * ID of the purchase for which a refund application will be created.
     */
    id?: string;
  }
}

export interface RefundClaimListParams {
  buyer?: RefundClaimListParams.Buyer;

  /**
   * Maximum number of returned refund applications in response.
   */
  limit?: number;

  lineItem?: RefundClaimListParams.LineItem;

  /**
   * Index of the first returned refund application from all search results.
   */
  offset?: number;

  /**
   * Status of the refund application.
   */
  status?:
    | 'IN_PROGRESS'
    | 'WAITING_FOR_PAYMENT_REFUND'
    | 'GRANTED'
    | 'REJECTED'
    | 'REJECTED_AFTER_APPEAL'
    | 'CANCELLED'
    | 'APPEALED';
}

export namespace RefundClaimListParams {
  export interface Buyer {
    /**
     * Login of the buyer that made the purchase associated with the refund
     * application.
     */
    login?: string;
  }

  export interface LineItem {
    /**
     * ID of the offer associated with the refund application.
     */
    offer?: string;
  }
}

export declare namespace RefundClaims {
  export {
    type RefundClaim as RefundClaim,
    type RefundClaimCreateResponse as RefundClaimCreateResponse,
    type RefundClaimListResponse as RefundClaimListResponse,
    type RefundClaimCreateParams as RefundClaimCreateParams,
    type RefundClaimListParams as RefundClaimListParams,
  };
}

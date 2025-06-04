// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RefundsAPI from './refunds';
import {
  PaymentsSurcharge,
  RefundAdditionalServicesValue,
  RefundCreateParams,
  RefundDeliveryValue,
  RefundDetails,
  RefundLineItem,
  RefundListParams,
  RefundListResponse,
  RefundOverpaidValue,
  RefundPayment,
  Refunds,
} from './refunds';
import * as BidAPI from '../bidding/offers/bid';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Payments extends APIResource {
  refunds: RefundsAPI.Refunds = new RefundsAPI.Refunds(this._client);

  /**
   * Use this endpoint to get the list of the seller payment operations. Read more:
   * <a href="../../tutorials/jak-sprawdzic-oplaty-nn9DOL5PASX#historia-operacji-platniczych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-check-the-fees-3An6Wame3Um#payment-operations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.payments.listOperations();
   * ```
   */
  listOperations(
    query: PaymentListOperationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentListOperationsResponse> {
    return this._client.get('/payments/payment-operations', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface PaymentListOperationsResponse {
  /**
   * Number of payment operations returned in search result for the given parameters.
   */
  count: number;

  /**
   * Collection of payment operations.
   */
  paymentOperations: Array<PaymentListOperationsResponse.PaymentOperation>;

  /**
   * Total number of payment operations for the given parameters.
   */
  totalCount: number;
}

export namespace PaymentListOperationsResponse {
  export interface PaymentOperation {
    /**
     * The group to which the given operation type belongs.
     */
    group: 'INCOME' | 'OUTCOME' | 'REFUND' | 'BLOCKADES';

    /**
     * Date and time of the operation in ISO 8601 format.
     */
    occurredAt: string;

    /**
     * Type of the operation.
     */
    type: string;

    /**
     * The operation value.
     */
    value: PaymentOperation.Value;

    /**
     * The state of the wallet after the operation.
     */
    wallet: PaymentOperation.Wallet;

    /**
     * The marketplace ID where operation was made. Value may be `null` for operations
     * not assigned to any marketplace.
     */
    marketplaceId?: string;
  }

  export namespace PaymentOperation {
    /**
     * The operation value.
     */
    export interface Value extends BidAPI.Price {}

    /**
     * The state of the wallet after the operation.
     */
    export interface Wallet {
      /**
       * The wallet balance after the operation.
       */
      balance: Wallet.Balance;

      /**
       * The payment operator.
       */
      paymentOperator: 'PAYU' | 'P24' | 'AF' | 'AF_PAYU' | 'AF_P24';

      /**
       * The type of the wallet.
       */
      type: 'AVAILABLE' | 'WAITING';
    }

    export namespace Wallet {
      /**
       * The wallet balance after the operation.
       */
      export interface Balance extends BidAPI.Price {}
    }
  }
}

export interface PaymentListOperationsParams {
  /**
   * Currency of the operations.
   */
  currency?: string;

  /**
   * Group of operation types: _ INCOME - CONTRIBUTION, SURCHARGE, CORRECTION,
   * DEDUCTION_INCREASE, COMPENSATION. _ OUTCOME - PAYOUT, PAYOUT_CANCEL,
   * DEDUCTION_CHARGE. _ REFUND - REFUND_CHARGE, REFUND_CANCEL, REFUND_INCREASE,
   * CORRECTION, PROVIDER_REFUND_TRANSFER_CHARGE, PROVIDER_REFUND_TRANSFER_INCREASE.
   * _ BLOCKADES - BLOCKADE, BLOCKADE_RELEASE.
   */
  group?: Array<'INCOME' | 'OUTCOME' | 'REFUND' | 'BLOCKADES'>;

  /**
   * Number of returned operations.
   */
  limit?: number;

  /**
   * The marketplace ID where operation was made. When the parameter is omitted,
   * searches for operations with all marketplaces. Note, that there are operations
   * not assigned to any marketplace.
   */
  marketplaceId?: 'allegro-pl' | 'allegro-cz';

  occurredAt?: PaymentListOperationsParams.OccurredAt;

  /**
   * Index of the first returned payment operation from all search results.
   */
  offset?: number;

  participant?: PaymentListOperationsParams.Participant;

  payment?: PaymentListOperationsParams.Payment;

  wallet?: PaymentListOperationsParams.Wallet;
}

export namespace PaymentListOperationsParams {
  export interface OccurredAt {
    /**
     * The minimum date and time of operation occurrence in ISO 8601 format.
     */
    gte?: string;

    /**
     * The maximum date and time of operation occurrence in ISO 8601 format.
     */
    lte?: string;
  }

  export interface Participant {
    /**
     * Login of the participant. In case of REFUND_INCREASE operation this is the login
     * of the seller, in other cases, of the buyer.
     */
    login?: string;
  }

  export interface Payment {
    /**
     * The payment ID.
     */
    id?: string;
  }

  export interface Wallet {
    /**
     * Payment operator: _ PAYU - operations processed by PAYU operator. _ P24 -
     * operations processed by PRZELEWY24 operator. _ AF - operations processed by
     * Allegro Finance operator. _ AF_P24 - operations processed by Allegro Finance
     * with PRZELEWY24. \* AF_PAYU - operations processed by Allegro Finance with PAYU.
     */
    paymentOperator?: 'PAYU' | 'P24' | 'AF' | 'AF_P24' | 'AF_PAYU';

    /**
     * Type of the wallet: _ AVAILABLE - operations available for payout. _ WAITING -
     * operations temporarily suspended for payout.
     */
    type?: 'AVAILABLE' | 'WAITING';
  }
}

Payments.Refunds = Refunds;

export declare namespace Payments {
  export {
    type PaymentListOperationsResponse as PaymentListOperationsResponse,
    type PaymentListOperationsParams as PaymentListOperationsParams,
  };

  export {
    Refunds as Refunds,
    type PaymentsSurcharge as PaymentsSurcharge,
    type RefundAdditionalServicesValue as RefundAdditionalServicesValue,
    type RefundDeliveryValue as RefundDeliveryValue,
    type RefundDetails as RefundDetails,
    type RefundLineItem as RefundLineItem,
    type RefundOverpaidValue as RefundOverpaidValue,
    type RefundPayment as RefundPayment,
    type RefundListResponse as RefundListResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundListParams as RefundListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RefundsAPI from './refunds';
import * as BidAPI from '../bidding/offers/bid';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Refunds extends APIResource {
  /**
   * Use this endpoint to initiate a refund of a payment. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-wykonac-zwrot-platnosci" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-refund-a-payment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const refundDetails = await client.payments.refunds.create({
   *   payment: {},
   *   reason: 'REFUND',
   * });
   * ```
   */
  create(body: RefundCreateParams, options?: RequestOptions): APIPromise<RefundDetails> {
    return this._client.post('/payments/refunds', {
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
   * Get a list of refunded payments. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-zwrotow-platnosci" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-a-list-of-refunded-payment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const refunds = await client.payments.refunds.list();
   * ```
   */
  list(
    query: RefundListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RefundListResponse> {
    return this._client.get('/payments/refunds', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface PaymentsSurcharge {
  /**
   * The payment identifier.
   */
  id?: string;

  /**
   * Surcharge refund amount.
   */
  value?: PaymentsSurcharge.Value;
}

export namespace PaymentsSurcharge {
  /**
   * Surcharge refund amount.
   */
  export interface Value extends BidAPI.Price {}
}

/**
 * Additional services amount for payment refund.
 */
export interface RefundAdditionalServicesValue extends BidAPI.Price {}

/**
 * Delivery amount for payment refund.
 */
export interface RefundDeliveryValue extends BidAPI.Price {}

/**
 * Detailed information about the refund.
 */
export interface RefundDetails {
  /**
   * The payment refund identifier.
   */
  id: string;

  /**
   * Date and time when the refund was created provided in ISO 8601 format.
   */
  createdAt: string;

  /**
   * Payment affected by refund operation.
   */
  payment: RefundPayment;

  /**
   * Reason for a payment refund.
   */
  reason:
    | 'REFUND'
    | 'COMPLAINT'
    | 'PRODUCT_NOT_AVAILABLE'
    | 'PAID_VALUE_TOO_LOW'
    | 'OVERPAID'
    | 'CANCELLED_BY_BUYER'
    | 'NOT_COLLECTED';

  /**
   * Current status of payment refund.
   */
  status: 'SUCCESS' | 'CANCELED' | 'PARTIAL' | 'IN_PROGRESS' | 'VALIDATED' | 'VALIDATE_FAILED' | 'NEW';

  /**
   * Total amount for payment refund.
   */
  totalValue: RefundDetails.TotalValue;

  /**
   * Payment refund for additional services.
   */
  additionalServices?: RefundDetails.AdditionalServices;

  /**
   * Payment refund for delivery.
   */
  delivery?: RefundDetails.Delivery;

  /**
   * List of order's line items which can be refunded.
   */
  lineItems?: Array<RefundLineItem>;

  /**
   * Payment refund for overpaid.
   */
  overpaid?: RefundDetails.Overpaid;

  /**
   * Sellers optional justification for refund.
   */
  sellerComment?: string;

  /**
   * List of surcharges for payment which can be refunded.
   */
  surcharges?: Array<PaymentsSurcharge>;
}

export namespace RefundDetails {
  /**
   * Total amount for payment refund.
   */
  export interface TotalValue extends BidAPI.Price {}

  /**
   * Payment refund for additional services.
   */
  export interface AdditionalServices {
    /**
     * Additional services amount for payment refund.
     */
    value?: RefundsAPI.RefundAdditionalServicesValue;
  }

  /**
   * Payment refund for delivery.
   */
  export interface Delivery {
    /**
     * Delivery amount for payment refund.
     */
    value?: RefundsAPI.RefundDeliveryValue;
  }

  /**
   * Payment refund for overpaid.
   */
  export interface Overpaid {
    /**
     * Overpaid amount for payment refund.
     */
    value?: RefundsAPI.RefundOverpaidValue;
  }
}

export interface RefundLineItem {
  /**
   * The line-item identifier.
   */
  id: string;

  /**
   * Type for line items refund. QUANTITY is provided when you can refund one or more
   * items. AMOUNT is provided when you can refund a partial price.
   */
  type: 'AMOUNT' | 'QUANTITY';

  /**
   * This field is provided for QUANTITY type only. It specifies how many items will
   * be refunded.
   */
  quantity?: number;

  /**
   * This field is available for AMOUNT type only and specifies the amount refunded
   * to the customer.
   */
  value?: RefundLineItem.Value | null;
}

export namespace RefundLineItem {
  /**
   * This field is available for AMOUNT type only and specifies the amount refunded
   * to the customer.
   */
  export interface Value {
    /**
     * The amount provided in a string format to avoid rounding errors.
     */
    amount: string;

    /**
     * The currency provided as a 3-letter code in accordance with ISO 4217 standard
     * (https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency: string;
  }
}

/**
 * Overpaid amount for payment refund.
 */
export interface RefundOverpaidValue extends BidAPI.Price {}

/**
 * Payment affected by refund operation.
 */
export interface RefundPayment {
  /**
   * The payment identifier.
   */
  id?: string;
}

export interface RefundListResponse {
  /**
   * Number of payment operations returned in search result for the given parameters.
   */
  count?: number;

  /**
   * Collection of payments refunds.
   */
  refunds?: Array<RefundDetails>;

  /**
   * Total number of payment operations for the given parameters.
   */
  totalCount?: number;
}

export interface RefundCreateParams {
  /**
   * Payment affected by refund operation.
   */
  payment: RefundPayment;

  /**
   * Reason for a payment refund.
   */
  reason:
    | 'REFUND'
    | 'COMPLAINT'
    | 'PRODUCT_NOT_AVAILABLE'
    | 'PAID_VALUE_TOO_LOW'
    | 'OVERPAID'
    | 'CANCELLED_BY_BUYER'
    | 'NOT_COLLECTED';

  /**
   * Payment refund for additional services.
   */
  additionalServices?: RefundCreateParams.AdditionalServices;

  /**
   * Payment refund for delivery.
   */
  delivery?: RefundCreateParams.Delivery;

  /**
   * List of order's line items which can be refunded.
   */
  lineItems?: Array<RefundLineItem>;

  /**
   * Payment refund for overpaid.
   */
  overpaid?: RefundCreateParams.Overpaid;

  /**
   * Sellers optional justification for refund.
   */
  sellerComment?: string;

  /**
   * List of surcharges for payment which can be refunded.
   */
  surcharges?: Array<PaymentsSurcharge>;
}

export namespace RefundCreateParams {
  /**
   * Payment refund for additional services.
   */
  export interface AdditionalServices {
    /**
     * Additional services amount for payment refund.
     */
    value?: RefundsAPI.RefundAdditionalServicesValue;
  }

  /**
   * Payment refund for delivery.
   */
  export interface Delivery {
    /**
     * Delivery amount for payment refund.
     */
    value?: RefundsAPI.RefundDeliveryValue;
  }

  /**
   * Payment refund for overpaid.
   */
  export interface Overpaid {
    /**
     * Overpaid amount for payment refund.
     */
    value?: RefundsAPI.RefundOverpaidValue;
  }
}

export interface RefundListParams {
  /**
   * ID of the refund.
   */
  id?: string;

  /**
   * Number of returned operations.
   */
  limit?: number;

  occurredAt?: RefundListParams.OccurredAt;

  /**
   * Index of the first returned payment operation from all search results.
   */
  offset?: number;

  payment?: RefundListParams.Payment;

  /**
   * Current status of payment refund.
   */
  status?: Array<'WAITING' | 'IN_PROGRESS' | 'SUCCESS' | 'CANCELED' | 'PARTIAL'>;
}

export namespace RefundListParams {
  export interface OccurredAt {
    /**
     * Minimum date and time when the refund occurred provided in ISO 8601 format.
     */
    gte?: string;

    /**
     * Maximum date and time when the refund occurred provided in ISO 8601 format.
     */
    lte?: string;
  }

  export interface Payment {
    /**
     * ID of the payment.
     */
    id?: string;
  }
}

export declare namespace Refunds {
  export {
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

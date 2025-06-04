// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomerReturnsAPI from './customer-returns';
import {
  CustomerReturn,
  CustomerReturnListParams,
  CustomerReturnListResponse,
  CustomerReturnRejectRefundParams,
  CustomerReturns,
} from './customer-returns';
import * as RefundClaimsAPI from './refund-claims';
import {
  RefundClaim,
  RefundClaimCreateParams,
  RefundClaimCreateResponse,
  RefundClaimListParams,
  RefundClaimListResponse,
  RefundClaims,
} from './refund-claims';
import * as ProductOffersAPI from '../sale/product-offers';
import * as BidAPI from '../bidding/offers/bid';
import * as CarriersAPI from './carriers/carriers';
import {
  CarrierGetTrackingParams,
  CarrierGetTrackingResponse,
  CarrierListResponse,
  Carriers,
} from './carriers/carriers';
import * as CheckoutFormsAPI from './checkout-forms/checkout-forms';
import {
  BuyerPreferencesReference,
  CheckoutForm as CheckoutFormsAPICheckoutForm,
  CheckoutFormFulfillment,
  CheckoutFormListParams,
  CheckoutFormListResponse,
  CheckoutFormPaymentReference,
  CheckoutFormUpdateFulfillmentParams,
  CheckoutForms,
} from './checkout-forms/checkout-forms';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Order extends APIResource {
  checkoutForms: CheckoutFormsAPI.CheckoutForms = new CheckoutFormsAPI.CheckoutForms(this._client);
  carriers: CarriersAPI.Carriers = new CarriersAPI.Carriers(this._client);
  refundClaims: RefundClaimsAPI.RefundClaims = new RefundClaimsAPI.RefundClaims(this._client);
  customerReturns: CustomerReturnsAPI.CustomerReturns = new CustomerReturnsAPI.CustomerReturns(this._client);

  /**
   * Use this resource to returns object that contains event id and occurrence date
   * of the latest event. It gives you current starting point for reading events.
   * Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-znalezc-najnowsze-zdarzenie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-find-the-newest-event" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.order.getEventStats();
   * ```
   */
  getEventStats(options?: RequestOptions): APIPromise<OrderGetEventStatsResponse> {
    return this._client.get('/order/event-stats', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to return events that allow you to monitor actions which
   * clients perform, i.e. making a purchase, filling in the checkout form (FOD),
   * finishing payment process, making a surcharge. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#dziennik-zdarzen" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#event-log" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.order.listEvents();
   * ```
   */
  listEvents(
    query: OrderListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrderListEventsResponse> {
    return this._client.get('/order/events', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Event statistics, currently contains only basic information about the latest
 * event.
 */
export interface OrderGetEventStatsResponse {
  /**
   * Basic information about the latest order event.
   */
  latestEvent?: OrderGetEventStatsResponse.LatestEvent;
}

export namespace OrderGetEventStatsResponse {
  /**
   * Basic information about the latest order event.
   */
  export interface LatestEvent {
    /**
     * event id
     */
    id: string;

    /**
     * Date when the event occurred
     */
    occurredAt: string;
  }
}

/**
 * Order events list
 */
export interface OrderListEventsResponse {
  events: Array<OrderListEventsResponse.Event>;
}

export namespace OrderListEventsResponse {
  /**
   * Order event
   */
  export interface Event {
    /**
     * event id
     */
    id: string;

    /**
     * Date when the event occurred
     */
    occurredAt: string;

    /**
     * Order event data
     */
    order: Event.Order;

    /**
     * Type of order event. _ `BOUGHT` - purchase without checkout form filled in _
     * `FILLED_IN` - checkout form filled in but payment is not completed yet so data
     * could still change _ `READY_FOR_PROCESSING` - payment completed. Purchase is
     * ready for processing. _ `BUYER_CANCELLED` - purchase cancelled by buyer _
     * `FULFILLMENT_STATUS_CHANGED`: fulfillment status changed. _ `BUYER_MODIFIED` -
     * purchase modified by buyer \* `AUTO_CANCELLED` - purchase cancelled
     * automatically by Allegro
     */
    type:
      | 'BOUGHT'
      | 'FILLED_IN'
      | 'READY_FOR_PROCESSING'
      | 'BUYER_CANCELLED'
      | 'FULFILLMENT_STATUS_CHANGED'
      | 'BUYER_MODIFIED'
      | 'AUTO_CANCELLED';
  }

  export namespace Event {
    /**
     * Order event data
     */
    export interface Order {
      /**
       * Buyer data
       */
      buyer: Order.Buyer;

      lineItems: Array<Order.LineItem>;

      /**
       * Seller identifier
       */
      seller: Order.Seller;

      checkoutForm?: Order.CheckoutForm;

      marketplace?: Order.Marketplace;
    }

    export namespace Order {
      /**
       * Buyer data
       */
      export interface Buyer {
        /**
         * buyer id
         */
        id: string;

        email: string;

        /**
         * is a guest account?
         */
        guest: boolean;

        login: string;

        preferences?: CheckoutFormsAPI.BuyerPreferencesReference;
      }

      /**
       * Order item
       */
      export interface LineItem {
        /**
         * Order item identifier
         */
        id: string;

        /**
         * Offer identifier.
         */
        offer: LineItem.Offer;

        /**
         * The price data.
         */
        price: BidAPI.Price;

        /**
         * quantity
         */
        quantity: number;

        /**
         * ISO date when offer was bought
         */
        boughtAt?: string;

        /**
         * The price data.
         */
        originalPrice?: BidAPI.Price;
      }

      export namespace LineItem {
        /**
         * Offer identifier.
         */
        export interface Offer {
          id: string;

          /**
           * Offer name.
           */
          name: string;

          /**
           * The information on the offer in an external system.
           */
          external?: ProductOffersAPI.ExternalID;
        }
      }

      /**
       * Seller identifier
       */
      export interface Seller {
        id: string;
      }

      export interface CheckoutForm {
        /**
         * Checkout form identifier
         */
        id: string;

        /**
         * Checkout form revision
         */
        revision?: string;
      }

      export interface Marketplace {
        /**
         * Id of the purchase marketplace
         */
        id: string;
      }
    }
  }
}

export interface OrderListEventsParams {
  /**
   * You can use the event ID to retrieve subsequent chunks of events.
   */
  from?: string;

  /**
   * The maximum number of events returned in the response.
   */
  limit?: number;

  /**
   * Specify array of event types for filtering. Allowed values are:
   *
   * - `BOUGHT`: purchase without checkout form filled in
   * - `FILLED_IN`: checkout form filled in but payment is not completed yet so data
   *   could still change
   * - `READY_FOR_PROCESSING`: payment completed. Purchase is ready for processing
   * - `BUYER_CANCELLED`: purchase was cancelled by buyer
   * - `FULFILLMENT_STATUS_CHANGED`: fulfillment status changed
   * - `AUTO_CANCELLED`: purchase was cancelled automatically by Allegro.
   */
  type?: Array<string>;
}

Order.CheckoutForms = CheckoutForms;
Order.Carriers = Carriers;
Order.RefundClaims = RefundClaims;
Order.CustomerReturns = CustomerReturns;

export declare namespace Order {
  export {
    type OrderGetEventStatsResponse as OrderGetEventStatsResponse,
    type OrderListEventsResponse as OrderListEventsResponse,
    type OrderListEventsParams as OrderListEventsParams,
  };

  export {
    CheckoutForms as CheckoutForms,
    type BuyerPreferencesReference as BuyerPreferencesReference,
    type CheckoutFormsAPICheckoutForm as CheckoutForm,
    type CheckoutFormFulfillment as CheckoutFormFulfillment,
    type CheckoutFormPaymentReference as CheckoutFormPaymentReference,
    type CheckoutFormListResponse as CheckoutFormListResponse,
    type CheckoutFormListParams as CheckoutFormListParams,
    type CheckoutFormUpdateFulfillmentParams as CheckoutFormUpdateFulfillmentParams,
  };

  export {
    Carriers as Carriers,
    type CarrierListResponse as CarrierListResponse,
    type CarrierGetTrackingResponse as CarrierGetTrackingResponse,
    type CarrierGetTrackingParams as CarrierGetTrackingParams,
  };

  export {
    RefundClaims as RefundClaims,
    type RefundClaim as RefundClaim,
    type RefundClaimCreateResponse as RefundClaimCreateResponse,
    type RefundClaimListResponse as RefundClaimListResponse,
    type RefundClaimCreateParams as RefundClaimCreateParams,
    type RefundClaimListParams as RefundClaimListParams,
  };

  export {
    CustomerReturns as CustomerReturns,
    type CustomerReturn as CustomerReturn,
    type CustomerReturnListResponse as CustomerReturnListResponse,
    type CustomerReturnListParams as CustomerReturnListParams,
    type CustomerReturnRejectRefundParams as CustomerReturnRejectRefundParams,
  };
}

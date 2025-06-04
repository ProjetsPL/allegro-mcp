// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BidAPI from '../bidding/offers/bid';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CustomerReturns extends APIResource {
  /**
   * Use this resource to get customer returns by its identifier. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-szczegolowe-informacje-o-zwrocie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-detailed-information-about-customer-return" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const customerReturn =
   *   await client.order.customerReturns.retrieve(
   *     'customerReturnId',
   *   );
   * ```
   */
  retrieve(customerReturnID: string, options?: RequestOptions): APIPromise<CustomerReturn> {
    return this._client.get(path`/order/customer-returns/${customerReturnID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.beta.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get all customer returns filtered by query parameters. Read
   * more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-liste-zwrotow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-retrieve-customer-returns-list" target="_blank">EN</a>.
   * This resource is limited to 25 requests per second for a single user and 50
   * requests per second for clientId.
   *
   * @example
   * ```ts
   * const customerReturns =
   *   await client.order.customerReturns.list();
   * ```
   */
  list(
    query: CustomerReturnListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CustomerReturnListResponse> {
    return this._client.get('/order/customer-returns', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.beta.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to reject customer return refund with provided reason. Read
   * more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-odmowic-zwrotu-wplaty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#how-to-reject-customer-return-refund" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const customerReturn =
   *   await client.order.customerReturns.rejectRefund(
   *     'customerReturnId',
   *     { rejection: { code: 'REFUND_REJECTED' } },
   *   );
   * ```
   */
  rejectRefund(
    customerReturnID: string,
    body: CustomerReturnRejectRefundParams,
    options?: RequestOptions,
  ): APIPromise<CustomerReturn> {
    return this._client.post(path`/order/customer-returns/${customerReturnID}/rejection`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.beta.v1+json',
          Accept: 'application/vnd.allegro.beta.v1+json',
        },
        options?.headers,
      ]),
    });
  }
}

export interface CustomerReturn {
  id?: string;

  buyer?: CustomerReturn.Buyer;

  createdAt?: string;

  /**
   * List of returned items.
   */
  items?: Array<CustomerReturn.Item>;

  /**
   * The marketplace ID where operation was made.
   */
  marketplaceId?: string;

  orderId?: string;

  /**
   * List of returned parcels.
   */
  parcels?: Array<CustomerReturn.Parcel>;

  referenceNumber?: string;

  /**
   * This field is present in the case of cash on delivery, bank transfer, Allegro
   * Pay, and Allegro Pay Business payment options.
   */
  refund?: CustomerReturn.Refund;

  rejection?: CustomerReturn.Rejection;

  /**
   * Current return timeline statuses. The allowed values are:
   *
   * - CREATED - The return has been declared,
   * - DISPATCHED - The returned items have been dispatched,
   * - IN_TRANSIT - The returned items are in transit,
   * - DELIVERED - The returned items have been delivered,
   * - FINISHED - The payment has been refunded, return process is finished,
   * - FINISHED_APT - The payment has been refunded by Allegro Protect, return
   *   process is finished,
   * - REJECTED - The return has been rejected,
   * - COMMISSION_REFUND_CLAIMED - The sales commission refund (transaction rebate)
   *   application has been claimed,
   * - COMMISSION_REFUNDED - The sales commission was refunded,
   * - WAREHOUSE_DELIVERED - The returned items have been delivered to Allegro
   *   Warehouse,
   * - WAREHOUSE_VERIFICATION - The returned items are under verification.
   */
  status?: string;
}

export namespace CustomerReturn {
  export interface Buyer {
    email?: string;

    login?: string;
  }

  export interface Item {
    name?: string;

    offerId?: string;

    /**
     * The price data.
     */
    price?: BidAPI.Price;

    quantity?: number;

    reason?: Item.Reason;

    url?: string;
  }

  export namespace Item {
    export interface Reason {
      /**
       * Possible values: "NONE", "MISTAKE", "TRANSPORT", "DAMAGED", "NOT_AS_DESCRIBED",
       * "DONT_LIKE_IT", "OVERDUE_DELIVERY", "INCOMPLETE", "HIDDEN_FLAW", "OTHER_FLAW",
       * "DIFFERENT", "COUNTERFEIT".
       */
      type?: string;

      userComment?: string;
    }
  }

  export interface Parcel {
    carrierId?: string;

    createdAt?: string;

    sender?: Parcel.Sender;

    /**
     * Carrier id of a carrier physically transporting the parcel. Will be null if
     * there's only one carrier involved in a parcel shipment.
     */
    transportingCarrierId?: string | null;

    /**
     * Waybill id as generated by carriers physically transporting the parcel. Will be
     * null if there's only one carrier involved in a parcel shipment.
     */
    transportingWaybill?: string | null;

    waybill?: string;
  }

  export namespace Parcel {
    export interface Sender {
      phoneNumber?: string;
    }
  }

  /**
   * This field is present in the case of cash on delivery, bank transfer, Allegro
   * Pay, and Allegro Pay Business payment options.
   */
  export interface Refund {
    bankAccount?: Refund.BankAccount;
  }

  export namespace Refund {
    export interface BankAccount {
      accountNumber?: string;

      address?: BankAccount.Address;

      iban?: string;

      owner?: string;

      swift?: string;
    }

    export namespace BankAccount {
      export interface Address {
        city?: string;

        countryCode?: string;

        postCode?: string;

        street?: string;
      }
    }
  }

  export interface Rejection {
    /**
     * Refund rejection code
     */
    code?: 'REFUND_REJECTED' | 'NEW_ITEM_SENT' | 'ITEM_FIXED' | 'MISSING_PART_SENT';

    createdAt?: string;

    /**
     * Reason of refund cancellation.
     */
    reason?: string;
  }
}

export interface CustomerReturnListResponse {
  count: number;

  /**
   * List of matching customer returns.
   */
  customerReturns: Array<CustomerReturn>;
}

export interface CustomerReturnListParams {
  buyer?: CustomerReturnListParams.Buyer;

  createdAt?: CustomerReturnListParams.CreatedAt;

  /**
   * One or more customer return id's.
   */
  customerReturnId?: string;

  /**
   * The ID of the last seen customer return. Customer returns created after the
   * given customer return will be returned.
   */
  from?: string;

  items?: CustomerReturnListParams.Items;

  /**
   * Limit of customer returns per page.
   */
  limit?: number;

  /**
   * The marketplace ID where operation was made. When the parameter is omitted,
   * searches for operations with all marketplaces.
   */
  marketplaceId?: string;

  /**
   * The offset of elements in the response.
   */
  offset?: number;

  /**
   * One or more order id's.
   */
  orderId?: string;

  parcels?: CustomerReturnListParams.Parcels;

  /**
   * One or more reference numbers.
   */
  referenceNumber?: string;

  /**
   * Current return timeline statuses. The allowed values are:
   *
   * - CREATED
   * - DISPATCHED
   * - IN_TRANSIT
   * - DELIVERED
   * - FINISHED
   * - FINISHED_APT
   * - REJECTED
   * - COMMISSION_REFUND_CLAIMED
   * - COMMISSION_REFUNDED
   * - WAREHOUSE_DELIVERED
   * - WAREHOUSE_VERIFICATION.
   */
  status?: string;
}

export namespace CustomerReturnListParams {
  export interface Buyer {
    /**
     * One or more buyer emails.
     */
    email?: string;

    /**
     * One or more buyer logins.
     */
    login?: string;
  }

  export interface CreatedAt {
    /**
     * Date of the return in ISO 8601 format to search by greater or equal.
     */
    gte?: string;

    /**
     * Date of the return in ISO 8601 format to search by lower or equal.
     */
    lte?: string;
  }

  export interface Items {
    /**
     * One or more item names.
     */
    name?: string;

    /**
     * One or more returned item offer id's.
     */
    offerId?: string;
  }

  export interface Parcels {
    /**
     * One or more carrier id's.
     */
    carrierId?: string;

    /**
     * One or more phone numbers.
     */
    sender?: string;

    /**
     * Carrier id of a carrier physically transporting the parcel. Will be null if
     * there's only one carrier involved in a parcel shipment.
     */
    transportingCarrierId?: string;

    /**
     * Waybill ids as generated by carriers physically transporting the parcel. Will be
     * null if there's only one carrier involved in a parcel shipment.
     */
    transportingWaybill?: string;

    /**
     * One or more waybill id's.
     */
    waybill?: string;
  }
}

export interface CustomerReturnRejectRefundParams {
  /**
   * Refund rejection
   */
  rejection: CustomerReturnRejectRefundParams.Rejection;
}

export namespace CustomerReturnRejectRefundParams {
  /**
   * Refund rejection
   */
  export interface Rejection {
    /**
     * Refund rejection code
     */
    code: 'REFUND_REJECTED' | 'NEW_ITEM_SENT' | 'ITEM_FIXED' | 'MISSING_PART_SENT';

    /**
     * Refund rejection reason, required when code is REFUND_REJECTED
     */
    reason?: string;
  }
}

export declare namespace CustomerReturns {
  export {
    type CustomerReturn as CustomerReturn,
    type CustomerReturnListResponse as CustomerReturnListResponse,
    type CustomerReturnListParams as CustomerReturnListParams,
    type CustomerReturnRejectRefundParams as CustomerReturnRejectRefundParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Orders extends APIResource {
  /**
   * Use this resource to get list of parcels and included items for a given order.
   * Items include detailed information such as expiration dates and serial numbers.
   * Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-obslugiwac-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-handle-orders" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.fulfillment.orders.getParcels(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getParcels(orderID: string, options?: RequestOptions): APIPromise<OrderGetParcelsResponse> {
    return this._client.get(path`/fulfillment/orders/${orderID}/parcels`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface OrderGetParcelsResponse {
  /**
   * order identifier
   */
  orderId?: string;

  parcels?: Array<OrderGetParcelsResponse.Parcel>;
}

export namespace OrderGetParcelsResponse {
  export interface Parcel {
    /**
     * List of parcels' items
     */
    items?: Array<Parcel.Item>;

    /**
     * Waybill number (parcel tracking number).
     */
    waybill?: string;
  }

  export namespace Parcel {
    export interface Item {
      /**
       * Expiration date of all items associated by quantity
       */
      expirationDate?: string;

      /**
       * Offer identifier
       */
      offerId?: string;

      /**
       * Product identifier
       */
      productId?: string;

      /**
       * Number of items placed in a parcel
       */
      quantity?: number;

      /**
       * List of serial numbers of included items
       */
      serialNumbers?: Array<string>;
    }
  }
}

export declare namespace Orders {
  export { type OrderGetParcelsResponse as OrderGetParcelsResponse };
}

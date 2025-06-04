// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Shipments extends APIResource {
  /**
   * Get a list of parcel tracking numbers currently assigned to the order. Orders
   * can be retrieved using REST API resource GET /order/checkout-forms. Please note
   * that the shipment list may contain parcel tracking numbers added through other
   * channels such as Moje Allegro or by the carrier that delivers the parcel. Read
   * more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-numery-przesylek-dodane-do-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#retrieving-tracking-numbers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const shipments =
   *   await client.order.checkoutForms.shipments.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<ShipmentListResponse> {
    return this._client.get(path`/order/checkout-forms/${id}/shipments`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Add a parcel tracking number (shipment) to given order line items. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-numer-przesylki-do-przedmiotu-w-zamowieniu" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-tracking-number-to-order" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const checkoutFormAddWaybillCreated =
   *   await client.order.checkoutForms.shipments.add('id', {
   *     carrierId: 'ALLEGRO',
   *     waybill: 'AD-1239134',
   *   });
   * ```
   */
  add(
    id: string,
    body: ShipmentAddParams,
    options?: RequestOptions,
  ): APIPromise<CheckoutFormAddWaybillCreated> {
    return this._client.post(path`/order/checkout-forms/${id}/shipments`, {
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
}

export interface CheckoutFormAddWaybillCreated {
  /**
   * Identifier of a shipment.
   */
  id?: string;

  /**
   * Supported carriers are available via
   * <a href="#operation/getOrdersCarriersUsingGET" target="_blank">shipping carriers
   * resource</a>.
   */
  carrierId?: string;

  /**
   * Carrier name to be provided only if carrierId is OTHER, otherwise it’s ignored.
   * Must be no longer than 30 characters.
   */
  carrierName?: string;

  /**
   * Date and time of the parcel tracking number registration in UTC (ISO8601
   * format).
   */
  createdAt?: string;

  /**
   * List of order line items. They must be from the order specified in the path
   * parameter. List cannot be empty.
   */
  lineItems?: Array<CheckoutFormAddWaybillCreated.LineItem>;

  /**
   * Waybill number (parcel tracking number). Cannot be empty and must be no longer
   * than 64 characters.
   */
  waybill?: string;
}

export namespace CheckoutFormAddWaybillCreated {
  export interface LineItem {
    /**
     * Identifier of an order line item.
     */
    id?: string;
  }
}

export interface ShipmentListResponse {
  /**
   * List of parcel tracking numbers currently assigned to the order.
   */
  shipments?: Array<CheckoutFormAddWaybillCreated>;
}

export interface ShipmentAddParams {
  /**
   * Supported carriers are available via
   * <a href="#operation/getOrdersCarriersUsingGET" target="_blank">shipping carriers
   * resource</a>.
   */
  carrierId: string;

  /**
   * Waybill number (parcel tracking number). Cannot be empty and must be no longer
   * than 64 characters.
   */
  waybill: string;

  /**
   * Carrier name to be provided only if carrierId is OTHER, otherwise it’s ignored.
   * Must be no longer than 30 characters.
   */
  carrierName?: string;

  /**
   * List of order line items. They must be from the order specified in the path
   * parameter. When list is not provided or it is empty it means that every item
   * from an order is included in shipment.
   */
  lineItems?: Array<ShipmentAddParams.LineItem>;
}

export namespace ShipmentAddParams {
  export interface LineItem {
    /**
     * Identifier of an order line item.
     */
    id: string;
  }
}

export declare namespace Shipments {
  export {
    type CheckoutFormAddWaybillCreated as CheckoutFormAddWaybillCreated,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentAddParams as ShipmentAddParams,
  };
}

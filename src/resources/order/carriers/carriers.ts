// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AllegroAPI from './allegro';
import { Allegro, AllegroCarrier, AllegroListPointsParams, AllegroListPointsResponse } from './allegro';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Carriers extends APIResource {
  allegro: AllegroAPI.Allegro = new AllegroAPI.Allegro(this._client);

  /**
   * Shipping carriers are essential to provide accurate tracking experience for
   * customers. Use this resource to get a list of all available shipping carriers.
   *
   * The response of this resource can be stored in accordance with returned caching
   * headers. Read more:
   * <a href="../../news/nowy-zasob-do-pobrania-identyfikatorow-przewoznikow-8dmljjGRGUE" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resource-to-retrieve-available-delivery-company-id-VL6zDDdr4hk" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const carriers = await client.order.carriers.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CarrierListResponse> {
    return this._client.get('/order/carriers', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Get tracking history for parcels. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-historie-statusow-przesylek" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-parcels-statuses-history" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.order.carriers.getTracking(
   *   'carrierId',
   *   { waybill: ['string'] },
   * );
   * ```
   */
  getTracking(
    carrierID: string,
    query: CarrierGetTrackingParams,
    options?: RequestOptions,
  ): APIPromise<CarrierGetTrackingResponse> {
    return this._client.get(path`/order/carriers/${carrierID}/tracking`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface CarrierListResponse {
  /**
   * List of shipping carriers.
   */
  carriers?: Array<CarrierListResponse.Carrier>;
}

export namespace CarrierListResponse {
  export interface Carrier {
    /**
     * Identifier of a carrier - unique to every carrier.
     *
     * It’s highly recommended to use an identifier different from `OTHER`, because its
     * parcel status may be updated automatically. Carrier identifier `OTHER` is
     * reserved for cases when seller uses a custom carrier or not yet integrated with
     * Allegro.
     */
    id?: string;

    /**
     * Name of a carrier.
     */
    name?: string;
  }
}

export interface CarrierGetTrackingResponse {
  /**
   * Carrier identifier.
   */
  carrierId: string;

  /**
   * Allegro parcel tracking history for multiple tracking numbers (waybills).
   */
  waybills: Array<CarrierGetTrackingResponse.Waybill>;
}

export namespace CarrierGetTrackingResponse {
  export interface Waybill {
    /**
     * Waybill number (parcel tracking number).
     */
    waybill: string;

    /**
     * Parcel tracking history if available.
     */
    trackingDetails?: Waybill.TrackingDetails;
  }

  export namespace Waybill {
    /**
     * Parcel tracking history if available.
     */
    export interface TrackingDetails {
      /**
       * The start time parcel tracking recording in ISO 8601 format
       */
      createdAt: string;

      /**
       * List of parcel shipping statuses
       */
      statuses: Array<TrackingDetails.Status>;

      /**
       * Time of registration of the last shipment status change in ISO 8601 format
       */
      updatedAt: string;
    }

    export namespace TrackingDetails {
      export interface Status {
        /**
         * Status of the shipment. - `AVAILABLE_FOR_PICKUP` - The parcel is awaiting for
         * pickup. - `DELIVERED` - The parcel was delivered to the receiver / collected by
         * the receiver. - `IN_TRANSIT` - The parcel is on its way to the receiver. The
         * status includes events such as acceptance of the shipment by the carrier,
         * arriving at the hub or redirecting to another address. - `ISSUE` - Problem with
         * shipment. It includes events such as the parcel was refused by the receiver or
         * was lost. - `NOTICE_LEFT` - A notice was left because of an unsuccessful
         * delivery attempt (for example, due to nobody was at the delivery address). -
         * `PENDING` - The shipment has been prepared and it is awaiting to be sent. -
         * `RELEASED_FOR_DELIVERY` - The parcel has been released for delivery to its final
         * destination. - `RETURNED` - The parcel is being or has been returned to the
         * sender.
         */
        code:
          | 'AVAILABLE_FOR_PICKUP'
          | 'DELIVERED'
          | 'IN_TRANSIT'
          | 'ISSUE'
          | 'NOTICE_LEFT'
          | 'PENDING'
          | 'RELEASED_FOR_DELIVERY'
          | 'RETURNED';

        /**
         * Actual shipment status change time in ISO 8601 format
         */
        occurredAt: string;

        /**
         * Optional description for a given status, mainly intended to describe the problem
         * with the shipment
         */
        description?: string;
      }
    }
  }
}

export interface CarrierGetTrackingParams {
  /**
   * Waybill number (parcel tracking number). Example:
   * `waybill=AAA0000E5D201&waybill=BBB00000E5D202` - returns parcel tracking history
   * for `AAA0000E5D201` as well as for `BBB00000E5D202`.
   */
  waybill: Array<string>;
}

Carriers.Allegro = Allegro;

export declare namespace Carriers {
  export {
    type CarrierListResponse as CarrierListResponse,
    type CarrierGetTrackingResponse as CarrierGetTrackingResponse,
    type CarrierGetTrackingParams as CarrierGetTrackingParams,
  };

  export {
    Allegro as Allegro,
    type AllegroCarrier as AllegroCarrier,
    type AllegroListPointsResponse as AllegroListPointsResponse,
    type AllegroListPointsParams as AllegroListPointsParams,
  };
}

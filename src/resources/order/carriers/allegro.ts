// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AllegroAPI from './allegro';
import * as PointsOfServiceAPI from '../../points-of-service';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Allegro extends APIResource {
  /**
   * Get a list of Allegro pickup drop off points. Read more:
   * <a href="../../tutorials/jak-zarzadzac-przesylkami-przez-wysylam-z-allegro-LRVjK7K21sY#jak-pobrac-liste-punktow-allegro" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-parcels-via-ship-with-allegro-ZM9YAyGKWTV#how-to-retrieve-list-of-allegro-pickup-drop-off-points" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.order.carriers.allegro.listPoints();
   * ```
   */
  listPoints(
    params: AllegroListPointsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AllegroListPointsResponse> {
    const { 'If-Modified-Since': ifModifiedSince, ...query } = params ?? {};
    return this._client.get('/order/carriers/ALLEGRO/points', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type AllegroCarrier = 'UPS' | 'ALLEGRO_ONE_KURIER' | 'DPD';

export interface AllegroListPointsResponse {
  /**
   * List of Allegro pickup drop off points.
   */
  points?: Array<AllegroListPointsResponse.Point>;
}

export namespace AllegroListPointsResponse {
  /**
   * Allegro pickup drop off point.
   */
  export interface Point {
    /**
     * Point id. You can use it in Send with Allegro.
     */
    id: string;

    address: Point.Address;

    /**
     * List of carriers that can drop off/pick up packages from point.
     */
    carriers: Array<AllegroAPI.AllegroCarrier>;

    /**
     * Point name.
     */
    name: string;

    /**
     * Point working hours information.
     */
    opening: Array<Point.Opening>;

    /**
     * Point payment type.
     */
    payments: Array<Point.Payment>;

    /**
     * Point restrictions.
     */
    restrictions: Array<Point.Restriction>;

    /**
     * Point services.
     */
    services: Array<Point.Service>;

    /**
     * Point type.
     */
    type: 'PUDO' | 'APM';

    /**
     * Point description
     */
    description?: string;
  }

  export namespace Point {
    export interface Address {
      /**
       * City name
       */
      city: string;

      coordinates: PointsOfServiceAPI.Coordinates;

      /**
       * Country code
       */
      countryCode: string;

      /**
       * Postal code
       */
      postCode: string;

      /**
       * Street
       */
      street: string;
    }

    export interface Opening {
      /**
       * Day of week (ISO 8601).
       */
      dayOfWeek: string;

      /**
       * Start hour.
       */
      from: string;

      /**
       * End hour.
       */
      to: string;
    }

    export interface Payment {
      method: 'CASH' | 'CARD';
    }

    export interface Restriction {
      /**
       * Set of values can be extended.
       */
      type: 'OVERLOADED';
    }

    export interface Service {
      /**
       * Set of values can be extended.
       */
      type: 'PICKUP' | 'DROPOFF';
    }
  }
}

export interface AllegroListPointsParams {
  /**
   * Query param: List of carrier ids to filter the drop off/pick up points to only
   * the ones where any of the listed carriers operate. In case of an empty list, all
   * points are returned.
   */
  carriers?: Array<AllegroCarrier>;

  /**
   * Header param: Date of last data modification. If data has been modified after
   * specified date, full set of data is returned. If header is not specified, full
   * set of data is returned. Date has to be provided in HTTP-date format.
   * Information about date (the same HTTP-date format) of last modified data is
   * available in response - `Last-Modified`.
   */
  'If-Modified-Since'?: string;
}

export declare namespace Allegro {
  export {
    type AllegroCarrier as AllegroCarrier,
    type AllegroListPointsResponse as AllegroListPointsResponse,
    type AllegroListPointsParams as AllegroListPointsParams,
  };
}

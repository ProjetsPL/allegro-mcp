// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PointsOfServiceAPI from './points-of-service';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PointsOfService extends APIResource {
  /**
   * Use this resource to create a point of service. Read more:
   * <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a>
   * / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.
   */
  create(body: PointsOfServiceCreateParams, options?: RequestOptions): APIPromise<Pos> {
    return this._client.post('/points-of-service', {
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
   * Use this resource to get a details of a point of service for a given ID. Read
   * more:
   * <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a>
   * / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Pos> {
    return this._client.get(path`/points-of-service/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify a point of service. Read more:
   * <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a>
   * / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.
   */
  update(pathID: string, body: PointsOfServiceUpdateParams, options?: RequestOptions): APIPromise<Pos> {
    return this._client.put(path`/points-of-service/${pathID}`, {
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
   * Use this resource to get a list of points of service by seller ID. Read more:
   * <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a>
   * / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.
   */
  list(
    query: PointsOfServiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PointsOfServiceListResponse> {
    return this._client.get('/points-of-service', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete a point of service. Read more:
   * <a href="../../news/punkty-odbioru-osobistego-8dmlj8qk7ik" target="_blank">PL</a>
   * / <a href="../../news/points-of-service-Rdoz09ZE7sW" target="_blank">EN</a>.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/points-of-service/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Coordinates {
  lat: number;

  lon: number;
}

export interface Pos {
  address: Pos.Address;

  /**
   * Confirmation method: AWAIT_CONTACT - We will inform you about the time of
   * receipt, CALL_US - Please make an appointment, CONTACT_NOT_REQUIRED - Contact is
   * not required.
   */
  confirmationType: string;

  name: string;

  /**
   * Possible empty list of opening hours.
   */
  openHours: Array<Pos.OpenHour>;

  /**
   * Point of service status: ACTIVE - active, TEMPORARILY_CLOSED - temporarily
   * closed, CLOSED_DOWN - closed down, DELETED - deleted.
   */
  status: string;

  /**
   * Indicates point type. The only valid value so far is PICKUP_POINT.
   */
  type: string;

  /**
   * UUID. When creating a point of service (Post) the field is ignored. It is
   * required when updating (Put) a point of service.
   */
  id?: string;

  /**
   * Creation date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When creating
   * (Post) or updating (Put) a point of service the field is ignored.
   */
  createdAt?: string;

  email?: string;

  /**
   * ID from external client system.
   */
  externalId?: string;

  /**
   * IDs for a location. When creating (Post) or updating (Put) a point of service
   * the field is ignored.
   */
  locations?: Array<Pos.Location>;

  /**
   * An empty list of payment types is available.
   */
  payments?: Array<Pos.Payment>;

  phoneNumber?: string;

  seller?: Seller;

  /**
   * Delivery time / Time period for receipt. Date format ISO 8601 e.g. 'PT24H'
   */
  serviceTime?: string;

  /**
   * Modification date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When
   * creating (Post) or updating (Put) a point of service the field is ignored.
   */
  updatedAt?: string;
}

export namespace Pos {
  export interface Address {
    city: string;

    countryCode: string;

    state: string;

    zipCode: string;

    coordinates?: PointsOfServiceAPI.Coordinates;

    street?: string;
  }

  export interface OpenHour {
    /**
     * Days of the week: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY,
     * SUNDAY. Date format ISO 8601
     */
    dayOfWeek: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    from: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    to: string;
  }

  export interface Location {
    id: string;
  }

  export interface Payment {
    /**
     * Available forms of payment: CASH - cash, CARD - card.
     */
    method: string;
  }
}

export interface Seller {
  id: string;
}

export interface PointsOfServiceListResponse {
  posList?: Array<Pos>;
}

export interface PointsOfServiceCreateParams {
  address: PointsOfServiceCreateParams.Address;

  /**
   * Confirmation method: AWAIT_CONTACT - We will inform you about the time of
   * receipt, CALL_US - Please make an appointment, CONTACT_NOT_REQUIRED - Contact is
   * not required.
   */
  confirmationType: string;

  name: string;

  /**
   * Possible empty list of opening hours.
   */
  openHours: Array<PointsOfServiceCreateParams.OpenHour>;

  /**
   * Point of service status: ACTIVE - active, TEMPORARILY_CLOSED - temporarily
   * closed, CLOSED_DOWN - closed down, DELETED - deleted.
   */
  status: string;

  /**
   * Indicates point type. The only valid value so far is PICKUP_POINT.
   */
  type: string;

  /**
   * UUID. When creating a point of service (Post) the field is ignored. It is
   * required when updating (Put) a point of service.
   */
  id?: string;

  /**
   * Creation date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When creating
   * (Post) or updating (Put) a point of service the field is ignored.
   */
  createdAt?: string;

  email?: string;

  /**
   * ID from external client system.
   */
  externalId?: string;

  /**
   * IDs for a location. When creating (Post) or updating (Put) a point of service
   * the field is ignored.
   */
  locations?: Array<PointsOfServiceCreateParams.Location>;

  /**
   * An empty list of payment types is available.
   */
  payments?: Array<PointsOfServiceCreateParams.Payment>;

  phoneNumber?: string;

  seller?: Seller;

  /**
   * Delivery time / Time period for receipt. Date format ISO 8601 e.g. 'PT24H'
   */
  serviceTime?: string;

  /**
   * Modification date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When
   * creating (Post) or updating (Put) a point of service the field is ignored.
   */
  updatedAt?: string;
}

export namespace PointsOfServiceCreateParams {
  export interface Address {
    city: string;

    countryCode: string;

    state: string;

    zipCode: string;

    coordinates?: PointsOfServiceAPI.Coordinates;

    street?: string;
  }

  export interface OpenHour {
    /**
     * Days of the week: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY,
     * SUNDAY. Date format ISO 8601
     */
    dayOfWeek: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    from: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    to: string;
  }

  export interface Location {
    id: string;
  }

  export interface Payment {
    /**
     * Available forms of payment: CASH - cash, CARD - card.
     */
    method: string;
  }
}

export interface PointsOfServiceUpdateParams {
  address: PointsOfServiceUpdateParams.Address;

  /**
   * Confirmation method: AWAIT_CONTACT - We will inform you about the time of
   * receipt, CALL_US - Please make an appointment, CONTACT_NOT_REQUIRED - Contact is
   * not required.
   */
  confirmationType: string;

  name: string;

  /**
   * Possible empty list of opening hours.
   */
  openHours: Array<PointsOfServiceUpdateParams.OpenHour>;

  /**
   * Point of service status: ACTIVE - active, TEMPORARILY_CLOSED - temporarily
   * closed, CLOSED_DOWN - closed down, DELETED - deleted.
   */
  status: string;

  /**
   * Indicates point type. The only valid value so far is PICKUP_POINT.
   */
  type: string;

  /**
   * UUID. When creating a point of service (Post) the field is ignored. It is
   * required when updating (Put) a point of service.
   */
  body_id?: string;

  /**
   * Creation date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When creating
   * (Post) or updating (Put) a point of service the field is ignored.
   */
  createdAt?: string;

  email?: string;

  /**
   * ID from external client system.
   */
  externalId?: string;

  /**
   * IDs for a location. When creating (Post) or updating (Put) a point of service
   * the field is ignored.
   */
  locations?: Array<PointsOfServiceUpdateParams.Location>;

  /**
   * An empty list of payment types is available.
   */
  payments?: Array<PointsOfServiceUpdateParams.Payment>;

  phoneNumber?: string;

  seller?: Seller;

  /**
   * Delivery time / Time period for receipt. Date format ISO 8601 e.g. 'PT24H'
   */
  serviceTime?: string;

  /**
   * Modification date. Date format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ When
   * creating (Post) or updating (Put) a point of service the field is ignored.
   */
  updatedAt?: string;
}

export namespace PointsOfServiceUpdateParams {
  export interface Address {
    city: string;

    countryCode: string;

    state: string;

    zipCode: string;

    coordinates?: PointsOfServiceAPI.Coordinates;

    street?: string;
  }

  export interface OpenHour {
    /**
     * Days of the week: MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY,
     * SUNDAY. Date format ISO 8601
     */
    dayOfWeek: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    from: string;

    /**
     * Date format (ISO 8601) - HH:mm:ss.SSS
     */
    to: string;
  }

  export interface Location {
    id: string;
  }

  export interface Payment {
    /**
     * Available forms of payment: CASH - cash, CARD - card.
     */
    method: string;
  }
}

export interface PointsOfServiceListParams {
  /**
   * Country code identifier in ISO format. In case of incorrect or unsupported
   * country code, empty list is returned. If missing, list of all defined points is
   * returned. If present, correct and supported, list of all points with given
   * country code for the user is returned.
   */
  countryCode?: string;

  seller?: PointsOfServiceListParams.Seller;
}

export namespace PointsOfServiceListParams {
  export interface Seller {
    /**
     * User identifier.
     */
    id: string;
  }
}

export declare namespace PointsOfService {
  export {
    type Coordinates as Coordinates,
    type Pos as Pos,
    type Seller as Seller,
    type PointsOfServiceListResponse as PointsOfServiceListResponse,
    type PointsOfServiceCreateParams as PointsOfServiceCreateParams,
    type PointsOfServiceUpdateParams as PointsOfServiceUpdateParams,
    type PointsOfServiceListParams as PointsOfServiceListParams,
  };
}

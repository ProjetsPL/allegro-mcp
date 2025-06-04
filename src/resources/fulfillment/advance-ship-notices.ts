// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvanceShipNoticesAPI from './advance-ship-notices';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdvanceShipNotices extends APIResource {
  /**
   * Use this resource to create an Advance Ship Notice. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#utworz-draft-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#create-a-draft-of-the-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const advanceShipNotice =
   *   await client.fulfillment.advanceShipNotices.create({
   *     items: [
   *       {
   *         product: {
   *           id: 'a1520fab-7801-4832-9ccd-fb068c707a74',
   *         },
   *         quantity: 1,
   *       },
   *     ],
   *   });
   * ```
   */
  create(
    body: AdvanceShipNoticeCreateParams,
    options?: RequestOptions,
  ): APIPromise<AdvanceShipNoticeCreateResponse> {
    return this._client.post('/fulfillment/advance-ship-notices', {
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
   * Use this resource to get an Advance Ship Notice. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-przegladac-utworzone-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-get-created-advance-ship-notices" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const advanceShipNoticeResponse =
   *   await client.fulfillment.advanceShipNotices.retrieve(
   *     '84529ad2-2265-4e15-b76b-c17025d848f6',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AdvanceShipNoticeResponse> {
    return this._client.get(path`/fulfillment/advance-ship-notices/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update an Advance Ship Notice. Any content property update
   * will clear labels property. Use Create labels command to create new labels for
   * provided content. If a client wants to update read-only property, an error is
   * returned (only in cases when sent value will be different than actual on the
   * server). Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#uzupelnij-dane-o-awizo" target="_blank">PL</a>
   * /
   * <a href="../../one-fulfillment-by-allegro-4R9dXyMPlc9#complete-the-data-of-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const advanceShipNoticeResponse =
   *   await client.fulfillment.advanceShipNotices.update(
   *     '84529ad2-2265-4e15-b76b-c17025d848f6',
   *     {
   *       items: [
   *         {
   *           product: {
   *             id: 'a1520fab-7801-4832-9ccd-fb068c707a74',
   *           },
   *           quantity: 1,
   *         },
   *       ],
   *       'if-match': '123456',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: AdvanceShipNoticeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AdvanceShipNoticeResponse> {
    const { 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/fulfillment/advance-ship-notices/${id}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
          'if-match': ifMatch,
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a list of Advance Ship Notices. The list is ordered by
   * **createdAt** property. Default **offset** is 0, default **limit** is 50. A list
   * can be filtered by statuses. Multiple status query parameters are allowed. In
   * such cases, filters are joined with **OR** logical operator. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-przegladac-utworzone-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-get-created-advance-ship-notices" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const advanceShipNotices =
   *   await client.fulfillment.advanceShipNotices.list();
   * ```
   */
  list(
    query: AdvanceShipNoticeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AdvanceShipNoticeListResponse> {
    return this._client.get('/fulfillment/advance-ship-notices', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete an Advance Ship Notice. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-usunac-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#how-to-delete-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.fulfillment.advanceShipNotices.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/fulfillment/advance-ship-notices/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this resource to cancel an Advance Ship Notice in IN_TRANSIT status. Read
   * more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#anuluj-awizo" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#cancel-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.fulfillment.advanceShipNotices.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/fulfillment/advance-ship-notices/${id}/cancel`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get labels for Advance Ship Notice after being created with
   * "create labels command". Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#wygeneruj-oznaczenia-na-kartony" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#create-labels-for-boxes" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.fulfillment.advanceShipNotices.getLabels(
   *     '84529ad2-2265-4e15-b76b-c17025d848f6',
   *     { accept: 'application/pdf' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getLabels(
    id: string,
    params: AdvanceShipNoticeGetLabelsParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { accept } = params;
    return this._client.get(path`/fulfillment/advance-ship-notices/${id}/labels`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf', accept: accept.toString() }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Use this resource to check the state of Advance Ship Notice receiving in
   * Fulfillment Center in real time. The response contains a receiving progress and
   * information about particular items - their quantities and conditions. While the
   * Advance Ship Notice is in UNPACKING state, report is updated dynamically, which
   * might result in different responses even at short time intervals. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#sprawdz-postep-odbioru-awizo-przez-magazyn" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#check-current-state-and-details-of-advance-ship-notice-receiving" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.fulfillment.advanceShipNotices.getReceivingState(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  getReceivingState(
    id: string,
    options?: RequestOptions,
  ): APIPromise<AdvanceShipNoticeGetReceivingStateResponse> {
    return this._client.get(path`/fulfillment/advance-ship-notices/${id}/receiving-state`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update already submitted Advance Ship Notice. Update is
   * allowed only when Advance Ship Notice is in "IN_TRANSIT" status. Modifications
   * are limited to:
   *
   * - changing items quantity
   * - removing items
   * - changing handling unit amount
   * - changing shipping courier id, name, tracking numbers or vehicle licence plate
   *   or third party delivery details (depending on the selected shipping method in
   *   the submitted advance ship notice) Handling unit's amount property update
   *   clears labels property. Use Create labels command to create new labels for
   *   provided content. Read more:
   *   <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#edytuj-zakonczone-awizo" target="_blank">PL</a>
   *   /
   *   <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#edit-advance-ship-notice" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const advanceShipNoticeResponse =
   *   await client.fulfillment.advanceShipNotices.updateSubmitted(
   *     '84529ad2-2265-4e15-b76b-c17025d848f6',
   *     { 'if-match': '123456' },
   *   );
   * ```
   */
  updateSubmitted(
    id: string,
    params: AdvanceShipNoticeUpdateSubmittedParams,
    options?: RequestOptions,
  ): APIPromise<AdvanceShipNoticeResponse> {
    const { 'if-match': ifMatch, ...body } = params;
    return this._client.put(path`/fulfillment/advance-ship-notices/${id}/submitted`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
          Accept: 'application/vnd.allegro.public.v1+json',
          'if-match': ifMatch,
        },
        options?.headers,
      ]),
    });
  }
}

export interface AdvanceShipNoticeResponse {
  /**
   * An UUID identifier of ASN.
   */
  id: string;

  /**
   * The date and time of Advance Ship Notice creation. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  createdAt: string;

  /**
   * A human friendly identifier of ASN.
   */
  displayNumber: string;

  /**
   * A list of product items.
   */
  items: Array<ProductItem>;

  /**
   * The Advance Ship Notice Status.
   */
  status: AdvanceShipNoticeStatus;

  /**
   * The date and time of last Advance Ship Notice update. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt: string;

  /**
   * Represents information about handling unit.
   */
  handlingUnit?: HandlingUnit;

  /**
   * Represents created labels.
   */
  labels?: Labels;

  /**
   * Represents information about package shipment. Constraints:
   *
   * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
   *   are required.
   * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method ALREADY_IN_WAREHOUSE: estimatedTimeOfArrival and countryCode are
   *   required.
   */
  shipping?: ShippingExtended;

  /**
   * The date and time of Advance Ship Notice submission. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  submittedAt?: string;
}

/**
 * The Advance Ship Notice Status.
 */
export type AdvanceShipNoticeStatus = 'DRAFT' | 'IN_TRANSIT' | 'UNPACKING' | 'COMPLETED' | 'CANCELLED';

/**
 * Represents information about handling unit.
 */
export interface HandlingUnit {
  /**
   * Amount of unit type. Not required when ASN status is DRAFT. When unit type is
   * BOX or PALLET then it means how many handling units will be sent. When unit type
   * is CONTAINER then it means how many handling units inside a container will be
   * sent.
   */
  amount?: number;

  /**
   * Not required when ASN status is DRAFT. Available values - ONE_FULFILMENT, NONE.
   * When unit type is CONTAINER labelsType can not be set to ONE_FULFILMENT.
   */
  labelsType?: string;

  /**
   * The unit type of Advance Ship Notice. Available values - BOX, PALLET, CONTAINER.
   */
  unitType?: string;
}

/**
 * Represents created labels.
 */
export interface Labels {
  /**
   * An URI to file containing labels.
   */
  fileUrl?: string;
}

/**
 * The product data.
 */
export interface Product {
  /**
   * The product identifier.
   */
  id: string;
}

/**
 * Groups together product and quantity.
 */
export interface ProductItem {
  /**
   * The product data.
   */
  product: Product;

  /**
   * The quantity of the product.
   */
  quantity: number;
}

/**
 * Represents information about package shipment. Constraints:
 *
 * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
 *   countryCode are required.
 * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
 *   are required.
 * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
 *   countryCode are required.
 */
export interface Shipping {
  /**
   * The delivery method of the Advance Ship Notice. Not required when Advance Ship
   * Notice in DRAFT status
   */
  method: string;
}

/**
 * Represents information about package shipment. Constraints:
 *
 * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
 *   countryCode are required.
 * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
 *   are required.
 * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
 *   countryCode are required.
 * - for method ALREADY_IN_WAREHOUSE: estimatedTimeOfArrival and countryCode are
 *   required.
 */
export interface ShippingExtended {
  /**
   * The delivery method of the Advance Ship Notice. Not required when Advance Ship
   * Notice in DRAFT status
   */
  method: string;
}

export interface AdvanceShipNoticeCreateResponse {
  /**
   * An UUID identifier of ASN.
   */
  id: string;

  /**
   * The date and time of Advance Ship Notice creation. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  createdAt: string;

  /**
   * A human friendly identifier of ASN.
   */
  displayNumber: string;

  /**
   * A list of product items.
   */
  items: Array<ProductItem>;

  /**
   * The Advance Ship Notice Status.
   */
  status: AdvanceShipNoticeStatus;

  /**
   * The date and time of last Advance Ship Notice update. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt: string;

  /**
   * Represents information about handling unit.
   */
  handlingUnit?: HandlingUnit;

  /**
   * Represents created labels.
   */
  labels?: Labels;

  /**
   * Represents information about package shipment. Constraints:
   *
   * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
   *   are required.
   * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method ALREADY_IN_WAREHOUSE: estimatedTimeOfArrival and countryCode are
   *   required.
   */
  shipping?: ShippingExtended;
}

/**
 * The list of Advance Ship Notices.
 */
export interface AdvanceShipNoticeListResponse {
  advanceShipNotices: Array<AdvanceShipNoticeResponse>;

  /**
   * A number of Advance Ship Notices in response.
   */
  count: number;

  /**
   * A number of Advance Ship Notices in total.
   */
  totalCount: number;
}

export interface AdvanceShipNoticeGetReceivingStateResponse {
  /**
   * The list of products with receiving status.
   */
  content?: Array<AdvanceShipNoticeGetReceivingStateResponse.Content>;

  /**
   * A human friendly identifier of Advance Ship Notice.
   */
  displayNumber?: string;

  /**
   * Stage of Advance Ship Notice receiving
   */
  stage?: 'IN_PROGRESS' | 'COMPLETED';

  /**
   * The date and time when report was updated last time. Provided in [ISO 8601
   * format](link: https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt?: string;
}

export namespace AdvanceShipNoticeGetReceivingStateResponse {
  export interface Content {
    /**
     * Expected product quantity.
     */
    expected?: number;

    /**
     * The product data.
     */
    product?: AdvanceShipNoticesAPI.Product;

    received?: Array<Content.Received>;
  }

  export namespace Content {
    export interface Received {
      /**
       * Product quantity.
       */
      quantity?: number;

      /**
       * The reasonCode indicates the condition of the product after unpacking. For
       * sellable product is given the reasonCode SELLABLE. For a product that is not
       * suitable for sale receives a code specifying a detailed reason for rejection,
       * e.g. "DAMAGED_IN_TRANSPORT" or "NO_BARCODE"
       */
      reasonCode?:
        | 'SELLABLE'
        | 'DAMAGED_CARRIER_CLAIM'
        | 'DAMAGED_IN_TRANSPORT'
        | 'NO_BARCODE'
        | 'PRODUCT_NOT_ACCEPTABLE_IN_FULFILLMENT'
        | 'SHORT_EXPIRY_DATE'
        | 'UNACCEPTABLE_HAZMAT'
        | 'UNACCEPTABLE_PRODUCT_SIZE'
        | 'UNACCEPTABLE_PRODUCT_VARIANT'
        | 'UNSCANNABLE_BARCODE';

      /**
       * Received item condition.
       */
      receivedType?: 'SELLABLE' | 'DAMAGE' | 'REJECT';
    }
  }
}

export interface AdvanceShipNoticeCreateParams {
  /**
   * A list of product items.
   */
  items: Array<ProductItem>;

  /**
   * Represents information about handling unit.
   */
  handlingUnit?: HandlingUnit;

  /**
   * Represents information about package shipment. Constraints:
   *
   * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
   *   are required.
   * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
   *   countryCode are required.
   */
  shipping?: Shipping;
}

export interface AdvanceShipNoticeUpdateParams {
  /**
   * Body param: A list of product items.
   */
  items: Array<ProductItem>;

  /**
   * Header param: A current version of Advance Ship Notice (e.g. from etag header
   * obtained via get).
   */
  'if-match': string;

  /**
   * Body param: Represents information about handling unit.
   */
  handlingUnit?: HandlingUnit;

  /**
   * Body param: Represents information about package shipment. Constraints:
   *
   * - for method OWN_TRANSPORT: truckLicencePlate, estimatedTimeOfArrival and
   *   countryCode are required.
   * - for method COURIER_BY_SELLER: courier, estimatedTimeOfArrival and countryCode
   *   are required.
   * - for method THIRD_PARTY_DELIVERY: thirdParty, estimatedTimeOfArrival and
   *   countryCode are required.
   */
  shipping?: Shipping;
}

export interface AdvanceShipNoticeListParams {
  /**
   * Maximum number of elements in response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;

  /**
   * A status of the Advance Ship Notices in the response.
   */
  status?: Array<AdvanceShipNoticeStatus>;
}

export interface AdvanceShipNoticeGetLabelsParams {
  /**
   * Content-type of generated labels.
   */
  accept: 'application/pdf' | 'x-application/zpl';
}

export interface AdvanceShipNoticeUpdateSubmittedParams {
  /**
   * Header param: A current version of Advance Ship Notice (e.g. from etag header
   * obtained via get).
   */
  'if-match': string;

  /**
   * Body param: Represents information about handling unit.
   */
  handlingUnit?: AdvanceShipNoticeUpdateSubmittedParams.HandlingUnit;

  /**
   * Body param: A list of product items.
   */
  items?: Array<ProductItem>;

  /**
   * Body param: Represents information about package shipment.
   */
  shipping?: AdvanceShipNoticeUpdateSubmittedParams.Shipping;
}

export namespace AdvanceShipNoticeUpdateSubmittedParams {
  /**
   * Represents information about handling unit.
   */
  export interface HandlingUnit {
    /**
     * Number of handling units. Depending on the selected handling unit type, it's the
     * number of boxes, pallets or packages placed in the container to be dispatched.
     */
    amount?: number;
  }

  /**
   * Represents information about package shipment.
   */
  export interface Shipping {
    /**
     * Represents courier details of shipping.
     */
    courier?: Shipping.Courier;

    /**
     * The estimated date and time of Advance Ship Notice arrival in the warehouse.
     * Provided in [ISO 8601 format](link: https://en.wikipedia.org/wiki/ISO_8601).
     */
    estimatedTimeOfArrival?: string;

    /**
     * Represents shipping details from third party.
     */
    thirdParty?: Shipping.ThirdParty;

    /**
     * Vehicle licence plate number.
     */
    truckLicencePlate?: string;
  }

  export namespace Shipping {
    /**
     * Represents courier details of shipping.
     */
    export interface Courier {
      /**
       * Supported courier ids are ALLEGRO, DB_SCHENKER, DHL, DPD, DPD_SK, INPOST, ORLEN,
       * POCZTA_POLSKA, SUUS, UPS. If requested courier is not supported then use OTHER
       * value and provide courier name in name field.
       */
      id?: string;

      /**
       * Courier name to be provided only if id is OTHER, otherwise it's ignored.
       */
      name?: string;

      /**
       * List of tracking numbers.
       */
      trackingNumbers?: Array<string>;
    }

    /**
     * Represents shipping details from third party.
     */
    export interface ThirdParty {
      /**
       * Third party name.
       */
      name?: string;

      /**
       * Third party order number.
       */
      orderNumber?: string;
    }
  }
}

export declare namespace AdvanceShipNotices {
  export {
    type AdvanceShipNoticeResponse as AdvanceShipNoticeResponse,
    type AdvanceShipNoticeStatus as AdvanceShipNoticeStatus,
    type HandlingUnit as HandlingUnit,
    type Labels as Labels,
    type Product as Product,
    type ProductItem as ProductItem,
    type Shipping as Shipping,
    type ShippingExtended as ShippingExtended,
    type AdvanceShipNoticeCreateResponse as AdvanceShipNoticeCreateResponse,
    type AdvanceShipNoticeListResponse as AdvanceShipNoticeListResponse,
    type AdvanceShipNoticeGetReceivingStateResponse as AdvanceShipNoticeGetReceivingStateResponse,
    type AdvanceShipNoticeCreateParams as AdvanceShipNoticeCreateParams,
    type AdvanceShipNoticeUpdateParams as AdvanceShipNoticeUpdateParams,
    type AdvanceShipNoticeListParams as AdvanceShipNoticeListParams,
    type AdvanceShipNoticeGetLabelsParams as AdvanceShipNoticeGetLabelsParams,
    type AdvanceShipNoticeUpdateSubmittedParams as AdvanceShipNoticeUpdateSubmittedParams,
  };
}

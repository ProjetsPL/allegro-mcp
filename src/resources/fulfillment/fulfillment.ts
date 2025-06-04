// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AdvanceShipNoticesAPI from './advance-ship-notices';
import {
  AdvanceShipNoticeCreateParams,
  AdvanceShipNoticeCreateResponse,
  AdvanceShipNoticeGetLabelsParams,
  AdvanceShipNoticeGetReceivingStateResponse,
  AdvanceShipNoticeListParams,
  AdvanceShipNoticeListResponse,
  AdvanceShipNoticeResponse,
  AdvanceShipNoticeStatus,
  AdvanceShipNoticeUpdateParams,
  AdvanceShipNoticeUpdateSubmittedParams,
  AdvanceShipNotices,
  HandlingUnit,
  Labels,
  Product as AdvanceShipNoticesAPIProduct,
  ProductItem,
  Shipping,
  ShippingExtended,
} from './advance-ship-notices';
import * as OrdersAPI from './orders';
import { OrderGetParcelsResponse, Orders } from './orders';
import * as SubmitCommandsAPI from './submit-commands';
import { SubmitCommand, SubmitCommandSubmitParams, SubmitCommands } from './submit-commands';
import * as TaxIDAPI from './tax-id';
import { TaxID, TaxIDAddParams, TaxIDGetResponse, TaxIDRequest, TaxIDUpdateParams } from './tax-id';
import * as RemovalAPI from './removal/removal';
import { Removal } from './removal/removal';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Fulfillment extends APIResource {
  advanceShipNotices: AdvanceShipNoticesAPI.AdvanceShipNotices = new AdvanceShipNoticesAPI.AdvanceShipNotices(
    this._client,
  );
  submitCommands: SubmitCommandsAPI.SubmitCommands = new SubmitCommandsAPI.SubmitCommands(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  taxID: TaxIDAPI.TaxID = new TaxIDAPI.TaxID(this._client);
  removal: RemovalAPI.Removal = new RemovalAPI.Removal(this._client);

  /**
   * Use this resource to get a list of products that can be added to Advance Ship
   * Notice. The list contains products for which the seller has created offers and
   * is ordered by product's name. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#sprawdz-dostepne-produkty-do-awizacji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#check-available-products-for-asn" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.fulfillment.getAvailableProducts();
   * ```
   */
  getAvailableProducts(
    params: FulfillmentGetAvailableProductsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FulfillmentGetAvailableProductsResponse> {
    const { 'Accept-Language': acceptLanguage, ...query } = params ?? {};
    return this._client.get('/fulfillment/available-products', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a list of the products belonging to the seller, which
   * are in Allegro Warehouse. Read more:
   * <a href="../../tutorials/one-fulfillment-by-allegro-0ADwgOLqWSw#jak-pobrac-aktualne-stany-magazynowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/one-fulfillment-by-allegro-4R9dXyMPlc9#get-available-stock" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.fulfillment.getStock();
   * ```
   */
  getStock(
    params: FulfillmentGetStockParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FulfillmentGetStockResponse> {
    const { 'Accept-Language': acceptLanguage, ...query } = params ?? {};
    return this._client.get('/fulfillment/stock', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * The list of available seller's products.
 */
export interface FulfillmentGetAvailableProductsResponse {
  /**
   * Number of returned products.
   */
  count?: number;

  /**
   * List of products.
   */
  products?: Array<FulfillmentGetAvailableProductsResponse.Product>;

  /**
   * Total number of available products.
   */
  totalCount?: number;
}

export namespace FulfillmentGetAvailableProductsResponse {
  /**
   * The product.
   */
  export interface Product {
    /**
     * The product identifier.
     */
    id?: string;

    /**
     * List of product's GTIN numbers.
     */
    gtins?: Array<string>;

    /**
     * The product image.
     */
    image?: string;

    /**
     * The product name.
     */
    name?: string;
  }
}

/**
 * Represents the current stock for the seller.
 */
export interface FulfillmentGetStockResponse {
  /**
   * Number of returned products.
   */
  count?: number;

  /**
   * List of products with their quantity.
   */
  stock?: Array<FulfillmentGetStockResponse.Stock>;

  /**
   * Total number of available products.
   */
  totalCount?: number;
}

export namespace FulfillmentGetStockResponse {
  /**
   * Groups together product and its quantity.
   */
  export interface Stock {
    /**
     * Identifier of the offer currently attached to the product.
     */
    offerId?: string;

    /**
     * The product.
     */
    product?: Stock.Product;

    /**
     * Represents stock quantity.
     */
    quantity?: Stock.Quantity;

    /**
     * Contains information about amount of reserve and its sufficiency for next days.
     * If status is set to NOT_ENOUGH_DATA value of will not be sent.
     */
    reserve?: Stock.Reserve;

    /**
     * Represents selling stats of given product in merchant's stock.
     */
    sellingStats?: Stock.SellingStats;

    /**
     * Information about storage fee for a given product in merchant's stock.
     */
    storageFee?: Stock.StorageFee;
  }

  export namespace Stock {
    /**
     * The product.
     */
    export interface Product {
      /**
       * The product identifier.
       */
      id?: string;

      /**
       * List of product's GTIN numbers.
       */
      gtins?: Array<string>;

      /**
       * The product image.
       */
      image?: string;

      /**
       * The product name.
       */
      name?: string;
    }

    /**
     * Represents stock quantity.
     */
    export interface Quantity {
      /**
       * A number of items in a warehouse available for sale. The amount is taken from
       * the current active offer, or in case there is no active offer, it shows the
       * amount that will be available on offer after it will have been created.
       */
      available?: number;

      /**
       * A number of items in a warehouse not available for sale (e.g. due to damage).
       */
      onHold?: number;

      /**
       * A number of items which are available on the current active offer for the
       * product.
       */
      onOffer?: number;

      /**
       * A number of items already bought but not shipped. These are items in unpaid and
       * paid orders that waiting for courier pickup.
       */
      onOrder?: number;
    }

    /**
     * Contains information about amount of reserve and its sufficiency for next days.
     * If status is set to NOT_ENOUGH_DATA value of will not be sent.
     */
    export interface Reserve {
      /**
       * Prediction of number of days in which inventory will be sold out.
       */
      outOfStockIn?: number;

      /**
       * Gives information about inventory, that can not be expressed using
       * `outOfStockIn` property. Can be one of the given values: NOT_ENOUGH_DATA - not
       * enough data to calculate sufficiency, LOW_STOCK - inventory quantity will run
       * out soon (in 14 days or less) NORMAL - prediction can be calculated,
       * EXCESS_ONE_YEAR - amount of inventory will not be exhausted in (approximately)
       * one year threshold.
       */
      status?: 'NOT_ENOUGH_DATA' | 'LOW_STOCK' | 'NORMAL' | 'EXCESS_ONE_YEAR';
    }

    /**
     * Represents selling stats of given product in merchant's stock.
     */
    export interface SellingStats {
      /**
       * Total sales for the last 30 calendar days. Doesn't include sales for current
       * day. Note that this number is not stable and might change between subsequent
       * requests due to e.g. cancellations of orders within the calculation period.
       */
      lastThirtyDaysSum?: number;

      /**
       * Moving daily sales average calculated for last week (7 calendar days before
       * current day), rounded to integer using "half up" logic. Doesn't include sales
       * for current day. Note that this number is not stable and might change between
       * subsequent requests due to e.g. cancellations of orders within the calculation
       * period.
       */
      lastWeekAverage?: number;
    }

    /**
     * Information about storage fee for a given product in merchant's stock.
     */
    export interface StorageFee {
      /**
       * Details about charged storage fee. Only present in case of CHARGED status, null
       * otherwise.
       */
      details?: StorageFee.Details;

      /**
       * Date when the fee was charged. Normally we return the data for the day before.
       * However, due to asynchronous nature of fee update process, which are calculated
       * overnight, it is possible to have some outdated entries when querying during fee
       * recalculation process. This value allows to ensure that you work on the most
       * recent data.
       */
      feeStatusAt?: string;

      /**
       * Status of the storage fee.
       *
       * - NOT_APPLICABLE - fee for yesterday has not been charged and there are no
       *   available items of the product.
       * - INCLUDED_IN_SERVICE_PRICE - fee for yesterday has not been charged and there
       *   are available items of the product.
       * - CHARGED - the fee has been charged on seller's billing.
       * - PREDICTION - prediction of upcoming fee, based on yesterday selling stats and
       *   quantity.
       */
      status?: 'NOT_APPLICABLE' | 'INCLUDED_IN_SERVICE_PRICE' | 'CHARGED' | 'PREDICTION';
    }

    export namespace StorageFee {
      /**
       * Details about charged storage fee. Only present in case of CHARGED status, null
       * otherwise.
       */
      export interface Details {
        /**
         * Total gross amount of the charged fee.
         */
        amountGross?: number;

        /**
         * Number of items, for which storage fee was charged. For example seller might
         * have 20 items in total, but only 3 of them are stored longer than free storage
         * period, so the fee is applied only for them.
         */
        chargedItemsQuantity?: number;

        /**
         * Currency in which the fee was charged.
         */
        currency?: string;

        /**
         * Predicted date when the fee will be charged based on quantity and average sales.
         * Only present in case of PREDICTION status, null otherwise.
         */
        feePayableAt?: string;
      }
    }
  }
}

export interface FulfillmentGetAvailableProductsParams {
  /**
   * Query param: Maximum number of elements in response.
   */
  limit?: number;

  /**
   * Query param: The offset of elements in the response.
   */
  offset?: number;

  /**
   * Header param: Expected language of product name translation.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA';
}

export interface FulfillmentGetStockParams {
  /**
   * Query param: Filtering search results by ASN status. Following values are
   * allowed: SUBMITTED - Advanced Ship Notice document has been submitted and it
   * contains a particular product. Only the products that have ASN with products on
   * it are returned. NOT_FOUND - Advanced Ship Notice that contains a particular
   * product was not found. It has not been submitted, may be expired, or products
   * have already been delivered to the warehouse. Only the products that don't have
   * related ASN with products on it are returned.
   */
  asnStatus?: 'SUBMITTED' | 'NOT_FOUND';

  /**
   * Query param: Maximum number of elements in response. Ignored for text/csv
   * content type.
   */
  limit?: number;

  /**
   * Query param: The offset of elements in the response. Ignored for text/csv
   * content type.
   */
  offset?: number;

  /**
   * Query param: Filter by products with outOfStockIn greater than or equal.
   */
  outOfStockInFrom?: number;

  /**
   * Query param: Filter by products with outOfStockIn less than or equal.
   */
  outOfStockInTo?: number;

  /**
   * Query param: Filtering search results by product name.
   */
  phrase?: string;

  /**
   * Query param: Filtering search results by availability.
   */
  productAvailability?: Array<'SUFFICIENT' | 'UNAVAILABLE' | 'LOW'>;

  /**
   * Query param: Filtering search results by fulfillment product identifier. Ignored
   * for text/csv content type.
   */
  productId?: string;

  /**
   * Query param: Filtering search results by status.
   */
  productStatus?: 'UNFULFILLABLE';

  /**
   * Query param: Defines how elements are sorted in response. Minus sign can be
   * added to imply descending sort order. Ignored for text/csv content type.
   * Possible values for the "sort" parameter:
   *
   * - -available - sorting by quantity of available products (descending)
   * - available - sorting by quantity of available products (ascending)
   * - -unfulfillable - sorting by quantity of unfulfillable products (descending)
   * - unfulfillable - sorting by quantity of unfulfillable products (ascending)
   * - -name - sorting by product’s name (descending)
   * - name - sorting by product’s name (ascending)
   * - lastWeekSalesAverage - sorting by product last week average sales (ascending)
   * - -lastWeekSalesAverage - sorting by product last week average sales
   *   (descending)
   * - reserve - sorting by reserve.outOfStockIn field (ascending)
   * - -reserve - sorting by reserve.outOfStockIn field (descending)
   * - lastThirtyDaysSalesSum - sorting by product last month sum sales (ascending)
   * - -lastThirtyDaysSalesSum - sorting by product last month sum sales (descending)
   * - storageFee - sorting by storage fee (ascending). The order by fee status is:
   *   NOT_APPLICABLE, then INCLUDED_IN_STORAGE_FEE, then PREDICTION, then CHARGED
   *   ordered by amountGross ascending.
   * - -storageFee - sorting by storage fee (descending). The order by fee status is:
   *   CHARGED ordered by amountGross descending, then PREDICTION, then
   *   INCLUDED_IN_STORAGE_FEE, then NOT_APPLICABLE.
   */
  sort?:
    | 'available'
    | '-available'
    | 'unfulfillable'
    | '-unfulfillable'
    | 'name'
    | '-name'
    | 'lastWeekSalesAverage'
    | '-lastWeekSalesAverage'
    | 'reserve'
    | '-reserve'
    | 'lastThirtyDaysSalesSum'
    | '-lastThirtyDaysSalesSum'
    | 'storageFee'
    | '-storageFee';

  /**
   * Header param: Expected language of product name translation.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA';
}

Fulfillment.AdvanceShipNotices = AdvanceShipNotices;
Fulfillment.SubmitCommands = SubmitCommands;
Fulfillment.Orders = Orders;
Fulfillment.TaxID = TaxID;
Fulfillment.Removal = Removal;

export declare namespace Fulfillment {
  export {
    type FulfillmentGetAvailableProductsResponse as FulfillmentGetAvailableProductsResponse,
    type FulfillmentGetStockResponse as FulfillmentGetStockResponse,
    type FulfillmentGetAvailableProductsParams as FulfillmentGetAvailableProductsParams,
    type FulfillmentGetStockParams as FulfillmentGetStockParams,
  };

  export {
    AdvanceShipNotices as AdvanceShipNotices,
    type AdvanceShipNoticeResponse as AdvanceShipNoticeResponse,
    type AdvanceShipNoticeStatus as AdvanceShipNoticeStatus,
    type HandlingUnit as HandlingUnit,
    type Labels as Labels,
    type AdvanceShipNoticesAPIProduct as Product,
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

  export {
    SubmitCommands as SubmitCommands,
    type SubmitCommand as SubmitCommand,
    type SubmitCommandSubmitParams as SubmitCommandSubmitParams,
  };

  export { Orders as Orders, type OrderGetParcelsResponse as OrderGetParcelsResponse };

  export {
    TaxID as TaxID,
    type TaxIDRequest as TaxIDRequest,
    type TaxIDGetResponse as TaxIDGetResponse,
    type TaxIDUpdateParams as TaxIDUpdateParams,
    type TaxIDAddParams as TaxIDAddParams,
  };

  export { Removal as Removal };
}

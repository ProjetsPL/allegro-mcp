// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CheckoutFormsAPI from './checkout-forms';
import * as ProductOffersAPI from '../../sale/product-offers';
import * as BidAPI from '../../bidding/offers/bid';
import * as InvoicesAPI from './invoices';
import {
  InvoiceCreateParams,
  InvoiceCreateResponse,
  InvoiceListResponse,
  InvoiceUploadFileParams,
  Invoices,
} from './invoices';
import * as ShipmentsAPI from './shipments';
import {
  CheckoutFormAddWaybillCreated,
  ShipmentAddParams,
  ShipmentListResponse,
  Shipments,
} from './shipments';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CheckoutForms extends APIResource {
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);

  /**
   * Use this resource to get an order details. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#szczegoly-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-details" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const checkoutForm =
   *   await client.order.checkoutForms.retrieve(
   *     '29738e61-7f6a-11e8-ac45-09db60ede9d6',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CheckoutForm> {
    return this._client.get(path`/order/checkout-forms/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get an order list. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#lista-zamowien" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-list" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const checkoutForms =
   *   await client.order.checkoutForms.list();
   * ```
   */
  list(
    query: CheckoutFormListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CheckoutFormListResponse> {
    return this._client.get('/order/checkout-forms', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use to set seller order status. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#zmiana-statusu-realizacji-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#order-fulfillment-status-change" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.order.checkoutForms.updateFulfillment('id');
   * ```
   */
  updateFulfillment(
    id: string,
    params: CheckoutFormUpdateFulfillmentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { checkoutForm, ...body } = params;
    return this._client.put(path`/order/checkout-forms/${id}/fulfillment`, {
      query: { checkoutForm },
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface BuyerPreferencesReference {
  /**
   * Language
   */
  language?: string;
}

export interface CheckoutForm {
  /**
   * Checkout form id
   */
  id: string;

  /**
   * Buyer data
   */
  buyer: CheckoutForm.Buyer;

  /**
   * @deprecated Deprecated. This field is deprecated in favor of
   * `lineItems[].discounts` and will be removed in the future.
   */
  discounts: Array<CheckoutForm.Discount>;

  lineItems: Array<CheckoutForm.LineItem>;

  /**
   * Describes status of the form delivery and purchase options based on payment and
   * purchase status. _ `BOUGHT` - purchase without checkout form filled in _
   * `FILLED_IN` - checkout form filled in but payment is not completed yet so data
   * could still change _ `READY_FOR_PROCESSING` - payment completed. Purchase is
   * ready for processing. _ `CANCELLED` - purchase cancelled by buyer.
   */
  status: 'BOUGHT' | 'FILLED_IN' | 'READY_FOR_PROCESSING' | 'CANCELLED';

  summary: CheckoutForm.Summary;

  surcharges: Array<CheckoutFormPaymentReference>;

  delivery?: CheckoutForm.Delivery;

  fulfillment?: CheckoutFormFulfillment;

  invoice?: CheckoutForm.Invoice;

  marketplace?: CheckoutForm.Marketplace;

  /**
   * Message from buyer to seller
   */
  messageToSeller?: string;

  note?: CheckoutForm.Note;

  payment?: CheckoutFormPaymentReference;

  /**
   * Checkout form revision
   */
  revision?: string;

  /**
   * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt?: string;
}

export namespace CheckoutForm {
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

    /**
     * Buyer address
     */
    address?: Buyer.Address;

    /**
     * Company name
     */
    companyName?: string;

    /**
     * Buyer's first name
     */
    firstName?: string;

    /**
     * Buyer's last name
     */
    lastName?: string;

    /**
     * Buyer's personal identity number (PESEL)
     */
    personalIdentity?: string;

    /**
     * Phone number
     */
    phoneNumber?: string;

    preferences?: CheckoutFormsAPI.BuyerPreferencesReference;
  }

  export namespace Buyer {
    /**
     * Buyer address
     */
    export interface Address {
      /**
       * City name
       */
      city?: string;

      /**
       * Country code
       */
      countryCode?: string;

      /**
       * Postal code
       */
      postCode?: string;

      /**
       * Street
       */
      street?: string;
    }
  }

  /**
   * @deprecated
   */
  export interface Discount {
    /**
     * Describes the types of discounts used in the checkout form. The types of
     * discounts can be as follows: _ `COUPON` - a coupon was used during payment _
     * `BUNDLE` - some items were bought as a bundle _ `MULTIPACK` - at least one item
     * was bought with a multipack option turned on _ `CROSSMULTIPACK` - some items,
     * each from a different offer, were bought together as a multipack \*
     * `ALLEGRO_PRICES` - some items are included in the Allegro Prices program
     */
    type: 'COUPON' | 'BUNDLE' | 'MULTIPACK' | 'CROSSMULTIPACK' | 'ALLEGRO_PRICES';
  }

  /**
   * Order item
   */
  export interface LineItem {
    /**
     * Line item identifier
     */
    id: string;

    /**
     * Offer identifier.
     */
    offer: LineItem.Offer;

    /**
     * The price data.
     */
    originalPrice: BidAPI.Price;

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

    discounts?: Array<LineItem.Discount>;

    reconciliation?: LineItem.Reconciliation;

    selectedAdditionalServices?: Array<LineItem.SelectedAdditionalService>;

    tax?: LineItem.Tax;

    vouchers?: Array<LineItem.Voucher>;
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

      /**
       * If the offer was a product set, you can see a list of component products
       * (product id with quantity).
       */
      productSet?: Offer.ProductSet;
    }

    export namespace Offer {
      /**
       * If the offer was a product set, you can see a list of component products
       * (product id with quantity).
       */
      export interface ProductSet {
        /**
         * List of products in a product set.
         */
        products: Array<ProductSet.Product>;
      }

      export namespace ProductSet {
        /**
         * Product element definition.
         */
        export interface Product {
          /**
           * Product id.
           */
          id: string;

          /**
           * Product quantity in a product set.
           */
          quantity?: number;
        }
      }
    }

    export interface Discount {
      /**
       * Describes the types of discounts used in the lineItems. The types of discounts
       * can be as follows:
       *
       * - `BUNDLE` - a bundle discount (used also for bundles with no price change)
       * - `UNIT_PERCENTAGE_DISCOUNT` - a MULTIPACK or CROSS_MULTIPACK discount
       * - `WHOLESALE_PRICE_LIST` - a wholesale price list discount (a discount for
       *   company users only)
       * - `LARGE_ORDER_DISCOUNT` - a large order discount (a discount for company users
       *   only)
       * - `TURNOVER_DISCOUNT` - a turnover discount (a discount for company users only)
       * - `COUPON` - a coupon discount
       * - `CAMPAIGN` - a campaign discount
       */
      type?:
        | 'BUNDLE'
        | 'UNIT_PERCENTAGE_DISCOUNT'
        | 'WHOLESALE_PRICE_LIST'
        | 'LARGE_ORDER_DISCOUNT'
        | 'TURNOVER_DISCOUNT'
        | 'COUPON'
        | 'CAMPAIGN';
    }

    export interface Reconciliation {
      /**
       * Quantity of reconciled items
       */
      quantity?: number;

      /**
       * Reconciliation type used in the Allegro Prices program, in which the offer is
       * included. The following values are possible: _ `BILLING` - a reconciliation
       * value is counted as a new entry in the billing _ `WALLET` - a reconciliation
       * value is added to the checkout form payment
       */
      type?: 'BILLING' | 'WALLET';

      /**
       * The price data.
       */
      value?: BidAPI.Price;
    }

    export interface SelectedAdditionalService {
      /**
       * Additional service id
       */
      definitionId?: string;

      /**
       * Additional service name
       */
      name?: string;

      /**
       * The price data.
       */
      price?: BidAPI.Price;

      /**
       * Quantity of an additional service
       */
      quantity?: number;
    }

    export interface Tax {
      /**
       * The exemption of taxation.
       */
      exemption?: string | null;

      /**
       * The tax rate.
       */
      rate?: string | null;

      /**
       * The subject of taxation.
       */
      subject?: string | null;
    }

    export interface Voucher {
      /**
       * Describes the types of vouchers used in the lineItems. The types of vouchers can
       * be as follows: \* `NOTEBOOKS_FOR_TEACHERS` - a voucher for teacher's notebook
       * action.
       */
      type: 'NOTEBOOKS_FOR_TEACHERS';

      /**
       * The voucher code.
       */
      code?: string;

      /**
       * The external transaction id. The value may differ depending on the status type.
       */
      externalTransactionId?: string;

      /**
       * Describes the status of the current voucher. The status of voucher can be as
       * follows: _ `ACTIVE` - an active voucher, ready to use, _ `CANCELLED` - a
       * cancelled voucher, disabled to use.
       */
      status?: 'ACTIVE' | 'CANCELLED';

      /**
       * The price data.
       */
      value?: Voucher.Value;
    }

    export namespace Voucher {
      /**
       * The price data.
       */
      export interface Value extends BidAPI.Price {}
    }
  }

  export interface Summary {
    /**
     * The price data.
     */
    totalToPay: Summary.TotalToPay;
  }

  export namespace Summary {
    /**
     * The price data.
     */
    export interface TotalToPay extends BidAPI.Price {}
  }

  export interface Delivery {
    address?: Delivery.Address;

    /**
     * Calculated number of packages.
     */
    calculatedNumberOfPackages?: number;

    /**
     * The delivery cancellation information.
     */
    cancellation?: Delivery.Cancellation;

    /**
     * The price data.
     */
    cost?: BidAPI.Price;

    method?: Delivery.Method;

    pickupPoint?: Delivery.PickupPoint;

    /**
     * Buyer used a SMART option
     */
    smart?: boolean;

    time?: Delivery.Time;
  }

  export namespace Delivery {
    export interface Address {
      /**
       * City name
       */
      city: string;

      /**
       * Country code
       */
      countryCode: string;

      /**
       * Receiver's first name
       */
      firstName: string;

      /**
       * Receiver's last name
       */
      lastName: string;

      /**
       * Street name
       */
      street: string;

      /**
       * Postal code
       */
      zipCode: string;

      /**
       * Company name
       */
      companyName?: string;

      /**
       * Address modification date
       */
      modifiedAt?: string;

      /**
       * Phone number
       */
      phoneNumber?: string;
    }

    /**
     * The delivery cancellation information.
     */
    export interface Cancellation {
      /**
       * ISO date when the delivery was cancelled.
       */
      date: string;
    }

    export interface Method {
      /**
       * Delivery method id
       */
      id?: string;

      /**
       * Delivery method name
       */
      name?: string;
    }

    export interface PickupPoint {
      /**
       * Delivery point id
       */
      id?: string;

      address?: PickupPoint.Address;

      /**
       * Delivery point description
       */
      description?: string;

      /**
       * Delivery point name
       */
      name?: string;
    }

    export namespace PickupPoint {
      export interface Address {
        /**
         * City name
         */
        city?: string;

        /**
         * Country code
         */
        countryCode?: string;

        /**
         * Delivery point street name
         */
        street?: string;

        /**
         * Delivery point postal code
         */
        zipCode?: string;
      }
    }

    export interface Time {
      /**
       * Dates when delivery should be dispatched, passed to the provider.
       */
      dispatch?: Time.Dispatch;

      /**
       * ISO date when the earliest delivery attempt can take place.
       */
      from?: string;

      /**
       * @deprecated Guaranteed date when first delivery attempt takes place. This is
       * always filled for Allegro One Courier delivery method. This field is deprecated
       * in favor of `delivery.time.from` and `delivery.time.to`.
       */
      guaranteed?: Time.Guaranteed;

      /**
       * ISO date when the latest delivery attempt can take place.
       */
      to?: string;
    }

    export namespace Time {
      /**
       * Dates when delivery should be dispatched, passed to the provider.
       */
      export interface Dispatch {
        /**
         * ISO date when the earliest dispatch should take place.
         */
        from?: string;

        /**
         * ISO date when the latest dispatch should take place.
         */
        to?: string;
      }

      /**
       * @deprecated Guaranteed date when first delivery attempt takes place. This is
       * always filled for Allegro One Courier delivery method. This field is deprecated
       * in favor of `delivery.time.from` and `delivery.time.to`.
       */
      export interface Guaranteed {
        /**
         * ISO date when the earliest delivery attempt can take place.
         */
        from?: string;

        /**
         * ISO date when the latest delivery attempt can take place.
         */
        to?: string;
      }
    }
  }

  export interface Invoice {
    /**
     * Is invoice required by buyer?
     */
    required: boolean;

    address?: Invoice.Address;

    /**
     * Due date to put on an invoice for Extended Payment Terms purchases. For other
     * payment methods this field will be null.
     */
    dueDate?: string;

    /**
     * Invoice features list:
     *
     * - VAT_EU_VERIFIED - order's data is verified for VAT EU transactions. The
     *   presence of this feature means that VAT_EU number will appear in
     *   `address.company.ids` field. This feature flag is mutually exclusive with
     *   `VAT_EU_UNVERIFIED` feature. Read more:
     *   <a href="../../news/serwisy-zagraniczne-allegro-od-18-listopada-2024-pozwolimy-wszystkim-sprzedajacym-udostepnic-oferty-na-business-allegro-cz-oraz-wdrozymy-wsparcie-dla-transakcji-wewnatrzwspolnotowych-1nayOPKLaSr" target="_blank">PL</a>
     *   /
     *   <a href="../../news/allegro-foreign-marketplaces-starting-november-18-2024-we-will-allow-all-sellers-to-list-offers-on-business-allegro-cz-and-implement-support-for-intra-community-transactions-1nayOPKLaSr" target="_blank">EN</a>.
     * - VAT_EU_UNVERIFIED - order meets the conditions of VAT EU transaction, but the
     *   Buyer's VAT_EU number is not verified. This feature flag is mutually exclusive
     *   with `VAT_EU_VERIFIED` feature. Read more:
     *   <a href="../../news/serwisy-zagraniczne-allegro-od-18-listopada-2024-pozwolimy-wszystkim-sprzedajacym-udostepnic-oferty-na-business-allegro-cz-oraz-wdrozymy-wsparcie-dla-transakcji-wewnatrzwspolnotowych-1nayOPKLaSr" target="_blank">PL</a>
     *   /
     *   <a href="../../news/allegro-foreign-marketplaces-starting-november-18-2024-we-will-allow-all-sellers-to-list-offers-on-business-allegro-cz-and-implement-support-for-intra-community-transactions-1nayOPKLaSr" target="_blank">EN</a>.
     */
    features?: Array<string>;
  }

  export namespace Invoice {
    export interface Address {
      /**
       * City name
       */
      city: string;

      /**
       * Country code
       */
      countryCode: string;

      /**
       * Street name
       */
      street: string;

      /**
       * Postal code
       */
      zipCode: string;

      /**
       * Setting the value to null indicates a private purchase, while any other value
       * indicates a corporate purchase.
       */
      company?: Address.Company;

      naturalPerson?: Address.NaturalPerson;
    }

    export namespace Address {
      /**
       * Setting the value to null indicates a private purchase, while any other value
       * indicates a corporate purchase.
       */
      export interface Company {
        /**
         * Name of a company for which invoice should be issued.
         */
        name: string;

        /**
         * The vat payer status: - `ACTIVE` - user explicitly declared as an active VAT
         * taxpayer, - `NON_ACTIVE` - user explicitly declared as not an active VAT
         * taxpayer, - `NOT_APPLICABLE` - user hasn't declared the VAT taxpayer status, or
         * it's not applicable for given address type or provided company numbers.
         */
        vatPayerStatus: 'ACTIVE' | 'NON_ACTIVE' | 'NOT_APPLICABLE';

        /**
         * Tax ids of a company for which invoice should be issued.
         */
        ids?: Array<Company.ID>;

        /**
         * @deprecated Tax id.
         */
        taxId?: string;
      }

      export namespace Company {
        export interface ID {
          /**
           * The tax id type.
           */
          type: 'PL_NIP' | 'CZ_ICO' | 'CZ_DIC' | 'HU_ADOSZAM' | 'SK_ICO' | 'SK_IC_DPH' | 'VAT_EU' | 'OTHER';

          /**
           * The tax id value.
           */
          value: string;
        }
      }

      export interface NaturalPerson {
        /**
         * Invoice receiver first name
         */
        firstName: string;

        /**
         * Invoice receiver last name
         */
        lastName: string;
      }
    }
  }

  export interface Marketplace {
    /**
     * Id of the purchase marketplace
     */
    id: string;
  }

  export interface Note {
    /**
     * Seller's note for the order
     */
    text?: string;
  }
}

export interface CheckoutFormFulfillment {
  shipmentSummary?: CheckoutFormFulfillment.ShipmentSummary;

  /**
   * Order seller status. The status is managed by the seller, however in some cases
   * the seller can enable automatic change of the status in the Orders
   * [settings](https://salescenter.allegro.com/orders/settings). Order changes to
   * `SENT` status when a tracking number is added to the order and the seller has
   * enabled corresponding setting (see:
   * [here](https://help.allegro.com/sell/en/a/sales-management-via-advanced-settings-of-the-list-of-offers-and-orders-6M9E0wr5Rt5#automatic-status-change-after-adding-a-tracking-number)).
   * Order can be switched to `RETURNED` status when both the buyer returns all
   * order's items and the seller makes a refund for all of the order's items (either
   * automatically or manually, see:
   * [here](https://help.allegro.com/sell/en/a/how-can-i-issue-a-refund-to-the-buyer-k1wRo9wBXUx)).
   * The `RETURNED` status cannot be set by the seller - it changes automatically
   * when corresponding setting is enabled in sale settings (see:
   * [here](https://help.allegro.com/sell/en/a/how-to-use-the-orders-tab-6M9E0wO9BFw#filtering-and-searching-for-orders)).
   */
  status?:
    | 'NEW'
    | 'PROCESSING'
    | 'READY_FOR_SHIPMENT'
    | 'READY_FOR_PICKUP'
    | 'SENT'
    | 'PICKED_UP'
    | 'CANCELLED'
    | 'SUSPENDED'
    | 'RETURNED';
}

export namespace CheckoutFormFulfillment {
  export interface ShipmentSummary {
    /**
     * Indicates how many line items have tracking number specified.
     */
    lineItemsSent?: 'NONE' | 'SOME' | 'ALL';
  }
}

export interface CheckoutFormPaymentReference {
  /**
   * Payment id
   */
  id: string;

  /**
   * Payment type
   */
  type: 'CASH_ON_DELIVERY' | 'WIRE_TRANSFER' | 'ONLINE' | 'SPLIT_PAYMENT' | 'EXTENDED_TERM';

  /**
   * Payment additional features:
   *
   * - `ALLEGRO_PAY` - The payment was made using Allegro Pay.
   */
  features?: Array<string>;

  /**
   * Date when the event occurred
   */
  finishedAt?: string;

  /**
   * The price data.
   */
  paidAmount?: BidAPI.Price;

  /**
   * Payment provider:
   *
   * - `PAYU` - processed by PAYU operator.
   * - `P24` - processed by PRZELEWY24 operator.
   * - `AF` - processed by Allegro Finance operator.
   * - `OFFLINE` - offline payment.
   * - `EPT` - extended payment term with Allegro Pay Business.
   */
  provider?: 'PAYU' | 'P24' | 'AF' | 'OFFLINE' | 'EPT';

  /**
   * The price data.
   */
  reconciliation?: BidAPI.Price;
}

export interface CheckoutFormListResponse {
  checkoutForms: Array<CheckoutForm>;

  /**
   * number of returned objects
   */
  count: number;

  /**
   * Number of all objects of requested status(es) available (regardless of the
   * provided limit and offset)
   */
  totalCount: number;
}

export interface CheckoutFormListParams {
  buyer?: CheckoutFormListParams.Buyer;

  delivery?: CheckoutFormListParams.Delivery;

  fulfillment?: CheckoutFormListParams.Fulfillment;

  /**
   * Maximum number of checkout-forms in response.
   */
  limit?: number;

  lineItems?: CheckoutFormListParams.LineItems;

  marketplace?: CheckoutFormListParams.Marketplace;

  /**
   * Index of first returned checkout-form from all search results.
   */
  offset?: number;

  payment?: CheckoutFormListParams.Payment;

  /**
   * The results' sorting order. No prefix in the value means ascending order. `-`
   * prefix means descending order. If you don't provide the sort parameter, the list
   * is sorted by line item boughtAt date, descending.
   */
  sort?: 'lineItems.boughtAt' | '-lineItems.boughtAt' | 'updatedAt' | '-updatedAt';

  /**
   * Specify status value that checkout-forms must have to be included in the output.
   * Allowed values are:
   *
   * - `BOUGHT`: purchase without checkout form filled in.
   * - `FILLED_IN`: checkout form filled in but payment is not completed yet so data
   *   could still change.
   * - `READY_FOR_PROCESSING`: payment completed. Purchase is ready for processing.
   * - `CANCELLED`: purchase cancelled by buyer.
   */
  status?: string;

  surcharges?: CheckoutFormListParams.Surcharges;

  updatedAt?: CheckoutFormListParams.UpdatedAt;
}

export namespace CheckoutFormListParams {
  export interface Buyer {
    /**
     * Find checkout-forms having specified buyer login.
     */
    login?: string;
  }

  export interface Delivery {
    /**
     * Find checkout-forms having specified delivery method id.
     */
    method?: string;
  }

  export interface Fulfillment {
    /**
     * Specify filter for line items sending status. Allowed values are:
     *
     * - `NONE`: none of line items have tracking number specified
     * - `SOME`: some of line items have tracking number specified
     * - `ALL`: all of line items have tracking number specified.
     */
    shipmentSummary?: string;

    /**
     * Specify seller status value that checkout-forms must have to be included in the
     * output. Allowed values are:
     *
     * - `NEW`
     * - `PROCESSING`
     * - `READY_FOR_SHIPMENT`
     * - `READY_FOR_PICKUP`
     * - `SENT`
     * - `PICKED_UP`
     * - `CANCELLED`
     * - `SUSPENDED`
     * - `RETURNED`.
     */
    status?: string;
  }

  export interface LineItems {
    /**
     * Latest line item bought date. The lower bound of date time range from which
     * checkout forms will be taken.
     */
    boughtAt?: string;
  }

  export interface Marketplace {
    /**
     * Find checkout-forms of orders purchased on specified marketplace.
     */
    id?: string;
  }

  export interface Payment {
    /**
     * Find checkout-forms having specified payment id.
     */
    id?: string;
  }

  export interface Surcharges {
    /**
     * Find checkout-forms having specified surcharge id.
     */
    id?: string;
  }

  export interface UpdatedAt {
    /**
     * Checkout form last modification date. The lower bound of date time range from
     * which checkout forms will be taken.
     */
    gte?: string;

    /**
     * Checkout form last modification date. The upper bound of date time range from
     * which checkout forms will be taken.
     */
    lte?: string;
  }
}

export interface CheckoutFormUpdateFulfillmentParams {
  /**
   * Query param:
   */
  checkoutForm?: CheckoutFormUpdateFulfillmentParams.CheckoutForm;

  /**
   * Body param:
   */
  shipmentSummary?: CheckoutFormUpdateFulfillmentParams.ShipmentSummary;

  /**
   * Body param: Order seller status. The status is managed by the seller, however in
   * some cases the seller can enable automatic change of the status in the Orders
   * [settings](https://salescenter.allegro.com/orders/settings). Order changes to
   * `SENT` status when a tracking number is added to the order and the seller has
   * enabled corresponding setting (see:
   * [here](https://help.allegro.com/sell/en/a/sales-management-via-advanced-settings-of-the-list-of-offers-and-orders-6M9E0wr5Rt5#automatic-status-change-after-adding-a-tracking-number)).
   * Order can be switched to `RETURNED` status when both the buyer returns all
   * order's items and the seller makes a refund for all of the order's items (either
   * automatically or manually, see:
   * [here](https://help.allegro.com/sell/en/a/how-can-i-issue-a-refund-to-the-buyer-k1wRo9wBXUx)).
   * The `RETURNED` status cannot be set by the seller - it changes automatically
   * when corresponding setting is enabled in sale settings (see:
   * [here](https://help.allegro.com/sell/en/a/how-to-use-the-orders-tab-6M9E0wO9BFw#filtering-and-searching-for-orders)).
   */
  status?:
    | 'NEW'
    | 'PROCESSING'
    | 'READY_FOR_SHIPMENT'
    | 'READY_FOR_PICKUP'
    | 'SENT'
    | 'PICKED_UP'
    | 'CANCELLED'
    | 'SUSPENDED'
    | 'RETURNED';
}

export namespace CheckoutFormUpdateFulfillmentParams {
  export interface CheckoutForm {
    /**
     * Checkout form revision.
     */
    revision?: string;
  }

  export interface ShipmentSummary {
    /**
     * Indicates how many line items have tracking number specified.
     */
    lineItemsSent?: 'NONE' | 'SOME' | 'ALL';
  }
}

CheckoutForms.Shipments = Shipments;
CheckoutForms.Invoices = Invoices;

export declare namespace CheckoutForms {
  export {
    type BuyerPreferencesReference as BuyerPreferencesReference,
    type CheckoutForm as CheckoutForm,
    type CheckoutFormFulfillment as CheckoutFormFulfillment,
    type CheckoutFormPaymentReference as CheckoutFormPaymentReference,
    type CheckoutFormListResponse as CheckoutFormListResponse,
    type CheckoutFormListParams as CheckoutFormListParams,
    type CheckoutFormUpdateFulfillmentParams as CheckoutFormUpdateFulfillmentParams,
  };

  export {
    Shipments as Shipments,
    type CheckoutFormAddWaybillCreated as CheckoutFormAddWaybillCreated,
    type ShipmentListResponse as ShipmentListResponse,
    type ShipmentAddParams as ShipmentAddParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUploadFileParams as InvoiceUploadFileParams,
  };
}

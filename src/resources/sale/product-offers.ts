// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductOffersAPI from './product-offers';
import * as SaleAPI from './sale';
import * as SizeTablesAPI from './size-tables';
import * as BidAPI from '../bidding/offers/bid';
import * as ProductsAPI from './products/products';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ProductOffers extends APIResource {
  /**
   * Use this resource to create offer based on product. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-wystawic-oferte-z-produktem-za-pomoca-zasobu-sale-product-offers" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-list-an-offer-with-a-product-via-sale-product-offers-resource" target="_blank">EN</a>.
   * Note that requests may be limited.
   *
   * @example
   * ```ts
   * const saleProductOfferResponseV1 =
   *   await client.sale.productOffers.create({
   *     body: { stock: {} },
   *   });
   * ```
   */
  create(params: ProductOfferCreateParams, options?: RequestOptions): APIPromise<SaleProductOfferResponseV1> {
    const { body, 'Accept-Language': acceptLanguage } = params;
    return this._client.post('/sale/product-offers', {
      body: body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
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
   * Use this resource to retrieve all data of the particular product-offer. Read
   * more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#publikacja-oferty-w-asynchronicznym-api" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-publication-in-asynchronous-api" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const saleProductOfferResponseV1 =
   *   await client.sale.productOffers.retrieve('offerId');
   * ```
   */
  retrieve(offerID: string, options?: RequestOptions): APIPromise<SaleProductOfferResponseV1> {
    return this._client.get(path`/sale/product-offers/${offerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to edit offer. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#edycja-pojedynczej-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#editing-single-offer" target="_blank">EN</a>.
   * Note that requests may be limited.
   *
   * @example
   * ```ts
   * const saleProductOfferResponseV1 =
   *   await client.sale.productOffers.update('offerId', {
   *     body: {},
   *   });
   * ```
   */
  update(
    offerID: string,
    params: ProductOfferUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SaleProductOfferResponseV1> {
    const { body, 'Accept-Language': acceptLanguage } = params;
    return this._client.patch(path`/sale/product-offers/${offerID}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.allegro.public.v1+json',
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
   * The URI for the resource given by Location header of POST /sale/product-offers
   * and PATCH /sale/product-offers/{offerId}. Use this resource to check processing
   * status of a POST or PATCH request. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#publikacja-oferty-w-asynchronicznym-api" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-publication-in-asynchronous-api" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.productOffers.checkOperationStatus(
   *     'operationId',
   *     { offerId: 'offerId' },
   *   );
   * ```
   */
  checkOperationStatus(
    operationID: string,
    params: ProductOfferCheckOperationStatusParams,
    options?: RequestOptions,
  ): APIPromise<ProductOfferCheckOperationStatusResponse> {
    const { offerId, 'Accept-Language': acceptLanguage } = params;
    return this._client.get(path`/sale/product-offers/${offerId}/operations/${operationID}`, {
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
   * Use this resource to retrieve selected data of the particular product-offer. The
   * model and functionality is a subset of the full product offer get endpoint
   * (`GET /sale/product-offers/{offerId}`), but it is faster and more reliable.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.productOffers.retrieveParts('offerId', {
   *     include: ['stock'],
   *   });
   * ```
   */
  retrieveParts(
    offerID: string,
    params: ProductOfferRetrievePartsParams,
    options?: RequestOptions,
  ): APIPromise<ProductOfferRetrievePartsResponse> {
    const { 'Accept-Language': acceptLanguage, ...query } = params;
    return this._client.get(path`/sale/product-offers/${offerID}/parts`, {
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
 * The definitions of the different after sales services assigned to the offer.
 */
export interface AfterSalesServices {
  /**
   * The implied warranty information.
   */
  impliedWarranty?: ImpliedWarranty;

  /**
   * The return policy information.
   */
  returnPolicy?: ReturnPolicy;

  /**
   * The warranty information.
   */
  warranty?: Warranty;
}

/**
 * Defines offer properties for buyers with company account (Allegro Biznes).
 */
export interface B2b {
  /**
   * If true, then only users with company account are eligible to buy given offer.
   * Offers buyable only by business are allowed only in selected categories. False
   * by default.
   */
  buyableOnlyByBusiness?: boolean;
}

/**
 * The price data.
 */
export interface BuyNowPrice {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

export interface CompatibilityListManualType {
  /**
   * List of the compatible items. Maximum number of elements on the list depends on
   * type of included compatible items. Configuration and details concerning the
   * compatible items in selected category are provided in the response for GET
   * <a href="/documentation/#tag/Compatibility-List/paths/~1sale~1compatibility-list~1supported-categories/get">
   * supported-categories</a> resource in `validationRules` object.
   */
  items: Array<CompatibilityListManualType.Item>;
}

export namespace CompatibilityListManualType {
  export interface Item {
    type: string;
  }
}

export interface Contact {
  /**
   * Id of contact.
   */
  id?: string;
}

export interface DeliveryProductOfferRequest {
  /**
   * @deprecated Additional information about delivery. Parameter is deprecated and
   * will be removed in the future. Additional information is only visible on
   * marketplace `allegro-pl`.
   */
  additionalInfo?: string;

  /**
   * Handling time, ISO 8601 duration format. This field must be set to one of the
   * following: PT0S for immediately, PT24H, P2D, P3D, P4D, P5D, P7D, P10D, P14D,
   * P21D, P30D, P60D.
   */
  handlingTime?: string;

  shippingRates?: DeliveryProductOfferRequest.ShippingRates;
}

export namespace DeliveryProductOfferRequest {
  export interface ShippingRates extends SizeTablesAPI.JustID {
    /**
     * The name of the shipping rate.
     */
    name?: string;
  }
}

export interface Error {
  /**
   * The error code. You can use this code when contacting us about any problems with
   * our systems.
   */
  code?: string;

  /**
   * For some cases, this field provides more details regarding the error. This field
   * can be empty.
   */
  details?: string | null;

  /**
   * A message directed to the developer of the program. This message will always be
   * in English and give you some more technical details on what exactly has
   * happened.
   */
  message?: string;

  /**
   * Additional technical properties of this error. Set of possible keys depends on
   * the specific error.
   */
  metadata?: Record<string, string>;

  /**
   * This field will point to a specific field in object if the error is connected to
   * a problem with such specific field. This field can be empty
   */
  path?: string | null;

  /**
   * The message that can be presented directly to your user. It will not contain any
   * technical information. This message is translated based on the value of the
   * "Accept-Language" header. By default message in English is returned.
   */
  userMessage?: string;
}

/**
 * The information on the offer in an external system.
 */
export interface ExternalID {
  /**
   * The ID of the offer in the external system.
   */
  id?: string;
}

/**
 * The implied warranty information.
 */
export interface ImpliedWarranty {
  /**
   * The ID of the implied warranty definition.
   */
  id?: string;
}

/**
 * for offer with a delivery method it is a parcel dispatch location. For offers
 * with personal pick-up it is a pick-up location, additionally we recommend to use
 * points of service
 * (<a href="../../documentation/#tag/Points-of-service" target="_blank">https://developer.allegro.pl/documentation/#tag/Points-of-service</a>)
 */
export interface Location {
  city?: string;

  /**
   * The 2-letter country code as defined in ISO 3166.
   */
  countryCode?: string;

  /**
   * The format of post code depends on 'countryCode'. For countryCode equal to 'PL',
   * the expected format is 'XX-XXX', for other countries format is less
   * restrictive - 12 characters or less are expected.
   */
  postCode?: string;

  /**
   * This field is mandatory if countryCode is set to "PL", for other values,
   * currently, it is ignored. For countryCode equalling "PL", this field must be set
   * to one of the following: DOLNOSLASKIE, KUJAWSKO_POMORSKIE, LUBELSKIE, LUBUSKIE,
   * LODZKIE, MALOPOLSKIE, MAZOWIECKIE, OPOLSKIE, PODKARPACKIE, PODLASKIE, POMORSKIE,
   * SLASKIE, SWIETOKRZYSKIE, WARMINSKO_MAZURSKIE, WIELKOPOLSKIE, ZACHODNIOPOMORSKIE.
   */
  province?: string;
}

export interface MarketedBeforeGpsrObligation {
  /**
   * Allows you to declare that the product was introduced before 13 Dec 2024 and
   * therefore does not require GPSR data.
   */
  marketedBeforeGPSRObligation?: boolean | null;
}

/**
 * The price data.
 */
export interface MinimalPrice {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

/**
 * The category to which the offer is listed for sale.
 */
export interface OfferCategory {
  /**
   * Category identifier.
   */
  id?: string;
}

export interface OfferID {
  /**
   * Offer id
   */
  id?: string;
}

/**
 * The publication status of the current offer. The possible values:
 *
 * - _INACTIVE_ - a draft offer
 * - _ACTIVATING_ - the offer is planned for listing or is during the process of
 *   activation
 * - _ACTIVE_ - the offer is active
 * - _ENDED_ - the offer was active and is now ended (for whatever reason)
 */
export type OfferStatus = 'INACTIVE' | 'ACTIVATING' | 'ACTIVE' | 'ENDED';

/**
 * Offer's parameter.
 */
export interface ParameterProductOfferRequest {
  id?: string;

  /**
   * The name of the parameter.
   */
  name?: string;

  /**
   * Parameter's range value
   */
  rangeValue?: ProductsAPI.ParameterRangeValue;

  values?: Array<string>;

  valuesIds?: Array<string>;
}

/**
 * Parameter.
 */
export interface ParameterProductOfferResponse {
  id?: string;

  /**
   * The name of the parameter.
   */
  name?: string;

  /**
   * Parameter's range value
   */
  rangeValue?: ProductsAPI.ParameterRangeValue;

  values?: Array<string>;

  valuesIds?: Array<string>;
}

/**
 * Offer additional services.
 */
export interface ProductOfferAdditionalServices {
  /**
   * Id of additional services.
   */
  id?: string;

  /**
   * Name of additional services.
   */
  name?: string;
}

export interface ProductOfferAttachmentItem {
  /**
   * Id of attachment.
   */
  id?: string;
}

export interface ProductOfferFundraisingCampaignRequest {
  /**
   * Id of fundraising campaign.
   */
  id?: string;

  /**
   * Name of fundraising campaign.
   */
  name?: string;
}

export interface ProductSetElement {
  /**
   * You should enter the product identifier (UUID or EAN) or a complete product
   * definition.
   */
  product?: ProductSetElement.Product;
}

export namespace ProductSetElement {
  /**
   * You should enter the product identifier (UUID or EAN) or a complete product
   * definition.
   */
  export interface Product {
    /**
     * Product id.
     */
    id?: string;

    /**
     * Product category
     */
    category?: SaleAPI.ProductCategory;

    /**
     * Type of id. This field is optional. It helps in finding products more
     * accurately. If an idType is not set, a given id is understood as a product's id.
     *
     * - `GTIN` - restricts the search filtering to GTINs (Global Trade Item Number),
     *   e.g. EAN, ISBN, UPC.
     * - `MPN` - restricts the search filtering to MPNs (Manufacturer Part Number).
     */
    idType?: 'GTIN' | 'MPN';

    /**
     * List of product images.
     */
    images?: Array<string>;

    /**
     * Product name.
     */
    name?: string;

    /**
     * List of product parameters.
     */
    parameters?: Array<ProductOffersAPI.ParameterProductOfferRequest>;
  }
}

export interface ProductSetElementQuantity {
  /**
   * The number of a given product included in a single offer sold as an element of a
   * product set. <small>**Note:** For number of sets available in stock, use
   * `stock.available` property.</small>
   */
  quantity?: ProductSetElementQuantity.Quantity;
}

export namespace ProductSetElementQuantity {
  /**
   * The number of a given product included in a single offer sold as an element of a
   * product set. <small>**Note:** For number of sets available in stock, use
   * `stock.available` property.</small>
   */
  export interface Quantity {
    value?: number;
  }
}

export interface ProductSetElementResponsiblePersonRequest {
  /**
   * Reference to the responsible person configured using
   * <a href="https://developer.allegro.pl/documentation#tag/Responsible-persons">Responsible
   * Persons API</a>. Provide either id or name - id will be used if both are
   * provided. Setting this object to null will result in no responsible person
   * assigned to this product.
   */
  responsiblePerson?: ProductSetElementResponsiblePersonRequest.ResponsiblePerson;
}

export namespace ProductSetElementResponsiblePersonRequest {
  /**
   * Reference to the responsible person configured using
   * <a href="https://developer.allegro.pl/documentation#tag/Responsible-persons">Responsible
   * Persons API</a>. Provide either id or name - id will be used if both are
   * provided. Setting this object to null will result in no responsible person
   * assigned to this product.
   */
  export interface ResponsiblePerson {
    /**
     * Identifier of a responsible person.
     */
    id?: string;

    /**
     * Name of a responsible person. Note that this references name of the person
     * object, not the name in their personal data section.
     */
    name?: string;
  }
}

export interface ProductSetElementResponsibleProducerRequestWrapper {
  /**
   * Reference to the responsible producer configured using
   * <a href="https://developer.allegro.pl/documentation#tag/Responsible-producers">Responsible
   * Producers API</a>.
   */
  responsibleProducer?: ProductSetElementResponsibleProducerRequestWrapper.ResponsibleProducer;
}

export namespace ProductSetElementResponsibleProducerRequestWrapper {
  /**
   * Reference to the responsible producer configured using
   * <a href="https://developer.allegro.pl/documentation#tag/Responsible-producers">Responsible
   * Producers API</a>.
   */
  export interface ResponsibleProducer {
    type: string;
  }
}

/**
 * Contains information about product's safety. Reference
 * <a href="https://developer.allegro.pl/documentation#operation/createOfferAttachmentUsingPOST">Docs</a>
 */
export interface ProductSetElementSafetyInformation {
  type: string;
}

export interface ProductSetElementSafetyInformationWrapper {
  /**
   * Contains information about product's safety. Reference
   * <a href="https://developer.allegro.pl/documentation#operation/createOfferAttachmentUsingPOST">Docs</a>
   */
  safetyInformation?: ProductSetElementSafetyInformation;
}

export interface PublicationRequest {
  /**
   * This field must be set to one of the following:<br/> - for auctions: 1 day, 3
   * days, 5 days, 7 days, 10 days<br/> - for buy-now offers: 3 days, 5 days, 7 days,
   * 10 days, 20 days, 30 days<br/> - for advertisements: 10 days, 20 days, 30
   * days.<br/> The value is in ISO 8601 format (example: PT24H, PT72H).
   */
  duration?: string;

  /**
   * Whether to republish an offer after ending. Automatically republish offers or
   * auctions: - `BUY_NOW` offer type are republished with initial stock, regardless
   * of how many items you have sold. - `AUCTION` offer type are republished only if
   * they were not concluded with purchase. - `ADVERTISEMENT` offer type are
   * republished until it will be finished manually.
   */
  republish?: boolean;

  /**
   * Publication starting date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   * Cannot be modified after activation or ending of the offer.
   */
  startingAt?: string;

  /**
   * The publication status of the current offer. The possible values:
   *
   * - _INACTIVE_ - a draft offer
   * - _ACTIVATING_ - the offer is planned for listing or is during the process of
   *   activation
   * - _ACTIVE_ - the offer is active
   * - _ENDED_ - the offer was active and is now ended (for whatever reason)
   */
  status?: OfferStatus;
}

/**
 * The return policy information.
 */
export interface ReturnPolicy {
  /**
   * The ID of the return policy definition.
   */
  id?: string;
}

/**
 * Single offer data.
 */
export interface SaleProductOffer {
  /**
   * The description section cannot have more than 40000 bytes in length.
   */
  description?: ProductsAPI.StandardizedDescription;

  /**
   * The information on the offer in an external system.
   */
  external?: ExternalID;

  images?: Array<string>;

  /**
   * for offer with a delivery method it is a parcel dispatch location. For offers
   * with personal pick-up it is a pick-up location, additionally we recommend to use
   * points of service
   * (<a href="../../documentation/#tag/Points-of-service" target="_blank">https://developer.allegro.pl/documentation/#tag/Points-of-service</a>)
   */
  location?: Location;

  /**
   * Defines message to the seller settings options.
   */
  messageToSellerSettings?: SaleProductOffer.MessageToSellerSettings;

  /**
   * Name (title) of an offer. Length cannot be more than 75 characters. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#tytul-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-title" target="_blank">EN</a>
   * .
   */
  name?: string;

  payments?: SaleProductOffer.Payments;

  /**
   * Information on the offer's selling mode.
   */
  sellingMode?: SaleProductOffer.SellingMode;

  sizeTable?: SizeTable;

  /**
   * Tax settings for offer. Available settings can be found under
   * <a href="#operation/getTaxSettingsForCategory" target="_blank">"get all tax
   * settings for category" resource</a>.
   */
  taxSettings?: SaleProductOffer.TaxSettings;
}

export namespace SaleProductOffer {
  /**
   * Defines message to the seller settings options.
   */
  export interface MessageToSellerSettings {
    /**
     * Specify hint for REQUIRED message displayed for buyer
     */
    hint?: string;

    /**
     * Specify message to seller type.
     *
     * - `OPTIONAL`: buyer is able to enter a message for the seller
     * - `HIDDEN`: there is no message box for the seller
     * - `REQUIRED`: buyer is forced to enter a message for the seller (limited to
     *   categories with `sellerCanRequirePurchaseComments` option)
     */
    mode?: 'OPTIONAL' | 'HIDDEN' | 'REQUIRED';
  }

  export interface Payments {
    /**
     * Invoice type
     */
    invoice?: 'VAT' | 'VAT_MARGIN' | 'WITHOUT_VAT' | 'NO_INVOICE';
  }

  /**
   * Information on the offer's selling mode.
   */
  export interface SellingMode {
    /**
     * The selling format of the offer.
     */
    format?: ProductOffersAPI.SellingModeFormat;

    /**
     * The price data.
     */
    minimalPrice?: ProductOffersAPI.MinimalPrice;

    /**
     * The price data.
     */
    price?: ProductOffersAPI.BuyNowPrice;

    /**
     * The price data.
     */
    startingPrice?: ProductOffersAPI.StartingPrice;
  }

  /**
   * Tax settings for offer. Available settings can be found under
   * <a href="#operation/getTaxSettingsForCategory" target="_blank">"get all tax
   * settings for category" resource</a>.
   */
  export interface TaxSettings {
    /**
     * Tax rates for offer.
     */
    rates: Array<TaxSettings.Rate>;

    /**
     * The exemption of taxation for offer.
     */
    exemption?: string;

    /**
     * The subject of taxation for offer.
     */
    subject?: string;
  }

  export namespace TaxSettings {
    /**
     * Offer tax rate for country.
     */
    export interface Rate {
      /**
       * Tax rate country code.
       */
      countryCode?: string;

      /**
       * Tax rate value.
       */
      rate?: string;
    }
  }
}

export interface SaleProductOfferPublicationRequest {
  /**
   * This field must be set to one of the following:<br/> - for auctions: 1 day, 3
   * days, 5 days, 7 days, 10 days<br/> - for buy-now offers: 3 days, 5 days, 7 days,
   * 10 days, 20 days, 30 days<br/> - for advertisements: 10 days, 20 days, 30
   * days.<br/> The value is in ISO 8601 format (example: PT24H, PT72H).
   */
  duration?: string;

  /**
   * Whether to republish an offer after ending. Automatically republish offers or
   * auctions: - `BUY_NOW` offer type are republished with initial stock, regardless
   * of how many items you have sold. - `AUCTION` offer type are republished only if
   * they were not concluded with purchase. - `ADVERTISEMENT` offer type are
   * republished until it will be finished manually.
   */
  republish?: boolean;

  /**
   * Publication starting date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   * Cannot be modified after activation or ending of the offer.
   */
  startingAt?: string;

  /**
   * The publication status of the current offer. The possible values:
   *
   * - _INACTIVE_ - a draft offer
   * - _ACTIVATING_ - the offer is planned for listing or is during the process of
   *   activation
   * - _ACTIVE_ - the offer is active
   * - _ENDED_ - the offer was active and is now ended (for whatever reason)
   */
  status?: OfferStatus;
}

/**
 * Single offer data.
 */
export interface SaleProductOfferRequestBase extends Omit<SaleProductOffer, 'sizeTable'> {
  /**
   * The definitions of the different after sales services assigned to the offer.
   */
  afterSalesServices?: SaleProductOfferRequestBase.AfterSalesServices;

  category?: SaleAPI.Category;

  /**
   * Identifier of contact data for sales format ADVERTISEMENT (classified ad). You
   * can enter the contact identifier or name.
   */
  contact?: SaleProductOfferRequestBase.Contact;

  delivery?: SaleProductOfferRequestBase.Delivery;

  discounts?: SaleProductOfferRequestBase.Discounts;

  parameters?: Array<ParameterProductOfferRequest>;

  publication?: SaleProductOfferRequestBase.Publication;

  /**
   * The size table information. You can enter the size tabe identifier or name.
   */
  sizeTable?: SaleProductOfferRequestBase.SizeTable;
}

export namespace SaleProductOfferRequestBase {
  /**
   * The definitions of the different after sales services assigned to the offer.
   */
  export interface AfterSalesServices {
    /**
     * The implied warranty information.
     */
    impliedWarranty?: AfterSalesServices.ImpliedWarranty;

    /**
     * The return policy information.
     */
    returnPolicy?: AfterSalesServices.ReturnPolicy;

    /**
     * The warranty information.
     */
    warranty?: AfterSalesServices.Warranty;
  }

  export namespace AfterSalesServices {
    /**
     * The implied warranty information.
     */
    export interface ImpliedWarranty extends ProductOffersAPI.ImpliedWarranty {
      /**
       * The name of the implied warranty definition.
       */
      name?: string;
    }

    /**
     * The return policy information.
     */
    export interface ReturnPolicy extends ProductOffersAPI.ReturnPolicy {
      /**
       * The name of the return policy definition.
       */
      name?: string;
    }

    /**
     * The warranty information.
     */
    export interface Warranty extends ProductOffersAPI.Warranty {
      /**
       * The name of the warranty definition.
       */
      name?: string;
    }
  }

  /**
   * Identifier of contact data for sales format ADVERTISEMENT (classified ad). You
   * can enter the contact identifier or name.
   */
  export interface Contact extends ProductOffersAPI.Contact {
    /**
     * The name of the contact definition.
     */
    name?: string;
  }

  export interface Delivery extends Omit<ProductOffersAPI.DeliveryProductOfferRequest, 'shippingRates'> {
    /**
     * You can enter the shipping rates identifier or name.
     */
    shippingRates?: unknown;
  }

  export interface Discounts {
    wholesalePriceList?: Discounts.WholesalePriceList;
  }

  export namespace Discounts {
    export interface WholesalePriceList {
      /**
       * Wholesale price list id
       */
      id?: string;

      /**
       * The name of the wholesale price list definition.
       */
      name?: string;
    }
  }

  export interface Publication {
    /**
     * This field must be set to one of the following:<br/> - for auctions: 1 day, 3
     * days, 5 days, 7 days, 10 days<br/> - for buy-now offers: 3 days, 5 days, 7 days,
     * 10 days, 20 days, 30 days<br/> - for advertisements: 10 days, 20 days, 30
     * days.<br/> The value is in ISO 8601 format (example: PT24H, PT72H).
     */
    duration?: string;

    /**
     * Publication starting date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
     * Cannot be modified after activation or ending of the offer.
     */
    startingAt?: string;

    /**
     * The publication status of the current offer. The possible values:
     *
     * - _INACTIVE_ - a draft offer
     * - _ACTIVATING_ - the offer is planned for listing or is during the process of
     *   activation
     * - _ACTIVE_ - the offer is active
     * - _ENDED_ - the offer was active and is now ended (for whatever reason)
     */
    status?: ProductOffersAPI.OfferStatus;
  }

  /**
   * The size table information. You can enter the size tabe identifier or name.
   */
  export interface SizeTable extends ProductOffersAPI.SizeTable {
    /**
     * The name of the size table definition.
     */
    name?: string;
  }
}

/**
 * Single offer data.
 */
export interface SaleProductOfferResponseV1 extends SaleProductOffer {
  id?: string;

  /**
   * Selected information about the offer in each additional service. This field does
   * not contain information about the base marketplace of the offer. You will find
   * all available marketplaces here. Even if the seller does not want the offer to
   * be visible in the additional service, we will return it in response.
   */
  additionalMarketplaces?: Record<string, SaleProductOfferResponseV1.AdditionalMarketplaces>;

  additionalServices?: SaleProductOfferResponseV1.AdditionalServices;

  /**
   * The definitions of the different after sales services assigned to the offer.
   */
  afterSalesServices?: AfterSalesServices;

  /**
   * An array of offer attachments.
   */
  attachments?: Array<ProductOfferAttachmentItem>;

  /**
   * Defines offer properties for buyers with company account (Allegro Biznes).
   */
  b2b?: B2b;

  /**
   * The category to which the offer is listed for sale.
   */
  category?: OfferCategory;

  compatibilityList?: SaleProductOfferResponseV1.CompatibilityList;

  /**
   * Identifier of contact data for sales format ADVERTISEMENT (classified ad);
   * retrieve it via GET /sale/offer-contacts.
   */
  contact?: Contact;

  /**
   * Creation date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ. Cannot be
   * modified.
   */
  createdAt?: string;

  delivery?: SaleProductOfferResponseV1.Delivery;

  discounts?: SaleProductOfferResponseV1.Discounts;

  fundraisingCampaign?: SaleProductOfferResponseV1.FundraisingCampaign;

  /**
   * Declared base language of the offer.
   */
  language?: string;

  /**
   * List of offer parameters.
   */
  parameters?: Array<ParameterProductOfferResponse>;

  productSet?: Array<SaleProductOfferResponseV1.ProductSet>;

  publication?: SaleProductOfferResponseV1.Publication;

  stock?: SaleProductOfferResponseV1.Stock;

  /**
   * Last update date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ. Cannot be
   * modified.
   */
  updatedAt?: string;

  validation?: SaleProductOfferResponseV1.Validation;

  /**
   * The list of all the error objects explaining the error.
   */
  warnings?: Array<Error>;
}

export namespace SaleProductOfferResponseV1 {
  export interface AdditionalMarketplaces {
    /**
     * <small>[read-only]</small> Contains information about the visibility status of
     * the listing for the given service.
     */
    publication?: AdditionalMarketplaces.Publication;

    /**
     * Information on the offer's selling mode.
     */
    sellingMode?: AdditionalMarketplaces.SellingMode;
  }

  export namespace AdditionalMarketplaces {
    /**
     * <small>[read-only]</small> Contains information about the visibility status of
     * the listing for the given service.
     */
    export interface Publication {
      /**
       * Reasons for marketplace publication refusal. Empty list for not refused
       * marketplaces.
       */
      refusalReasons?: Array<Publication.RefusalReason>;

      /**
       * Possible values: - `APPROVED` - the offer is visible in the given additional
       * marketplace if it is active. - `REFUSED` - the offer or the seller does not meet
       * the conditions required to display the offer in the given additional
       * marketplace. - `IN_PROGRESS` - the process of qualifying the offer visibility in
       * a given additional service is in progress. - `NOT_REQUESTED` - the seller has
       * not indicated the intention of visibility in the given additional service. -
       * `PENDING` - the seller has indicated the intention of visibility on a given
       * additional marketplace, but the qualification process has not started, for
       * example, due to offer status (only active offers are subject to the
       * qualification process).
       */
      state?: 'APPROVED' | 'REFUSED' | 'IN_PROGRESS' | 'NOT_REQUESTED' | 'PENDING';
    }

    export namespace Publication {
      export interface RefusalReason {
        /**
         * Technical code of the refusal reason
         */
        code?: string;

        /**
         * Additional technical parameters of the refusal reason
         */
        parameters?: Record<string, Array<string>>;

        /**
         * Short description of the refusal reason in natural language
         */
        userMessage?: string;
      }
    }

    /**
     * Information on the offer's selling mode.
     */
    export interface SellingMode {
      /**
       * The selling format of the offer.
       */
      format?: ProductOffersAPI.SellingModeFormat;

      /**
       * The price data.
       */
      minimalPrice?: ProductOffersAPI.MinimalPrice;

      /**
       * The price data.
       */
      price?: ProductOffersAPI.BuyNowPrice;

      /**
       * The price data.
       */
      startingPrice?: ProductOffersAPI.StartingPrice;
    }
  }

  export interface AdditionalServices {
    /**
     * Id of additional services.
     */
    id?: string;
  }

  export interface CompatibilityList {
    /**
     * Type of the compatibility list, two values are acceptable: `MANUAL`,
     * `PRODUCT_BASED`. <ul> <li>`MANUAL` - for offers not associated with product -
     * compatibility list is created with items provided by user directly in the body
     * of the request.</li> <li>`PRODUCT_BASED` - for offers associated with product -
     * if compatibility list is provided in the product details
     * (GET/sale/products/{productId}), it needs to be included in the offer in
     * unchanged form. </li> </ul>
     */
    type: string;
  }

  export interface Delivery {
    /**
     * @deprecated Additional information about delivery. Parameter is deprecated and
     * will be removed in the future. Additional information is only visible on
     * marketplace `allegro-pl`.
     */
    additionalInfo?: string;

    /**
     * Handling time, ISO 8601 duration format. This field must be set to one of the
     * following: PT0S for immediately, PT24H, P2D, P3D, P4D, P5D, P7D, P10D, P14D,
     * P21D, P30D, P60D.
     */
    handlingTime?: string;

    /**
     * Shipment date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
     */
    shipmentDate?: string;

    shippingRates?: SizeTablesAPI.JustID;
  }

  export interface Discounts {
    wholesalePriceList?: SizeTablesAPI.JustID;
  }

  export interface FundraisingCampaign {
    /**
     * Id of fundraising campaign.
     */
    id?: string;
  }

  export interface ProductSet
    extends ProductOffersAPI.ProductSetElementQuantity,
      ProductOffersAPI.ProductSetElementSafetyInformationWrapper,
      ProductOffersAPI.MarketedBeforeGpsrObligation {
    product?: ProductSet.Product;

    /**
     * Reference to the responsible person configured using
     * <a href="https://developer.allegro.pl/documentation#tag/Responsible-persons">Responsible
     * Persons API</a>. Note that this is a different field than
     * <code>responsibleProducer</code>.
     */
    responsiblePerson?: ProductSet.ResponsiblePerson;

    /**
     * Reference to the responsible producer configured using Responsible Producer API.
     * Note that this is a different field than <code>responsiblePerson</code>.
     */
    responsibleProducer?: ProductSet.ResponsibleProducer;
  }

  export namespace ProductSet {
    export interface Product {
      /**
       * Product id.
       */
      id?: string;

      /**
       * Product parameters in the offer.
       */
      parameters?: Array<ProductOffersAPI.ParameterProductOfferResponse>;

      publication?: Product.Publication;
    }

    export namespace Product {
      export interface Publication {
        /**
         * The publication status of the product assigned to the offer:
         *
         * - `PROPOSED` - a new product proposal was created or an existing product in the
         *   review process was selected and assigned to the offer
         * - `LISTED` - a reviewed product from our database was identified and assigned to
         *   the offer
         * - `NOT_LISTED` - no new product proposal was created nor an existing product
         *   from database was assigned to the offer
         * - `REMOVED` - the product review was negative or the product was merged with
         *   another product. This means that the product will soon be removed from the
         *   offer and you can assign a correct product.
         */
        status?: 'PROPOSED' | 'LISTED' | 'NOT_LISTED' | 'REMOVED';
      }
    }

    /**
     * Reference to the responsible person configured using
     * <a href="https://developer.allegro.pl/documentation#tag/Responsible-persons">Responsible
     * Persons API</a>. Note that this is a different field than
     * <code>responsibleProducer</code>.
     */
    export interface ResponsiblePerson {
      id?: string;
    }

    /**
     * Reference to the responsible producer configured using Responsible Producer API.
     * Note that this is a different field than <code>responsiblePerson</code>.
     */
    export interface ResponsibleProducer {
      id?: string;
    }
  }

  export interface Publication extends ProductOffersAPI.PublicationRequest {
    /**
     * Indicates the reason for ending the offer: - `USER` - offer ended by the
     * seller. - `ADMIN` - offer ended by an admin. - `EXPIRATION` - offer duration had
     * expired (valid for offers with specified duration). - `EMPTY_STOCK` - offer
     * ended because all available items had been sold out. - `PRODUCT_DETACHMENT` -
     * offer ended because its link to the product was removed. Status will only occur
     * if the base marketplace of offer requires full productization.
     *
     * - `ERROR` - offer ended due to internal problem with offer publication. The
     *   publication command responded with success status, but further processing
     *   failed.
     */
    endedBy?: 'USER' | 'ADMIN' | 'EXPIRATION' | 'EMPTY_STOCK' | 'PRODUCT_DETACHMENT' | 'ERROR';

    /**
     * Publication ending date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ. Cannot
     * be modified
     */
    endingAt?: string;

    /**
     * Information about publication in multiple marketplaces.<br/> See
     * [Changes in listing offers - we will add the possibility to display offers in foreign domains of Allegro's marketplaces](https://developer.allegro.pl/news/changes-in-listing-offers-we-will-add-the-possibility-to-display-offers-in-foreign-domains-of-allegro-s-marketplaces-9gKv0RVzRTK)
     * for more details regarding this field
     */
    marketplaces?: Publication.Marketplaces;
  }

  export namespace Publication {
    /**
     * Information about publication in multiple marketplaces.<br/> See
     * [Changes in listing offers - we will add the possibility to display offers in foreign domains of Allegro's marketplaces](https://developer.allegro.pl/news/changes-in-listing-offers-we-will-add-the-possibility-to-display-offers-in-foreign-domains-of-allegro-s-marketplaces-9gKv0RVzRTK)
     * for more details regarding this field
     */
    export interface Marketplaces {
      /**
       * Specifies whether an offer is visible in the additional marketplace.
       */
      additional?: Array<SizeTablesAPI.JustID>;

      /**
       * <small>[read-only]</small> Specifies the offer’s base service. We assign the
       * value in the field automatically when the offer is created and it is read-only,
       * it will never change.
       */
      base?: SizeTablesAPI.JustID;
    }
  }

  export interface Stock {
    /**
     * Quantity of this offer available for sale - how many times this offer can be
     * sold. Offer can be activated only with stock being greater then 0. Setting this
     * quantity to 0 for 'ACTIVE' or 'ACTIVATING' offer will trigger changing its
     * status to 'ENDED'.
     */
    available?: number;

    /**
     * Stock unit
     */
    unit?: 'UNIT' | 'PAIR' | 'SET';
  }

  export interface Validation {
    errors: Array<Validation.Error>;

    validatedAt?: string;

    warnings?: Array<Validation.Warning>;
  }

  export namespace Validation {
    export interface Error {
      code?: string;

      details?: string;

      message?: string;

      /**
       * Additional technical properties of this error. Set of possible keys depends on
       * the specific error.
       */
      metadata?: Record<string, string>;

      path?: string | null;

      userMessage?: string;
    }

    export interface Warning {
      code?: string;

      details?: string;

      message?: string;

      /**
       * Additional technical properties of this error. Set of possible keys depends on
       * the specific error.
       */
      metadata?: Record<string, string>;

      path?: string | null;

      userMessage?: string;
    }
  }
}

export interface SaleProductOffersRequestStock {
  /**
   * Quantity of this offer available for sale - how many times this offer can be
   * sold. Offer can be activated only with stock being greater then 0. Setting this
   * quantity to 0 for 'ACTIVE' or 'ACTIVATING' offer will trigger changing its
   * status to 'ENDED'.
   */
  available?: number;

  /**
   * Stock unit
   */
  unit?: 'UNIT' | 'PAIR' | 'SET';
}

/**
 * The selling format of the offer.
 */
export type SellingModeFormat = 'BUY_NOW' | 'AUCTION' | 'ADVERTISEMENT';

export interface SizeTable {
  /**
   * Id of size table
   */
  id?: string;
}

/**
 * The price data.
 */
export interface StartingPrice {
  /**
   * The amount provided in a string format to avoid rounding errors.
   */
  amount: string;

  /**
   * The currency provided as a 3-letter code in accordance with ISO 4217 standard
   * (https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency: string;
}

/**
 * The warranty information.
 */
export interface Warranty {
  /**
   * The ID of the warranty definition.
   */
  id?: string;
}

/**
 * Single opertion data.
 */
export interface ProductOfferCheckOperationStatusResponse {
  offer?: OfferID;

  operation?: ProductOfferCheckOperationStatusResponse.Operation;
}

export namespace ProductOfferCheckOperationStatusResponse {
  export interface Operation {
    /**
     * The unique operation identifier (UUID).
     */
    id?: string;

    /**
     * The starting date and time of operation.
     */
    startedAt?: string;

    /**
     * Status of the operation.
     */
    status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
  }
}

export interface ProductOfferRetrievePartsResponse {
  /**
   * Offer's ID
   */
  id?: string;

  /**
   * Information about this offer in additional marketplaces (available for
   * <var>include=price</var>).
   */
  additionalMarketplaces?: Record<string, ProductOfferRetrievePartsResponse.AdditionalMarketplaces>;

  /**
   * Offer's price information for base marketplace (available for
   * <var>include=price</var>).
   */
  sellingMode?: ProductOfferRetrievePartsResponse.SellingMode;

  /**
   * Number of times this offer can be purchased (available for
   * <var>include=stock</var>).
   */
  stock?: ProductOfferRetrievePartsResponse.Stock;
}

export namespace ProductOfferRetrievePartsResponse {
  export interface AdditionalMarketplaces {
    /**
     * Price information for given addtional marketplace.
     */
    sellingMode?: AdditionalMarketplaces.SellingMode;
  }

  export namespace AdditionalMarketplaces {
    /**
     * Price information for given addtional marketplace.
     */
    export interface SellingMode {
      /**
       * The price data.
       */
      price?: BidAPI.Price;
    }
  }

  /**
   * Offer's price information for base marketplace (available for
   * <var>include=price</var>).
   */
  export interface SellingMode {
    /**
     * The price data.
     */
    price?: BidAPI.Price;
  }

  /**
   * Number of times this offer can be purchased (available for
   * <var>include=stock</var>).
   */
  export interface Stock {
    available?: number;
  }
}

export interface ProductOfferCreateParams {
  /**
   * Body param: Single offer data.
   */
  body: ProductOfferCreateParams.Body;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export namespace ProductOfferCreateParams {
  /**
   * Single offer data.
   */
  export interface Body extends ProductOffersAPI.SaleProductOfferRequestBase {
    stock: ProductOffersAPI.SaleProductOffersRequestStock;

    /**
     * Selected information about the offer in each additional service. This field does
     * not contain information about the base marketplace of the offer.<br/> Possible
     * values of `marketplaceId` can be obtained from `GET /marketplaces` resource. See
     * [Allegro foreign marketplaces](https://developer.allegro.pl/tutorials/listing-and-managing-offers-on-foreign-marketplaces-7GndGjeAATn)
     * for more details regarding this field.
     */
    additionalMarketplaces?: Record<string, Body.AdditionalMarketplaces>;

    /**
     * Offer additional services.
     */
    additionalServices?: ProductOffersAPI.ProductOfferAdditionalServices;

    /**
     * An array of offer attachments.
     */
    attachments?: Array<ProductOffersAPI.ProductOfferAttachmentItem>;

    /**
     * Defines offer properties for buyers with company account (Allegro Biznes).
     */
    b2b?: ProductOffersAPI.B2b;

    /**
     * For the `/sale/product-offers` resources you can send only definition of the
     * MANUAL compatibility list. If compatibility list is provided for the product
     * assigned to the offer, it will be used automatically.
     */
    compatibilityList?: ProductOffersAPI.CompatibilityListManualType;

    delivery?: Body.Delivery;

    fundraisingCampaign?: ProductOffersAPI.ProductOfferFundraisingCampaignRequest;

    /**
     * Declared base language of the offer.
     */
    language?: string;

    productSet?: Array<Body.ProductSet>;

    publication?: ProductOffersAPI.SaleProductOfferPublicationRequest;
  }

  export namespace Body {
    export interface AdditionalMarketplaces {
      sellingMode?: AdditionalMarketplaces.SellingMode;
    }

    export namespace AdditionalMarketplaces {
      export interface SellingMode {
        /**
         * The price data.
         */
        price?: BidAPI.Price;
      }
    }

    export interface Delivery extends Omit<ProductOffersAPI.DeliveryProductOfferRequest, 'shippingRates'> {
      /**
       * Shipment date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
       */
      shipmentDate?: string;

      /**
       * You should enter the shipping rates identifier or name.
       */
      shippingRates?: unknown;
    }

    /**
     * List of products sold in the offer.
     */
    export interface ProductSet
      extends ProductOffersAPI.ProductSetElement,
        ProductOffersAPI.ProductSetElementQuantity,
        ProductOffersAPI.ProductSetElementResponsiblePersonRequest,
        ProductOffersAPI.ProductSetElementResponsibleProducerRequestWrapper,
        ProductOffersAPI.ProductSetElementSafetyInformationWrapper,
        ProductOffersAPI.MarketedBeforeGpsrObligation {}
  }
}

export interface ProductOfferUpdateParams {
  /**
   * Body param: Single offer data.
   */
  body: ProductOfferUpdateParams.Body;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export namespace ProductOfferUpdateParams {
  /**
   * Single offer data.
   */
  export interface Body extends ProductOffersAPI.SaleProductOfferRequestBase {
    /**
     * Selected information about the offer in each additional service. This field does
     * not contain information about the base marketplace of the offer.<br/> Possible
     * values of `marketplaceId` can be obtained from `GET /marketplaces` resource. See
     * [Allegro foreign marketplaces](https://developer.allegro.pl/tutorials/listing-and-managing-offers-on-foreign-marketplaces-7GndGjeAATn)
     * for more details regarding this field.
     */
    additionalMarketplaces?: Record<string, Body.AdditionalMarketplaces>;

    /**
     * Offer additional services.
     */
    additionalServices?: ProductOffersAPI.ProductOfferAdditionalServices;

    /**
     * An array of offer attachments.
     */
    attachments?: Array<ProductOffersAPI.ProductOfferAttachmentItem>;

    /**
     * Defines offer properties for buyers with company account (Allegro Biznes).
     */
    b2b?: ProductOffersAPI.B2b;

    /**
     * For the `/sale/product-offers` resources you can send only definition of the
     * MANUAL compatibility list. If compatibility list is provided for the product
     * assigned to the offer, it will be used automatically.
     */
    compatibilityList?: ProductOffersAPI.CompatibilityListManualType;

    delivery?: Body.Delivery;

    fundraisingCampaign?: ProductOffersAPI.ProductOfferFundraisingCampaignRequest;

    /**
     * Declared base language of the offer.
     */
    language?: string;

    productSet?: Array<Body.ProductSet>;

    publication?: ProductOffersAPI.SaleProductOfferPublicationRequest;

    stock?: ProductOffersAPI.SaleProductOffersRequestStock;
  }

  export namespace Body {
    export interface AdditionalMarketplaces {
      sellingMode?: AdditionalMarketplaces.SellingMode;
    }

    export namespace AdditionalMarketplaces {
      export interface SellingMode {
        /**
         * The price data.
         */
        price?: BidAPI.Price;
      }
    }

    export interface Delivery extends Omit<ProductOffersAPI.DeliveryProductOfferRequest, 'shippingRates'> {
      /**
       * Shipment date: Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
       */
      shipmentDate?: string;

      /**
       * You should enter the shipping rates identifier or name.
       */
      shippingRates?: unknown;
    }

    /**
     * List of products sold in the offer.
     */
    export interface ProductSet
      extends ProductOffersAPI.ProductSetElement,
        ProductOffersAPI.ProductSetElementQuantity,
        ProductOffersAPI.ProductSetElementResponsiblePersonRequest,
        ProductOffersAPI.ProductSetElementResponsibleProducerRequestWrapper,
        ProductOffersAPI.ProductSetElementSafetyInformationWrapper,
        ProductOffersAPI.MarketedBeforeGpsrObligation {}
  }
}

export interface ProductOfferCheckOperationStatusParams {
  /**
   * Path param: Offer identifier.
   */
  offerId: string;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export interface ProductOfferRetrievePartsParams {
  /**
   * Query param: Selection of parts intended to retrieve. Multiple parts can be
   * specified at the same time.
   */
  include: Array<'stock' | 'price'>;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export declare namespace ProductOffers {
  export {
    type AfterSalesServices as AfterSalesServices,
    type B2b as B2b,
    type BuyNowPrice as BuyNowPrice,
    type CompatibilityListManualType as CompatibilityListManualType,
    type Contact as Contact,
    type DeliveryProductOfferRequest as DeliveryProductOfferRequest,
    type Error as Error,
    type ExternalID as ExternalID,
    type ImpliedWarranty as ImpliedWarranty,
    type Location as Location,
    type MarketedBeforeGpsrObligation as MarketedBeforeGpsrObligation,
    type MinimalPrice as MinimalPrice,
    type OfferCategory as OfferCategory,
    type OfferID as OfferID,
    type OfferStatus as OfferStatus,
    type ParameterProductOfferRequest as ParameterProductOfferRequest,
    type ParameterProductOfferResponse as ParameterProductOfferResponse,
    type ProductOfferAdditionalServices as ProductOfferAdditionalServices,
    type ProductOfferAttachmentItem as ProductOfferAttachmentItem,
    type ProductOfferFundraisingCampaignRequest as ProductOfferFundraisingCampaignRequest,
    type ProductSetElement as ProductSetElement,
    type ProductSetElementQuantity as ProductSetElementQuantity,
    type ProductSetElementResponsiblePersonRequest as ProductSetElementResponsiblePersonRequest,
    type ProductSetElementResponsibleProducerRequestWrapper as ProductSetElementResponsibleProducerRequestWrapper,
    type ProductSetElementSafetyInformation as ProductSetElementSafetyInformation,
    type ProductSetElementSafetyInformationWrapper as ProductSetElementSafetyInformationWrapper,
    type PublicationRequest as PublicationRequest,
    type ReturnPolicy as ReturnPolicy,
    type SaleProductOffer as SaleProductOffer,
    type SaleProductOfferPublicationRequest as SaleProductOfferPublicationRequest,
    type SaleProductOfferRequestBase as SaleProductOfferRequestBase,
    type SaleProductOfferResponseV1 as SaleProductOfferResponseV1,
    type SaleProductOffersRequestStock as SaleProductOffersRequestStock,
    type SellingModeFormat as SellingModeFormat,
    type SizeTable as SizeTable,
    type StartingPrice as StartingPrice,
    type Warranty as Warranty,
    type ProductOfferCheckOperationStatusResponse as ProductOfferCheckOperationStatusResponse,
    type ProductOfferRetrievePartsResponse as ProductOfferRetrievePartsResponse,
    type ProductOfferCreateParams as ProductOfferCreateParams,
    type ProductOfferUpdateParams as ProductOfferUpdateParams,
    type ProductOfferCheckOperationStatusParams as ProductOfferCheckOperationStatusParams,
    type ProductOfferRetrievePartsParams as ProductOfferRetrievePartsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OffersAPI from './offers';
import * as ProductOffersAPI from './sale/product-offers';
import * as BidAPI from './bidding/offers/bid';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Offers extends APIResource {
  /**
   * <a href="../../listing/" target="_blank">Access for verified applications
   * only</a>. Use this resource to get a list of offers based on the provided query
   * parameters. At least one of: phrase, seller.id or category.id is required.
   * Additional available parameters vary depending on category.id. The parameters
   * are defined in the filters entity. Changing the marketplace, country of
   * delivery, currency or language may impact the availability of offers and
   * filters. Note that requests for closed offers may be limited.
   *
   * Read more:
   * <a href="../../tutorials/jak-wyszukiwac-przegladac-oferty-ZM9YAKAwgfk" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-search-and-browse-offers-XxWm2ykMYHl" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offers = await client.offers.list();
   * ```
   */
  list(
    params: OfferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferListResponse> {
    const { 'Accept-Language': acceptLanguage, ...query } = params ?? {};
    return this._client.get('/offers/listing', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage != null ? { 'Accept-Language': acceptLanguage } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to change the Buy Now price in a single offer. Read more:
   * <a href="../../news/mozliwosc-zmiany-ceny-kup-teraz-2YzrKRrr3Sl" target="_blank">PL</a>
   * /
   * <a href="../../news/possibility-to-change-the-buy-it-now-price-q018mq8D2hW" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.offers.changePrice(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     offerId: 'offerId',
   *     input: {
   *       buyNowPrice: { amount: '123.45', currency: 'PLN' },
   *     },
   *   },
   * );
   * ```
   */
  changePrice(
    commandID: string,
    params: OfferChangePriceParams,
    options?: RequestOptions,
  ): APIPromise<OfferChangePriceResponse> {
    const { offerId, ...body } = params;
    return this._client.put(path`/offers/${offerId}/change-price-commands/${commandID}`, {
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

/**
 * The input of the command, i.e. the new Buy Now price for the offer.
 */
export interface ChangePriceInput {
  /**
   * The price data.
   */
  buyNowPrice: BidAPI.Price;
}

export interface ListingOffer {
  /**
   * The offer ID.
   */
  id?: string;

  /**
   * The category to which the offer is listed for sale.
   */
  category?: ProductOffersAPI.OfferCategory;

  /**
   * Information about shipping options for the offer.
   */
  delivery?: ListingOffer.Delivery;

  /**
   * The gallery of images. Only the URL of the original sized image is provided. The
   * first image represents the thumbnail image used on listing.
   */
  images?: Array<ListingOffer.Image>;

  /**
   * The title of the offer.
   */
  name?: string;

  /**
   * Information about promotion options for the item.
   */
  promotion?: ListingOffer.Promotion;

  /**
   * This section is available only for offers with a defined end of publication.
   */
  publication?: ListingOffer.Publication;

  /**
   * Information about the seller.
   */
  seller?: ListingOffer.Seller;

  /**
   * This section describes the selling format and prices.
   */
  sellingMode?: ListingOffer.SellingMode;

  /**
   * Information about the stock.
   */
  stock?: ListingOffer.Stock;

  /**
   * This section is available only for the charity, allegrolokalnie.pl, morizon.pl
   * and ebilet.pl offers.
   */
  vendor?: ListingOffer.Vendor;
}

export namespace ListingOffer {
  /**
   * Information about shipping options for the offer.
   */
  export interface Delivery {
    /**
     * Indicates whether the offer has free shipping option.
     */
    availableForFree?: boolean;

    /**
     * The lowest shipping cost available. Lack of this entity means that the offer has
     * no shipping options (i.e. it is an advertisement or an offer with electronic
     * delivery only).
     */
    lowestPrice?: Delivery.LowestPrice;
  }

  export namespace Delivery {
    /**
     * The lowest shipping cost available. Lack of this entity means that the offer has
     * no shipping options (i.e. it is an advertisement or an offer with electronic
     * delivery only).
     */
    export interface LowestPrice {
      /**
       * The amount provided in a string format to avoid rounding errors.
       */
      amount?: string;

      /**
       * The currency provided as a 3-letter code in accordance with ISO 4217 standard
       * (https://en.wikipedia.org/wiki/ISO_4217).
       */
      currency?: string;
    }
  }

  export interface Image {
    /**
     * The URL of the original sized image.
     */
    url?: string;
  }

  /**
   * Information about promotion options for the item.
   */
  export interface Promotion {
    /**
     * Indicates whether the offer has bold title option.
     */
    bold?: boolean;

    /**
     * Indicates whether the offer is promoted.
     */
    emphasized?: boolean;

    /**
     * Indicates whether the offer has highlight option.
     */
    highlight?: boolean;
  }

  /**
   * This section is available only for offers with a defined end of publication.
   */
  export interface Publication {
    /**
     * Publication ending date and time in UTC.
     */
    endingAt?: string;
  }

  /**
   * Information about the seller.
   */
  export interface Seller {
    /**
     * The seller ID.
     */
    id?: string;

    /**
     * Indicates whether the seller represents a registered business.
     */
    company?: boolean;

    /**
     * The seller login.
     */
    login?: string;

    /**
     * Indicates whether the seller has the "Super Sprzedawca" status.
     */
    superSeller?: boolean;
  }

  /**
   * This section describes the selling format and prices.
   */
  export interface SellingMode {
    /**
     * Number of bidders for _AUCTION_ selling format.
     */
    bidCount?: number;

    /**
     * Fixed (buy now) price of the offer in case of _AUCTION_ selling format with buy
     * now option enabled.
     */
    fixedPrice?: SellingMode.FixedPrice;

    /**
     * The selling format of the offer.
     */
    format?: ProductOffersAPI.SellingModeFormat;

    /**
     * Lower bound of popularity range of the offer for _BUY_NOW_ selling format.
     */
    popularity?: number;

    /**
     * Popularity ranges of the offer for _BUY_NOW_ selling format. Possible values: 0,
     * [1-5], [6-10], [11-20], [21-50], [51-100] and [101+]
     */
    popularityRange?: string;

    /**
     * The price of the offer. It is the buy now price for _BUY_NOW_ selling format and
     * current auction price for _AUCTION_ format.
     */
    price?: SellingMode.Price;
  }

  export namespace SellingMode {
    /**
     * Fixed (buy now) price of the offer in case of _AUCTION_ selling format with buy
     * now option enabled.
     */
    export interface FixedPrice {
      /**
       * The amount provided in a string format to avoid rounding errors.
       */
      amount?: string;

      /**
       * The currency provided as a 3-letter code in accordance with ISO 4217 standard
       * (https://en.wikipedia.org/wiki/ISO_4217).
       */
      currency?: string;
    }

    /**
     * The price of the offer. It is the buy now price for _BUY_NOW_ selling format and
     * current auction price for _AUCTION_ format.
     */
    export interface Price {
      /**
       * The amount provided in a string format to avoid rounding errors.
       */
      amount?: string;

      /**
       * The currency provided as a 3-letter code in accordance with ISO 4217 standard
       * (https://en.wikipedia.org/wiki/ISO_4217).
       */
      currency?: string;
    }
  }

  /**
   * Information about the stock.
   */
  export interface Stock {
    /**
     * The available stock value.
     */
    available?: number;

    /**
     * The unit type of the stock.
     */
    unit?: 'UNIT' | 'PAIR' | 'SET';
  }

  /**
   * This section is available only for the charity, allegrolokalnie.pl, morizon.pl
   * and ebilet.pl offers.
   */
  export interface Vendor {
    /**
     * Identifier of the external service.
     */
    id?: 'CHARYTATYWNI_ALLEGRO' | 'ALLEGRO_LOKALNIE' | 'MORIZON' | 'EBILET' | 'GRATKA';

    /**
     * URL to the web page of the offer.
     */
    url?: string;
  }
}

export interface ListingResponseFilters {
  /**
   * Identifier of the filter. Should be used as query parameter key, optionally
   * followed by idSuffix from parameter value (only for NUMERIC filters).
   */
  id?: string;

  /**
   * Maximum valid value for filters of type NUMERIC.
   */
  maxValue?: number;

  /**
   * Minimum valid value for filters of type NUMERIC.
   */
  minValue?: number;

  /**
   * Name of the filter.
   */
  name?: string;

  /**
   * The type of the filter:
   *
   * - _MULTI_ - multiple choice filter,
   * - _SINGLE_ - single select (dropdown) filter,
   * - _NUMERIC_ - range of numeric values (search offers with value matching this
   *   range),
   * - _NUMERIC_SINGLE_ - single numeric value (search offers with given value
   *   matching the range defined in offer),
   * - _TEXT_ - filter allowing user to input any text.
   */
  type?: 'MULTI' | 'SINGLE' | 'NUMERIC' | 'NUMERIC_SINGLE' | 'TEXT';

  /**
   * Unit of the NUMERIC/NUMERIC_SINGLE filter.
   */
  unit?: string;

  /**
   * Available filter values.
   */
  values?: Array<ListingResponseFilters.Value>;
}

export namespace ListingResponseFilters {
  export interface Value {
    /**
     * Number of search results matching this filter value.
     */
    count?: number;

    /**
     * Suffix used as a second part of query parameter name to be used in the request
     * (the first part is the filter ID). Applicable for NUMERIC values only.
     */
    idSuffix?: string;

    /**
     * Name of the option; for NUMERIC parameters - word indicating start or end of
     * range (i.e. _from_, _to_).
     */
    name?: string;

    /**
     * Indicates whether this filter value was used in the current request.
     */
    selected?: boolean;

    /**
     * Filter value. Should be used as query parameter value in the request. This can
     * be:
     *
     * - for MULTI and SINGLE parameters - a value identifier (e.g. KUJAWSKO_POMORSKIE
     *   option in location.province filter),
     * - for other types - a value entered by user.
     */
    value?: string;
  }
}

export interface OfferListResponse {
  /**
   * Information about categories.
   */
  categories?: OfferListResponse.Categories;

  /**
   * An array of filters with counters available for given search. This can be used
   * to refine the search results.
   */
  filters?: Array<ListingResponseFilters>;

  /**
   * The lists of search results.
   */
  items?: OfferListResponse.Items;

  /**
   * Search metadata.
   */
  searchMeta?: OfferListResponse.SearchMeta;

  /**
   * Available sorting options.
   */
  sort?: Array<OfferListResponse.Sort>;
}

export namespace OfferListResponse {
  /**
   * Information about categories.
   */
  export interface Categories {
    /**
     * Categories path to the current listing category (breadcrumbs).
     */
    path?: Array<Categories.Path>;

    /**
     * Categories with counters, which can be used to refine search results.
     */
    subcategories?: Array<Categories.Subcategory>;
  }

  export namespace Categories {
    export interface Path {
      /**
       * The Category ID.
       */
      id?: string;

      /**
       * The category name.
       */
      name?: string;
    }

    export interface Subcategory {
      /**
       * The category ID.
       */
      id?: string;

      /**
       * Results count in this category.
       */
      count?: number;

      /**
       * The category name.
       */
      name?: string;
    }
  }

  /**
   * The lists of search results.
   */
  export interface Items {
    /**
     * List of promoted offers.
     */
    promoted?: Array<OffersAPI.ListingOffer>;

    /**
     * List of regular (non-promoted) offers.
     */
    regular?: Array<OffersAPI.ListingOffer>;
  }

  /**
   * Search metadata.
   */
  export interface SearchMeta {
    /**
     * The number of results available for navigation. If this number is less than
     * total count, the search criteria (categories, filters, etc.) should be narrowed
     * down to make all results available.
     */
    availableCount?: number;

    /**
     * Indicates whether the search fallback was used. If true, no items matching exact
     * given phrase were found and related items are presented.
     */
    fallback?: boolean;

    /**
     * The total number of search results with given parameters.
     */
    totalCount?: number;
  }

  /**
   * Available sort options.
   */
  export interface Sort {
    /**
     * The sorting option name in Polish.
     */
    name?: string;

    /**
     * The order label in Polish specifying ascending or descending mode.
     */
    order?: string;

    /**
     * Indicates whether this sorting option was used in the current request.
     */
    selected?: boolean;

    /**
     * The query parameter value which should be used for this sorting option.
     */
    value?: string;
  }
}

export interface OfferChangePriceResponse {
  /**
   * The input of the command, i.e. the new Buy Now price for the offer.
   */
  input: ChangePriceInput;

  /**
   * The unique command id provided in the input.
   */
  id?: string;

  /**
   * The output of the command.
   */
  output?: OfferChangePriceResponse.Output;
}

export namespace OfferChangePriceResponse {
  /**
   * The output of the command.
   */
  export interface Output {
    errors?: Array<ProductOffersAPI.Error>;

    /**
     * The processing status of the command.
     */
    status?:
      | 'QUEUEING'
      | 'RUNNING'
      | 'VALIDATED_AND_RUNNING'
      | 'RUNNING_BUT_WITH_ERRORS'
      | 'SUCCESSFUL'
      | 'PARTIAL_SUCCESS'
      | 'ERROR';
  }
}

export interface OfferListParams {
  /**
   * Query param:
   */
  category?: OfferListParams.Category;

  /**
   * Query param: Currency of the offer prices. _Default value_ : depends on
   * marketplace, for allegro-pl: `PLN`, for allegro-cz: `CZK`, for allegro-sk:
   * `EUR`. Check endpoint GET /marketplaces for acceptable currency values.
   */
  currency?: string;

  /**
   * Query param: You can filter and customize your search results to find exactly
   * what you need by applying filters ids and their dictionary values to query
   * according to the flowing pattern: id=value. When the filter definition looks
   * like:
   *
   * ```
   *   {
   *     "id": "parameter.11323",
   *     "type": "MULTI",
   *     "name": "Stan",
   *     "values": [{
   *         "value": "11323_1",
   *         "name": "nowe",
   *         "count": 21,
   *         "selected": false
   *       },
   *       {
   *         "value": "11323_2",
   *         "name": "używane",
   *         "count": 157,
   *         "selected": false
   *       },
   *       {
   *         "value": "11323_238066",
   *         "name": "po zwrocie",
   *         "count": 1,
   *         "selected": false
   *       }
   *     ]
   *   }
   * ```
   *
   * You can use 'Stan' filter to query results, i.e.:
   *
   * - `parameter.11323=11323_1` for "nowe"
   * - `parameter.11323=11323_2` for "używane"
   * - `parameter.11323=11323_238066` for "po zwrocie".
   */
  'Dynamic filters'?: Record<string, string>;

  /**
   * Query param: Defines the behaviour of the search engine when no results with
   * exact phrase match are found:
   *
   * - _true_ - related (not exact) results are returned,
   * - _false_ - empty results are returned.
   */
  fallback?: boolean;

  /**
   * Query param: Specify parts of the response that should be included in the
   * output. Allowed values are the names of top level entities and _all_ as an alias
   * to all entities. By default, all top level entities are included. Use `-` prefix
   * to exclude an entity. Example: `include=-all&include=filters&include=sort` -
   * returns only filters and sort entities.
   */
  include?: string;

  /**
   * Query param: The maximum number of offers in a response.
   */
  limit?: number;

  /**
   * Query param: Id of a marketplace where offers are visible. _Acceptable values_ :
   * `allegro-pl`, `allegro-cz`, `allegro-sk`, `allegro-hu`.
   */
  marketplaceId?: string;

  /**
   * Query param: Index of the first returned offer from all search results. Max
   * offset is `600 - <limit>`.
   */
  offset?: number;

  /**
   * Query param: The search phrase. The phrase is searched in different fields of
   * the offers depending on the value of the `searchMode` parameter.
   */
  phrase?: string;

  /**
   * Query param: Defines where the given phrase should be searched in. Allowed
   * values:
   *
   * - _REGULAR_ - searching for a phrase in the title,
   * - _CLOSED_ - searching for a phrase in the title of closed offers. Available
   *   only for `allegro-pl` marketplace.
   */
  searchMode?: 'REGULAR' | 'CLOSED';

  /**
   * Query param:
   */
  seller?: OfferListParams.Seller;

  /**
   * Query param:
   */
  shipping?: OfferListParams.Shipping;

  /**
   * Query param: Search results sorting order. `+` or no prefix in the value means
   * ascending order. `-` prefix means descending order.
   */
  sort?:
    | 'relevance'
    | '+price'
    | '-price'
    | '+withDeliveryPrice'
    | '-withDeliveryPrice'
    | '+endTime'
    | '-startTime';

  /**
   * Header param: Limits offers to the only translated to specified language. Also
   * expected language of messages. _Default value_ : depends on marketplace, for
   * allegro-pl: `pl-PL`, for allegro-cz: `cs-CZ`, for allegro-sk: `sk-SK`. Check
   * endpoint GET /marketplaces for acceptable language values.
   */
  'Accept-Language'?: string;
}

export namespace OfferListParams {
  export interface Category {
    /**
     * The identifier of the category, where you want to search for offers.
     */
    id?: string;
  }

  export interface Seller {
    /**
     * The identifier of a seller, to limit the results to offers from this seller. May
     * be provided more than once. Should not be provided when seller.login is given.
     */
    id?: string;

    /**
     * The login of a seller, to limit the results to offers from this seller. May be
     * provided more than once. Should not be provided when seller.id is given.
     */
    login?: string;
  }

  export interface Shipping {
    /**
     * Expected language of messages.
     */
    country?: string;
  }
}

export interface OfferChangePriceParams {
  /**
   * Path param: The offer identifier.
   */
  offerId: string;

  /**
   * Body param: The input of the command, i.e. the new Buy Now price for the offer.
   */
  input: ChangePriceInput;

  /**
   * Body param: The unique command id generated by you. This should be the same UUID
   * as used in the path.
   */
  id?: string;
}

export declare namespace Offers {
  export {
    type ChangePriceInput as ChangePriceInput,
    type ListingOffer as ListingOffer,
    type ListingResponseFilters as ListingResponseFilters,
    type OfferListResponse as OfferListResponse,
    type OfferChangePriceResponse as OfferChangePriceResponse,
    type OfferListParams as OfferListParams,
    type OfferChangePriceParams as OfferChangePriceParams,
  };
}

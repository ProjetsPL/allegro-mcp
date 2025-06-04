// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OffersAPI from './offers';
import * as OfferModificationCommandsAPI from '../offer-modification-commands';
import * as ProductOffersAPI from '../product-offers';
import * as SaleAPI from '../sale';
import * as SizeTablesAPI from '../size-tables';
import * as BidAPI from '../../bidding/offers/bid';
import * as PromoOptionsAPI from './promo-options';
import { PromoOptionGetAllParams, PromoOptionGetAllResponse, PromoOptions } from './promo-options';
import * as PromoOptionsCommandsAPI from './promo-options-commands';
import {
  PromoGeneralReport,
  PromoOptionsCommandBatchModifyParams,
  PromoOptionsCommandDetailedResultParams,
  PromoOptionsCommandDetailedResultResponse,
  PromoOptionsCommandModification,
  PromoOptionsCommandModificationPackage,
  PromoOptionsCommands,
} from './promo-options-commands';
import * as TagsAPI from './tags';
import {
  TagAssignParams,
  TagCreateParams,
  TagID,
  TagList1Params,
  TagListResponse,
  TagRequest,
  TagUpdateParams,
  Tags,
} from './tags';
import * as TranslationsAPI from './translations';
import {
  OfferTranslationType,
  TranslationDeleteParams,
  TranslationListParams,
  TranslationListResponse,
  TranslationUpdateParams,
  Translations,
} from './translations';
import * as RulesAPI from '../price-automation/rules';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Offers extends APIResource {
  translations: TranslationsAPI.Translations = new TranslationsAPI.Translations(this._client);
  promoOptions: PromoOptionsAPI.PromoOptions = new PromoOptionsAPI.PromoOptions(this._client);
  promoOptionsCommands: PromoOptionsCommandsAPI.PromoOptionsCommands =
    new PromoOptionsCommandsAPI.PromoOptionsCommands(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Use this resource to get the list of the seller's offers. You can use different
   * query parameters to filter the list. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-moje-oferty-w-rest-api" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#list-of-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offers = await client.sale.offers.list();
   * ```
   */
  list(
    query: OfferListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferListResponse> {
    return this._client.get('/sale/offers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete a draft offer. Read more:
   * <a href="../../news/nowy-zasob-do-usuwania-draftow-ofert-aMDnGka2RuL" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resource-draft-delete-yPy9lq6myh0" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offers.delete('offerId');
   * ```
   */
  delete(offerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/offers/${offerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get information about required parameters or parameters
   * scheduled to become required that are not filled in offers. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-nieuzupelnione-parametry-w-ofertach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-unfilled-parameters-in-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.offers.listUnfilledParameters();
   * ```
   */
  listUnfilledParameters(
    query: OfferListUnfilledParametersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferListUnfilledParametersResponse> {
    return this._client.get('/sale/offers/unfilled-parameters', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify offer promotion packages. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-lub-zmienic-opcje-promowania-w-pojedynczej-ofercie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-or-change-promo-options-in-a-single-offer" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerPromoOptions =
   *   await client.sale.offers.modifyPromoOptions('9991337999');
   * ```
   */
  modifyPromoOptions(
    offerID: string,
    body: OfferModifyPromoOptionsParams,
    options?: RequestOptions,
  ): APIPromise<OfferPromoOptions> {
    return this._client.post(path`/sale/offers/${offerID}/promo-options-modification`, {
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
   * Use this resource to get offer rating. Read more:
   * <a href="../../news/nowy-zasob-do-pobrania-oceny-produktu-q018mmPe0H7" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resource-to-retrieve-product-rating-q018mmPrWUX" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.offers.retrieveRating(
   *   '9991337999',
   * );
   * ```
   */
  retrieveRating(offerID: string, options?: RequestOptions): APIPromise<OfferRetrieveRatingResponse> {
    return this._client.get(path`/sale/offers/${offerID}/rating`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a full Smart! offer classification report of one of
   * your offers. Please keep in mind you have to meet Smart! seller conditions
   * first - for more details, use _GET /sale/smart_. To learn more about Smart!
   * offer requirements, see our knowledge base article:
   * [PL](https://allegro.pl/pomoc/dla-sprzedajacych/informacje-dla-sprzedajacych/co-zrobic-aby-moje-oferty-byly-oznaczone-ikona-allegro-smart-lDkP8VbKncV)
   * /
   * [EN](https://allegro.pl/help/for-sellers/allegro-smart-for-sellers/how-can-i-make-my-offers-be-marked-with-the-allegro-smart-badge-rKD1RV30jFM).
   * Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#kwalifikacja-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#offer-qualification" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.offers.retrieveSmartReport('offerId');
   * ```
   */
  retrieveSmartReport(
    offerID: string,
    query: OfferRetrieveSmartReportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferRetrieveSmartReportResponse> {
    return this._client.get(path`/sale/offers/${offerID}/smart`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface DeliveryMethodID {
  /**
   * Delivery method id
   */
  id?: string;
}

export interface OfferPromoOption {
  /**
   * Promotion package identifier.
   */
  id?: string;

  /**
   * Date on which the promotion package will be renewed for a new cycle: Format
   * (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  nextCycleDate?: string;

  /**
   * Date from which the promotion package is valid: Format (ISO 8601) -
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  validFrom?: string;

  /**
   * Date to which the promotion package is valid: Format (ISO 8601) -
   * yyyy-MM-dd'T'HH:mm:ss.SSSZ.
   */
  validTo?: string;
}

export interface OfferPromoOptions {
  /**
   * Promo packages on additional marketplaces
   */
  additionalMarketplaces?: Array<OfferPromoOptions.AdditionalMarketplace>;

  basePackage?: OfferPromoOption;

  /**
   * Extra promotion packages set on offer.
   */
  extraPackages?: Array<OfferPromoOption>;

  marketplaceId?: string;

  /**
   * Offer identifier
   */
  offerId?: string;

  pendingChanges?: OfferPromoOptionsPendingChanges;
}

export namespace OfferPromoOptions {
  export interface AdditionalMarketplace {
    basePackage?: OffersAPI.OfferPromoOption;

    /**
     * Extra promotion packages set on offer.
     */
    extraPackages?: Array<OffersAPI.OfferPromoOption>;

    marketplaceId?: string;

    pendingChanges?: OffersAPI.OfferPromoOptionsPendingChanges;
  }
}

export interface OfferPromoOptionsPendingChanges {
  basePackage?: OfferPromoOption;
}

export interface PromoOptionsModification {
  /**
   * Type of modification to be applied.
   */
  modificationType?: 'CHANGE' | 'REMOVE_WITH_END_OF_CYCLE' | 'REMOVE_NOW';

  /**
   * Promotion package identifier.
   */
  packageId?: string;

  /**
   * Type of promotion package to be changed/removed.
   */
  packageType?: 'BASE' | 'EXTRA';
}

export interface SmartDeliveryMethod {
  /**
   * Delivery method id
   */
  id?: string;
}

export interface OfferListResponse {
  /**
   * Number of offers in the search result.
   */
  count?: number;

  /**
   * The list of seller's offers matching the request's criteria.
   */
  offers?: Array<OfferListResponse.Offer>;

  /**
   * The total number of offers matching the request's criteria.
   */
  totalCount?: number;
}

export namespace OfferListResponse {
  /**
   * An offer.
   */
  export interface Offer {
    /**
     * The offer ID.
     */
    id?: string;

    /**
     * Properties of the offer for each additional marketplace.
     */
    additionalMarketplaces?: Record<string, Offer.AdditionalMarketplaces>;

    /**
     * The definition of the additional services assigned to the offer.
     */
    additionalServices?: Offer.AdditionalServices;

    /**
     * The definitions of the different after sales services assigned to the offer.
     */
    afterSalesServices?: ProductOffersAPI.AfterSalesServices;

    /**
     * Information about offer's business properties.
     */
    b2b?: Offer.B2b;

    /**
     * The category to which the offer is listed for sale.
     */
    category?: ProductOffersAPI.OfferCategory;

    /**
     * Delivery information.
     */
    delivery?: Offer.Delivery;

    /**
     * The information on the offer in an external system.
     */
    external?: ProductOffersAPI.ExternalID;

    fundraisingCampaign?: SizeTablesAPI.JustID;

    /**
     * The title of the offer.
     */
    name?: string;

    /**
     * The image used as a thumbnail on the listings.
     */
    primaryImage?: Offer.PrimaryImage;

    /**
     * Information on the offer's publication status and dates.
     */
    publication?: Offer.Publication;

    /**
     * Additional information about offers in auction format.
     */
    saleInfo?: Offer.SaleInfo;

    /**
     * Information on the offer's selling mode.
     */
    sellingMode?: Offer.SellingMode;

    /**
     * The offer's statistics on the base marketplace.
     */
    stats?: Offer.Stats | null;

    /**
     * Information on the offer's stock.
     */
    stock?: Offer.Stock;
  }

  export namespace Offer {
    /**
     * Properties of the offer for the given marketplace.
     */
    export interface AdditionalMarketplaces {
      /**
       * Information about the publication of the offer on the given marketplace.
       */
      publication?: AdditionalMarketplaces.Publication | null;

      /**
       * Information about the selling mode of the offer on the given marketplace.
       */
      sellingMode?: AdditionalMarketplaces.SellingMode | null;

      /**
       * The offer's statistics on the base marketplace.
       */
      stats?: AdditionalMarketplaces.Stats;

      /**
       * Contains only the sold stock on the given marketplace. The available stock
       * applies to all marketplaces.
       */
      stock?: AdditionalMarketplaces.Stock | null;
    }

    export namespace AdditionalMarketplaces {
      /**
       * Information about the publication of the offer on the given marketplace.
       */
      export interface Publication {
        /**
         * The publication status of the offer on an additional marketplace. The possible
         * values:
         *
         * - _NOT_REQUESTED_ - The seller has not declared their intention to list this
         *   offer on the marketplace
         * - _PENDING_ - The qualification process has not started; the offer is not listed
         *   yet
         * - _IN_PROGRESS_ - We are processing whether the offer qualifies to be listed on
         *   the marketplace; the offer is not listed yet
         * - _APPROVED_ - The offer is approved to be listed on the marketplace
         * - _REFUSED_ - The offer will not be listed on the marketplace; the offer may be
         *   re-qualified if is corrected
         */
        state?: 'NOT_REQUESTED' | 'PENDING' | 'IN_PROGRESS' | 'APPROVED' | 'REFUSED';
      }

      /**
       * Information about the selling mode of the offer on the given marketplace.
       */
      export interface SellingMode {
        /**
         * The price data.
         */
        price?: ProductOffersAPI.BuyNowPrice;

        /**
         * The automatic pricing rule.
         */
        priceAutomation?: SellingMode.PriceAutomation;
      }

      export namespace SellingMode {
        /**
         * The automatic pricing rule.
         */
        export interface PriceAutomation {
          rule?: PriceAutomation.Rule;
        }

        export namespace PriceAutomation {
          export interface Rule {
            /**
             * Identifier of a automatic pricing rule.
             */
            id?: string;

            /**
             * The field is deprecated and will be removed in the future. To obtain rule
             * details use the following
             * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
             * with rule.id from the response.
             */
            type?: Rule.Type;
          }

          export namespace Rule {
            /**
             * The field is deprecated and will be removed in the future. To obtain rule
             * details use the following
             * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
             * with rule.id from the response.
             */
            export interface Type extends RulesAPI.AutomaticPricingRuleType {}
          }
        }
      }

      /**
       * The offer's statistics on the base marketplace.
       */
      export interface Stats {
        /**
         * The number of unique users viewing this offer in the past 30 days.
         */
        visitsCount?: number;

        /**
         * The number of users who added this offer to their watch lists.
         */
        watchersCount?: number;
      }

      /**
       * Contains only the sold stock on the given marketplace. The available stock
       * applies to all marketplaces.
       */
      export interface Stock {
        /**
         * The number of sold items in the last 30 days on the given marketplace.
         */
        sold?: number;
      }
    }

    /**
     * The definition of the additional services assigned to the offer.
     */
    export interface AdditionalServices {
      /**
       * The ID of the additional services definition.
       */
      id?: string;
    }

    /**
     * Information about offer's business properties.
     */
    export interface B2b {
      buyableOnlyByBusiness?: boolean;
    }

    /**
     * Delivery information.
     */
    export interface Delivery {
      shippingRates?: OfferModificationCommandsAPI.ShippingRates;
    }

    /**
     * The image used as a thumbnail on the listings.
     */
    export interface PrimaryImage {
      /**
       * The url to the image in its original size.
       */
      url?: string;
    }

    /**
     * Information on the offer's publication status and dates.
     */
    export interface Publication {
      /**
       * The actual date and time of last ending in UTC.
       */
      endedAt?: string;

      /**
       * The date and time of a planned ending in UTC.
       */
      endingAt?: string;

      /**
       * Information on the offer's publication marketplaces.
       */
      marketplaces?: Publication.Marketplaces;

      /**
       * The actual date and time of activation in UTC.
       */
      startedAt?: string;

      /**
       * The date and time of activation in UTC for a planned listing.
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

    export namespace Publication {
      /**
       * Information on the offer's publication marketplaces.
       */
      export interface Marketplaces {
        /**
         * Additional marketplaces, on which the offer is to be listed.
         */
        additional?: Array<SaleAPI.MarketplaceReference>;

        /**
         * Identifies a marketplace.
         */
        base?: SaleAPI.MarketplaceReference;
      }
    }

    /**
     * Additional information about offers in auction format.
     */
    export interface SaleInfo {
      /**
       * The number of bidders.
       */
      biddersCount?: number;

      /**
       * The price data.
       */
      currentPrice?: BidAPI.CurrentPrice;
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
       * The automatic pricing rule.
       */
      priceAutomation?: SellingMode.PriceAutomation;

      /**
       * The price data.
       */
      startingPrice?: ProductOffersAPI.StartingPrice;
    }

    export namespace SellingMode {
      /**
       * The automatic pricing rule.
       */
      export interface PriceAutomation {
        rule?: PriceAutomation.Rule;
      }

      export namespace PriceAutomation {
        export interface Rule {
          /**
           * Identifier of a automatic pricing rule.
           */
          id?: string;

          /**
           * The field is deprecated and will be removed in the future. To obtain rule
           * details use the following
           * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
           * with rule.id from the response.
           */
          type?: Rule.Type;
        }

        export namespace Rule {
          /**
           * The field is deprecated and will be removed in the future. To obtain rule
           * details use the following
           * <a href="#operation/getAutomaticPricingRuleByIdUsingGET" target="_blank">resource</a>
           * with rule.id from the response.
           */
          export interface Type extends RulesAPI.AutomaticPricingRuleType {}
        }
      }
    }

    /**
     * The offer's statistics on the base marketplace.
     */
    export interface Stats {
      /**
       * The number of unique users viewing this offer in the past 30 days.
       */
      visitsCount?: number;

      /**
       * The number of users who added this offer to their watch lists.
       */
      watchersCount?: number;
    }

    /**
     * Information on the offer's stock.
     */
    export interface Stock {
      /**
       * The available stock value.
       */
      available?: number;

      /**
       * The number of sold items in the last 30 days on the base marketplace.
       */
      sold?: number;
    }
  }
}

export interface OfferListUnfilledParametersResponse {
  /**
   * Number of returned elements.
   */
  count?: number;

  /**
   * List of offers unfilled parameters.
   */
  offers?: Array<OfferListUnfilledParametersResponse.Offer>;

  /**
   * Total number of available elements.
   */
  totalCount?: number;
}

export namespace OfferListUnfilledParametersResponse {
  export interface Offer {
    /**
     * Identifier of the offer.
     */
    id?: string;

    /**
     * Category of offer with unfilled parameters
     */
    category?: Offer.Category;

    /**
     * List of unfilled parameters.
     */
    parameters?: Array<Offer.Parameter>;
  }

  export namespace Offer {
    /**
     * Category of offer with unfilled parameters
     */
    export interface Category {
      /**
       * Category identifier.
       */
      id?: string;
    }

    export interface Parameter {
      /**
       * Parameter identifier.
       */
      id?: string;
    }
  }
}

export interface OfferRetrieveRatingResponse {
  /**
   * Average score of offer rating.
   */
  averageScore?: string;

  /**
   * List score distribution with count.
   */
  scoreDistribution?: Array<OfferRetrieveRatingResponse.ScoreDistribution>;

  /**
   * List of size feedback.
   */
  sizeFeedback?: Array<OfferRetrieveRatingResponse.SizeFeedback>;

  /**
   * Number of total responses.
   */
  totalResponses?: number;
}

export namespace OfferRetrieveRatingResponse {
  export interface ScoreDistribution {
    /**
     * Count of score.
     */
    count?: number;

    /**
     * Identifier of score: 5, 4, 3, 2, 1.
     */
    name?: string;
  }

  export interface SizeFeedback {
    /**
     * Count of sizeFeedback responses.
     */
    count?: number;

    /**
     * Identifier of sizeFeedback: BIGGER, FIT, SMALLER.
     */
    name?: string;
  }
}

export interface OfferRetrieveSmartReportResponse {
  /**
   * Offer Smart! eligibility status
   */
  classification?: OfferRetrieveSmartReportResponse.Classification;

  /**
   * Set of conditions to be met in order for that particular offer to be Smart!.
   * Each condition filters out improperly configured delivery methods or checks some
   * offer attributes. Order of conditions matters. Please keep in mind that this is
   * a **PREVIEW** of an offer classification if being conducted right now - actual
   * classification is triggered only by attribute changes and as of now it cannot be
   * manually done on demand.
   */
  conditions?: Array<OfferRetrieveSmartReportResponse.Condition>;

  /**
   * Indicates whether that particular offer is set to be reclassified in the next 24
   * hours
   */
  scheduledForReclassification?: boolean;

  /**
   * Delivery methods marked with Smart! label
   */
  smartDeliveryMethods?: Array<SmartDeliveryMethod>;
}

export namespace OfferRetrieveSmartReportResponse {
  /**
   * Offer Smart! eligibility status
   */
  export interface Classification {
    /**
     * Indicates whether that particular offer is currently Smart!
     */
    fulfilled?: boolean;

    /**
     * Date of the most recent status change
     */
    lastChanged?: string;
  }

  export interface Condition {
    /**
     * Technical condition name
     */
    code?: string;

    /**
     * Brief condition description, might contain useful instructions to help making
     * that particular condition pass
     */
    description?: string;

    /**
     * Set of delivery methods that fail to meet this condition. May be null if the
     * condition does not apply to delivery methods.
     */
    failedDeliveryMethods?: Array<OffersAPI.DeliveryMethodID>;

    /**
     * Indicates whether this condition is met
     */
    fulfilled?: boolean;

    /**
     * Condition name
     */
    name?: string;

    /**
     * Set of delivery methods that meet this condition. May be null if the condition
     * does not apply to delivery methods.
     */
    passedDeliveryMethods?: Array<OffersAPI.DeliveryMethodID>;
  }
}

export interface OfferListParams {
  afterSalesServices?: OfferListParams.AfterSalesServices;

  b2b?: OfferListParams.B2b;

  category?: OfferListParams.Category;

  delivery?: OfferListParams.Delivery;

  external?: OfferListParams.External;

  fundraisingCampaign?: OfferListParams.FundraisingCampaign;

  /**
   * The maximum number of offers returned in the response.
   */
  limit?: number;

  /**
   * The text to search in the offer title.
   */
  name?: string;

  offer?: OfferListParams.Offer;

  /**
   * Index of the first returned offer from all search results. Maximum sum of offset
   * and limit is 10 000 000.
   */
  offset?: number;

  product?: OfferListParams.Product;

  /**
   * Allows to search for offers from categories where productization is required.
   */
  productizationRequired?: boolean;

  publication?: OfferListParams.Publication;

  sellingMode?: OfferListParams.SellingMode;

  /**
   * The results' sorting order. No prefix in the value means ascending order. `-`
   * prefix means descending order. If you don't provide the sort parameter, the list
   * is sorted by offer creation time, descending.
   *
   * If additionally a `publication.marketplace` is provided, sorts by price and
   * `stock.sold` using the data on the given marketplace.
   */
  sort?:
    | 'sellingMode.price.amount'
    | '-sellingMode.price.amount'
    | 'stock.sold'
    | '-stock.sold'
    | 'stock.available'
    | '-stock.available';
}

export namespace OfferListParams {
  export interface AfterSalesServices {
    /**
     * The ID of return policy. Returns offers with given return policy ID.
     */
    returnPolicy?: string;
  }

  export interface B2b {
    /**
     * Allows to search for offers buyable only by businesses.
     */
    buyableOnlyByBusiness?: boolean;
  }

  export interface Category {
    /**
     * The identifier of the category, where you want to search for offers.
     */
    id?: string;
  }

  export interface Delivery {
    /**
     * Allows to filter offers by existence of shipping rates ID.
     */
    shippingRates?: boolean;
  }

  export interface External {
    /**
     * The ID from the client's external system. Passing more than one value will
     * search for offers with any of the given IDs. By default no ID is included.
     * Example: `external.id=1233&external.id=1234` - returns offers with ID `1233` or
     * `1234`. Single ID length shouldn't exceed 100 characters.
     */
    id?: Array<string>;
  }

  export interface FundraisingCampaign {
    /**
     * Allows to search for charity or commercial offers.
     */
    id?: boolean;
  }

  export interface Offer {
    /**
     * Offer ID.
     */
    id?: Array<string>;
  }

  export interface Product {
    /**
     * Allows to filter offers by existence of product ID.
     */
    id?: boolean;
  }

  export interface Publication {
    /**
     * Either the base marketplace or an additional marketplace of the offer.
     *
     * When passing the parameter `publication.marketplace`, searches for offers with
     * the given marketplace as either its base marketplace or one of its additional
     * marketplaces. When the parameter is omitted, searches for offers with all
     * marketplaces.
     *
     * In addition to searching, passing the parameter also influences the
     * functionality of other query parameter by searching and sorting by data (e.g.
     * price) on the given marketplace.
     */
    marketplace?: string;

    /**
     * The publication status of the offer. Passing more than one value will search for
     * offers with any of the given statuses. By default all statuses are included.
     * Example: `publication.status=INACTIVE&publication.status=ACTIVE` - returns
     * offers with status `INACTIVE` or `ACTIVE`.
     */
    status?: Array<'INACTIVE' | 'ACTIVE' | 'ACTIVATING' | 'ENDED'>;
  }

  export interface SellingMode {
    /**
     * The offer's selling format. Passing more than one value will search for offers
     * with any of the given formats. By default all formats are included. Example:
     * `sellingMode.format=BUY_NOW&sellingMode.format=ADVERTISEMENT` - returns offers
     * with with format `BUY_NOW` or `ADVERTISEMENT`.
     */
    format?: Array<'BUY_NOW' | 'ADVERTISEMENT' | 'AUCTION'>;

    /**
     * The upper threshold of price.
     *
     * If additionally a `publication.marketplace` is provided, searches using the
     * price on the given marketplace.
     */
    price?: number;

    /**
     * Allows to filter offers by existence of price automation rule ID. Passing
     * 'false' will return offers with any price automation rule, passing 'true' will
     * return offers without any price automation rules.
     *
     * If additionally a `publication.marketplace` is provided, searches using the
     * price automation rule on the given marketplace.
     */
    priceAutomation?: boolean;
  }
}

export interface OfferListUnfilledParametersParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  offer?: OfferListUnfilledParametersParams.Offer;

  /**
   * The offset of elements in the response.
   */
  offset?: number;

  /**
   * Filter by parameter type.
   */
  parameterType?: 'REQUIRED' | 'REQUIREMENT_PLANNED';
}

export namespace OfferListUnfilledParametersParams {
  export interface Offer {
    /**
     * List of offer ids. If empty all offers with unfilled parameters will be
     * returned.
     */
    id?: Array<string>;
  }
}

export interface OfferModifyPromoOptionsParams {
  /**
   * Promo package modifications to be applied on additional marketplaces.
   */
  additionalMarketplaces?: Array<OfferModifyPromoOptionsParams.AdditionalMarketplace>;

  /**
   * Promo package modifications to be applied.
   */
  modifications?: Array<PromoOptionsModification>;
}

export namespace OfferModifyPromoOptionsParams {
  export interface AdditionalMarketplace {
    marketplaceId?: string;

    /**
     * Promo package modifications to be applied on additional marketplace.
     */
    modifications?: Array<OffersAPI.PromoOptionsModification>;
  }
}

export interface OfferRetrieveSmartReportParams {
  /**
   * Marketplace for which offer classification report will be returned. If not
   * specified, the result of the offer's base marketplace will be returned.
   */
  marketplaceId?: string;
}

Offers.Translations = Translations;
Offers.PromoOptions = PromoOptions;
Offers.PromoOptionsCommands = PromoOptionsCommands;
Offers.Tags = Tags;

export declare namespace Offers {
  export {
    type DeliveryMethodID as DeliveryMethodID,
    type OfferPromoOption as OfferPromoOption,
    type OfferPromoOptions as OfferPromoOptions,
    type OfferPromoOptionsPendingChanges as OfferPromoOptionsPendingChanges,
    type PromoOptionsModification as PromoOptionsModification,
    type SmartDeliveryMethod as SmartDeliveryMethod,
    type OfferListResponse as OfferListResponse,
    type OfferListUnfilledParametersResponse as OfferListUnfilledParametersResponse,
    type OfferRetrieveRatingResponse as OfferRetrieveRatingResponse,
    type OfferRetrieveSmartReportResponse as OfferRetrieveSmartReportResponse,
    type OfferListParams as OfferListParams,
    type OfferListUnfilledParametersParams as OfferListUnfilledParametersParams,
    type OfferModifyPromoOptionsParams as OfferModifyPromoOptionsParams,
    type OfferRetrieveSmartReportParams as OfferRetrieveSmartReportParams,
  };

  export {
    Translations as Translations,
    type OfferTranslationType as OfferTranslationType,
    type TranslationListResponse as TranslationListResponse,
    type TranslationUpdateParams as TranslationUpdateParams,
    type TranslationListParams as TranslationListParams,
    type TranslationDeleteParams as TranslationDeleteParams,
  };

  export {
    PromoOptions as PromoOptions,
    type PromoOptionGetAllResponse as PromoOptionGetAllResponse,
    type PromoOptionGetAllParams as PromoOptionGetAllParams,
  };

  export {
    PromoOptionsCommands as PromoOptionsCommands,
    type PromoGeneralReport as PromoGeneralReport,
    type PromoOptionsCommandModification as PromoOptionsCommandModification,
    type PromoOptionsCommandModificationPackage as PromoOptionsCommandModificationPackage,
    type PromoOptionsCommandDetailedResultResponse as PromoOptionsCommandDetailedResultResponse,
    type PromoOptionsCommandBatchModifyParams as PromoOptionsCommandBatchModifyParams,
    type PromoOptionsCommandDetailedResultParams as PromoOptionsCommandDetailedResultParams,
  };

  export {
    Tags as Tags,
    type TagID as TagID,
    type TagListResponse as TagListResponse,
    type TagRequest as TagRequest,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagAssignParams as TagAssignParams,
    type TagList1Params as TagList1Params,
  };
}

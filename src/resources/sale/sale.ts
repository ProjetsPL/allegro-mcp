// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SaleAPI from './sale';
import * as AllegroPricesOfferConsentsAPI from './allegro-prices-offer-consents';
import {
  AllegroPricesOfferConsentChangeResponse,
  AllegroPricesOfferConsentUpdateParams,
  AllegroPricesOfferConsents,
} from './allegro-prices-offer-consents';
import * as BadgeApplicationsAPI from './badge-applications';
import {
  BadgeApplicationListParams,
  BadgeApplicationListResponse,
  BadgeApplications,
} from './badge-applications';
import * as BundlesAPI from './bundles';
import {
  BundleCreateParams,
  BundleDiscount,
  BundleListParams,
  BundleListResponse,
  BundleMarketplace,
  BundleUpdateDiscountParams,
  BundledOffer,
  Bundles,
  OfferBundle,
} from './bundles';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryData,
  CategoryListParams,
  CategoryListResponse,
  CategoryParameterDisplayConditions,
  CategoryParameterRequirementConditions,
  CategoryParameterWithValue,
  CategoryRetrieveParametersResponse,
  CategoryRetrieveProductParametersResponse,
} from './categories';
import * as ClassifiedsPackagesAPI from './classifieds-packages';
import {
  ClassifiedPackageConfig,
  ClassifiedsPackageListParams,
  ClassifiedsPackageListResponse,
  ClassifiedsPackages,
} from './classifieds-packages';
import * as CompatibilityListAPI from './compatibility-list';
import { CompatibilityList, CompatibilityListListResponse } from './compatibility-list';
import * as CompatibleProductsAPI from './compatible-products';
import {
  CompatibleProductListGroupsParams,
  CompatibleProductListGroupsResponse,
  CompatibleProductListParams,
  CompatibleProductListResponse,
  CompatibleProducts,
} from './compatible-products';
import * as DeliverySettingsAPI from './delivery-settings';
import {
  DeliverySettingRetrieveParams,
  DeliverySettingUpdateParams,
  DeliverySettings,
} from './delivery-settings';
import * as DisputeAttachmentsAPI from './dispute-attachments';
import {
  DisputeAttachmentCreateParams,
  DisputeAttachmentCreateResponse,
  DisputeAttachmentUploadParams,
  DisputeAttachments,
} from './dispute-attachments';
import * as OfferAttachmentsAPI from './offer-attachments';
import {
  OfferAttachment,
  OfferAttachmentCreateParams,
  OfferAttachmentUploadParams,
  OfferAttachments,
} from './offer-attachments';
import * as OfferClassifiedsPackagesAPI from './offer-classifieds-packages';
import {
  ClassifiedExtraPackage,
  ClassifiedPackage,
  OfferClassifiedsPackageRetrieveResponse,
  OfferClassifiedsPackageUpdateParams,
  OfferClassifiedsPackages,
} from './offer-classifieds-packages';
import * as OfferContactsAPI from './offer-contacts';
import {
  ContactRequest,
  ContactResponse,
  OfferContactCreateParams,
  OfferContactListResponse,
  OfferContactUpdateParams,
  OfferContacts,
} from './offer-contacts';
import * as OfferModificationCommandsAPI from './offer-modification-commands';
import {
  OfferModificationCommandTasksParams,
  OfferModificationCommandUpdateParams,
  OfferModificationCommands,
  ShippingRates,
} from './offer-modification-commands';
import * as OfferPriceAutomationCommandsAPI from './offer-price-automation-commands';
import {
  OfferPriceAutomationCommandCreateParams,
  OfferPriceAutomationCommandTasksParams,
  OfferPriceAutomationCommands,
} from './offer-price-automation-commands';
import * as OfferPriceChangeCommandsAPI from './offer-price-change-commands';
import {
  OfferPriceChangeCommandTasksParams,
  OfferPriceChangeCommandUpdateParams,
  OfferPriceChangeCommands,
} from './offer-price-change-commands';
import * as OfferPublicationCommandsAPI from './offer-publication-commands';
import {
  GeneralReport,
  OfferCriterium,
  OfferPublicationCommandBatchModifyParams,
  OfferPublicationCommandGetDetailedReportParams,
  OfferPublicationCommands,
  TaskCount,
  TaskReport,
} from './offer-publication-commands';
import * as OfferQuantityChangeCommandsAPI from './offer-quantity-change-commands';
import {
  OfferQuantityChangeCommandTasksParams,
  OfferQuantityChangeCommandUpdateParams,
  OfferQuantityChangeCommands,
} from './offer-quantity-change-commands';
import * as OfferVariantsAPI from './offer-variants';
import {
  OfferVariantCreateParams,
  OfferVariantListParams,
  OfferVariantListResponse,
  OfferVariantUpdateParams,
  OfferVariants,
  VariantSet,
} from './offer-variants';
import * as ProductOffersAPI from './product-offers';
import {
  AfterSalesServices,
  B2b,
  BuyNowPrice,
  CompatibilityListManualType,
  Contact,
  DeliveryProductOfferRequest,
  Error,
  ExternalID,
  ImpliedWarranty,
  Location,
  MarketedBeforeGpsrObligation,
  MinimalPrice,
  OfferCategory,
  OfferID,
  OfferStatus,
  ParameterProductOfferRequest,
  ParameterProductOfferResponse,
  ProductOfferAdditionalServices,
  ProductOfferAttachmentItem,
  ProductOfferCheckOperationStatusParams,
  ProductOfferCheckOperationStatusResponse,
  ProductOfferCreateParams,
  ProductOfferFundraisingCampaignRequest,
  ProductOfferRetrievePartsParams,
  ProductOfferRetrievePartsResponse,
  ProductOfferUpdateParams,
  ProductOffers,
  ProductSetElement,
  ProductSetElementQuantity,
  ProductSetElementResponsiblePersonRequest,
  ProductSetElementResponsibleProducerRequestWrapper,
  ProductSetElementSafetyInformation,
  ProductSetElementSafetyInformationWrapper,
  PublicationRequest,
  ReturnPolicy,
  SaleProductOffer,
  SaleProductOfferPublicationRequest,
  SaleProductOfferRequestBase,
  SaleProductOfferResponseV1,
  SaleProductOffersRequestStock,
  SellingModeFormat,
  SizeTable,
  StartingPrice,
  Warranty,
} from './product-offers';
import * as ResponsiblePersonsAPI from './responsible-persons';
import {
  ResponsiblePersonAddress,
  ResponsiblePersonContact,
  ResponsiblePersonCreateParams,
  ResponsiblePersonListParams,
  ResponsiblePersonListResponse,
  ResponsiblePersonResponse,
  ResponsiblePersonUpdateParams,
  ResponsiblePersons,
} from './responsible-persons';
import * as ResponsibleProducersAPI from './responsible-producers';
import {
  ResponsibleProducerAddress,
  ResponsibleProducerContact,
  ResponsibleProducerCreateParams,
  ResponsibleProducerListParams,
  ResponsibleProducerListResponse,
  ResponsibleProducerResponse,
  ResponsibleProducerRetrieveParams,
  ResponsibleProducerUpdateParams,
  ResponsibleProducers,
} from './responsible-producers';
import * as ShippingRatesAPI from './shipping-rates';
import {
  ShippingRateCreateParams,
  ShippingRateListParams,
  ShippingRateListResponse,
  ShippingRateUpdateParams,
  ShippingRates as ShippingRatesAPIShippingRates,
  ShippingRatesSet,
} from './shipping-rates';
import * as SizeTablesAPI from './size-tables';
import {
  Cells,
  Header,
  JustID,
  PublicTable,
  SizeTableCreateParams,
  SizeTableListResponse,
  SizeTableUpdateParams,
  SizeTables,
} from './size-tables';
import * as TurnoverDiscountAPI from './turnover-discount';
import {
  TurnoverDiscount,
  TurnoverDiscountDefinitionDto,
  TurnoverDiscountDto,
  TurnoverDiscountListParams,
  TurnoverDiscountListResponse,
  TurnoverDiscountThresholdDto,
  TurnoverDiscountUpdateParams,
} from './turnover-discount';
import * as UserRatingsAPI from './user-ratings';
import {
  Answer,
  Removal,
  UserRating,
  UserRatingAnswerParams,
  UserRatingListParams,
  UserRatingListResponse,
  UserRatingRequestRemovalParams,
  UserRatingRetrieveParams,
  UserRatings,
} from './user-ratings';
import * as AlleDiscountAPI from './alle-discount/alle-discount';
import {
  AlleDiscount,
  AlleDiscountListCampaignsParams,
  AlleDiscountListCampaignsResponse,
  AlleDiscountListEligibleOffersParams,
  AlleDiscountListEligibleOffersResponse,
  AlleDiscountListSubmittedOffersParams,
  AlleDiscountListSubmittedOffersResponse,
} from './alle-discount/alle-discount';
import * as BadgesAPI from './badges/badges';
import {
  BadgeApplication,
  BadgeApplicationBargainPrice,
  BadgeApplicationCampaign,
  BadgeApplicationOffer,
  BadgeApplicationPrices,
  BadgeApplicationPurchaseConstraints,
  BadgeApplicationRejectionReason,
  BadgeApplyParams,
  BadgeListParams,
  BadgeListResponse,
  Badges,
} from './badges/badges';
import * as DisputesAPI from './disputes/disputes';
import { Dispute, DisputeListParams, DisputeListResponse, Disputes } from './disputes/disputes';
import * as LoyaltyAPI from './loyalty/loyalty';
import { Loyalty } from './loyalty/loyalty';
import * as OfferAdditionalServicesAPI from './offer-additional-services/offer-additional-services';
import {
  OfferAdditionalServiceGetCategoriesResponse,
  OfferAdditionalServices,
} from './offer-additional-services/offer-additional-services';
import * as OffersAPI from './offers/offers';
import {
  DeliveryMethodID,
  OfferListParams,
  OfferListResponse,
  OfferListUnfilledParametersParams,
  OfferListUnfilledParametersResponse,
  OfferModifyPromoOptionsParams,
  OfferPromoOption,
  OfferPromoOptions,
  OfferPromoOptionsPendingChanges,
  OfferRetrieveRatingResponse,
  OfferRetrieveSmartReportParams,
  OfferRetrieveSmartReportResponse,
  Offers,
  PromoOptionsModification,
  SmartDeliveryMethod,
} from './offers/offers';
import * as PriceAutomationAPI from './price-automation/price-automation';
import { PriceAutomation } from './price-automation/price-automation';
import * as ProductsAPI from './products/products';
import {
  AICoCreatedContent,
  ImageURL,
  ParameterRangeValue,
  ProductCategoryWithPath,
  ProductListParams,
  ProductListResponse,
  ProductParameterDto,
  ProductRetrieveParams,
  ProductRetrieveResponse,
  ProductSafety,
  Products,
  ProductsCategoryPath,
  StandardizedDescription,
  TrustedContent,
} from './products/products';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sale extends APIResource {
  productOffers: ProductOffersAPI.ProductOffers = new ProductOffersAPI.ProductOffers(this._client);
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);
  offerPublicationCommands: OfferPublicationCommandsAPI.OfferPublicationCommands =
    new OfferPublicationCommandsAPI.OfferPublicationCommands(this._client);
  offerClassifiedsPackages: OfferClassifiedsPackagesAPI.OfferClassifiedsPackages =
    new OfferClassifiedsPackagesAPI.OfferClassifiedsPackages(this._client);
  classifiedsPackages: ClassifiedsPackagesAPI.ClassifiedsPackages =
    new ClassifiedsPackagesAPI.ClassifiedsPackages(this._client);
  userRatings: UserRatingsAPI.UserRatings = new UserRatingsAPI.UserRatings(this._client);
  offerAdditionalServices: OfferAdditionalServicesAPI.OfferAdditionalServices =
    new OfferAdditionalServicesAPI.OfferAdditionalServices(this._client);
  bundles: BundlesAPI.Bundles = new BundlesAPI.Bundles(this._client);
  loyalty: LoyaltyAPI.Loyalty = new LoyaltyAPI.Loyalty(this._client);
  turnoverDiscount: TurnoverDiscountAPI.TurnoverDiscount = new TurnoverDiscountAPI.TurnoverDiscount(
    this._client,
  );
  offerModificationCommands: OfferModificationCommandsAPI.OfferModificationCommands =
    new OfferModificationCommandsAPI.OfferModificationCommands(this._client);
  offerPriceChangeCommands: OfferPriceChangeCommandsAPI.OfferPriceChangeCommands =
    new OfferPriceChangeCommandsAPI.OfferPriceChangeCommands(this._client);
  offerQuantityChangeCommands: OfferQuantityChangeCommandsAPI.OfferQuantityChangeCommands =
    new OfferQuantityChangeCommandsAPI.OfferQuantityChangeCommands(this._client);
  offerPriceAutomationCommands: OfferPriceAutomationCommandsAPI.OfferPriceAutomationCommands =
    new OfferPriceAutomationCommandsAPI.OfferPriceAutomationCommands(this._client);
  priceAutomation: PriceAutomationAPI.PriceAutomation = new PriceAutomationAPI.PriceAutomation(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  shippingRates: ShippingRatesAPI.ShippingRates = new ShippingRatesAPI.ShippingRates(this._client);
  deliverySettings: DeliverySettingsAPI.DeliverySettings = new DeliverySettingsAPI.DeliverySettings(
    this._client,
  );
  offerContacts: OfferContactsAPI.OfferContacts = new OfferContactsAPI.OfferContacts(this._client);
  responsiblePersons: ResponsiblePersonsAPI.ResponsiblePersons = new ResponsiblePersonsAPI.ResponsiblePersons(
    this._client,
  );
  responsibleProducers: ResponsibleProducersAPI.ResponsibleProducers =
    new ResponsibleProducersAPI.ResponsibleProducers(this._client);
  sizeTables: SizeTablesAPI.SizeTables = new SizeTablesAPI.SizeTables(this._client);
  offerVariants: OfferVariantsAPI.OfferVariants = new OfferVariantsAPI.OfferVariants(this._client);
  offerAttachments: OfferAttachmentsAPI.OfferAttachments = new OfferAttachmentsAPI.OfferAttachments(
    this._client,
  );
  disputes: DisputesAPI.Disputes = new DisputesAPI.Disputes(this._client);
  disputeAttachments: DisputeAttachmentsAPI.DisputeAttachments = new DisputeAttachmentsAPI.DisputeAttachments(
    this._client,
  );
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  compatibilityList: CompatibilityListAPI.CompatibilityList = new CompatibilityListAPI.CompatibilityList(
    this._client,
  );
  compatibleProducts: CompatibleProductsAPI.CompatibleProducts = new CompatibleProductsAPI.CompatibleProducts(
    this._client,
  );
  badges: BadgesAPI.Badges = new BadgesAPI.Badges(this._client);
  badgeApplications: BadgeApplicationsAPI.BadgeApplications = new BadgeApplicationsAPI.BadgeApplications(
    this._client,
  );
  allegroPricesOfferConsents: AllegroPricesOfferConsentsAPI.AllegroPricesOfferConsents =
    new AllegroPricesOfferConsentsAPI.AllegroPricesOfferConsents(this._client);
  alleDiscount: AlleDiscountAPI.AlleDiscount = new AlleDiscountAPI.AlleDiscount(this._client);

  /**
   * Use this resource to get the current Allegro Prices eligibility information for
   * the account on each of the available marketplaces. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getAllegroPricesAccountEligibility();
   * ```
   */
  getAllegroPricesAccountEligibility(
    options?: RequestOptions,
  ): APIPromise<SaleGetAllegroPricesAccountEligibilityResponse> {
    return this._client.get('/sale/allegro-prices-account-eligibility', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Badge campaigns are another way to promote your offers. You can apply for a
   * badge, which - depending on a type - will be displayed on your offer page of on
   * the list of offers. First - use this resource to get a list of all available
   * badge campaigns at the moment, then use _POST /sale/badges_ to apply for badge.
   * Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#lista-dostepnych-kampanii" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#list-of-available-campaigns" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getBadgeCampaigns();
   * ```
   */
  getBadgeCampaigns(
    query: SaleGetBadgeCampaignsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetBadgeCampaignsResponse> {
    return this._client.get('/sale/badge-campaigns', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get badge operation details. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zmiana-ceny-i-zakonczenie-oznaczenia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#change-price-and-finish-badge" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getBadgeOperationDetails(
   *   'operationId',
   * );
   * ```
   */
  getBadgeOperationDetails(
    operationID: string,
    options?: RequestOptions,
  ): APIPromise<SaleGetBadgeOperationDetailsResponse> {
    return this._client.get(path`/sale/badge-operations/${operationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get information about changes in categories. It returns
   * changes that occurred in the last 3 months. At present we support the following
   * changes:
   *
   * - CATEGORY_CREATED - new category was created.
   * - CATEGORY_RENAMED - category name has been changed.
   * - CATEGORY_MOVED - category has been moved to a different place in category
   *   tree, category parent id field is changed.
   * - CATEGORY_DELETED - category is no longer available, category from
   *   redirectCategory field should be used instead.
   *
   * Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#dziennik-zmian-w-kategoriach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#event-journal-in-categories" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getCategoryEvents();
   * ```
   */
  getCategoryEvents(
    query: SaleGetCategoryEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetCategoryEventsResponse> {
    return this._client.get('/sale/category-events', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get information about planned changes in category
   * parameters. Please note that in some cases, the returned events may finally not
   * happen in the future. At present we support the following changes: -
   * REQUIREMENT_CHANGE - the parameter will be required in the category. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-przyszle-zmiany-w-parametrach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-future-changes-in-parameters" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getCategoryParametersScheduledChanges();
   * ```
   */
  getCategoryParametersScheduledChanges(
    query: SaleGetCategoryParametersScheduledChangesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetCategoryParametersScheduledChangesResponse> {
    return this._client.get('/sale/category-parameters-scheduled-changes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * This endpoint returns daily statistics collected for a list of advertisements in
   * a given date range. Read more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#statystyki-wybranych-ogloszen" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#statistics-of-selected-classified-ads" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getClassifiedOffersStats();
   * ```
   */
  getClassifiedOffersStats(
    query: SaleGetClassifiedOffersStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetClassifiedOffersStatsResponse> {
    return this._client.get('/sale/classified-offers-stats', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * This endpoint returns daily statistics collected for a list of advertisements in
   * a given date range for logged user. Read more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#statystyki-wszystkich-ogloszen-sprzedawcy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#statistics-of-seller-s-classified-ads" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getClassifiedSellerStats();
   * ```
   */
  getClassifiedSellerStats(
    query: SaleGetClassifiedSellerStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetClassifiedSellerStatsResponse> {
    return this._client.get('/sale/classified-seller-stats', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Resource allows to fetch compatibility list suggestion for given offer or
   * product. Read more:
   * <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-wyszukac-sugerowana-sekcje-compatibilitylist" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#how-to-search-for-the-suggested-compatibility-section" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getCompatibilityListSuggestions();
   * ```
   */
  getCompatibilityListSuggestions(
    query: SaleGetCompatibilityListSuggestionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetCompatibilityListSuggestionsResponse> {
    return this._client.get('/sale/compatibility-list-suggestions', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of all delivery methods currently available on
   * the platform, as well as those that have already been discontinued. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-cennik-dostaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-add-shipping-rates" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getDeliveryMethods();
   * ```
   */
  getDeliveryMethods(
    query: SaleGetDeliveryMethodsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetDeliveryMethodsResponse> {
    return this._client.get('/sale/delivery-methods', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to receive suggested categories for given phrase. Read more:
   * <a href="../../news/udostepnilismy-nowy-zasob-dzieki-ktoremu-sprawdzisz-sugerowane-kategorie-dla-podanej-frazy-4RAl9jwX1FW" target="_blank">PL</a>
   * /
   * <a href="../../news/we-have-introduced-a-new-resource-that-allows-you-to-retrieve-the-suggested-categories-for-the-given-phrase-v8Wdy1EOyF0" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getMatchingCategories({
   *   name: 'bmw x3',
   * });
   * ```
   */
  getMatchingCategories(
    query: SaleGetMatchingCategoriesParams,
    options?: RequestOptions,
  ): APIPromise<SaleGetMatchingCategoriesResponse> {
    return this._client.get('/sale/matching-categories', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this endpoint to get events from the last 24 hours concerning changes in the
   * authorized seller's offers. At present we support the following events:
   *
   * - OFFER_ACTIVATED - offer is visible on site and available for purchase, occurs
   *   when offer status changes from ACTIVATING to ACTIVE.
   * - OFFER_CHANGED - occurs when offer's fields has been changed e.g. description
   *   or photos.
   * - OFFER_ENDED - offer is no longer available for purchase, occurs when offer
   *   status changes from ACTIVE to ENDED.
   * - OFFER_STOCK_CHANGED - stock in an offer was changed either via purchase or by
   *   seller.
   * - OFFER_PRICE_CHANGED - occurs when price in an offer was changed.
   * - OFFER_ARCHIVED - offer is no longer available on listing and has been
   *   archived.
   * - OFFER_BID_PLACED - bid was placed on the offer.
   * - OFFER_BID_CANCELED - bid for offer was canceled.
   * - OFFER_TRANSLATION_UPDATED - translation of offer was updated.
   * - OFFER_VISIBILITY_CHANGED - visibility of offer was changed on marketplaces.
   *
   * Returned events may occur by actions made via browser or API. The resource
   * allows you to get events concerning active offers and offers scheduled for
   * activation (status ACTIVE and ACTIVATING). Returned events do not concern offers
   * in INACTIVE and ENDED status (the exception is OFFER_ARCHIVED event). External
   * id is returned for all event types except OFFER_BID_PLACED and
   * OFFER_BID_CANCELED. Please note that one change may result in more than one
   * event. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#dziennik-zdarzen-w-ofertach-sprzedawcy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#event-journal-concerning-changes-in-seller-s-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getOfferEvents();
   * ```
   */
  getOfferEvents(
    query: SaleGetOfferEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetOfferEventsResponse> {
    return this._client.get('/sale/offer-events', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to retrieve all available offer promotion packages. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-pobrac-dostepne-opcje-promowania" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-retrieve-available-promo-options" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getOfferPromotionPackages();
   * ```
   */
  getOfferPromotionPackages(options?: RequestOptions): APIPromise<SaleGetOfferPromotionPackagesResponse> {
    return this._client.get('/sale/offer-promotion-packages', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get current sales quality with at most 30 days history.
   *
   * @example
   * ```ts
   * const response = await client.sale.getQuality();
   * ```
   */
  getQuality(options?: RequestOptions): APIPromise<SaleGetQualityResponse> {
    return this._client.get('/sale/quality', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get all size tables templates. Read more:
   * <a href="../../news/tabele-rozmiarow-zmieniamy-istniejacy-zasob-i-dodajemy-nowe-zasoby-do-ich-obslugi-k1nyd21A4fP" target="_blank">PL</a>
   * /
   * <a href="../../news/size-tables-we-change-the-existing-resource-and-add-new-resources-to-handle-them-jn91bynlbC9" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getSizeTablesTemplates();
   * ```
   */
  getSizeTablesTemplates(options?: RequestOptions): APIPromise<SaleGetSizeTablesTemplatesResponse> {
    return this._client.get('/sale/size-tables-templates', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a full Smart! seller classification report. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#kwalifikacja-sprzedawcy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#seller-qualification" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.getSmartSellerClassificationReport();
   * ```
   */
  getSmartSellerClassificationReport(
    query: SaleGetSmartSellerClassificationReportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetSmartSellerClassificationReportResponse> {
    return this._client.get('/sale/smart', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to receive tax settings for given category. Based on received
   * settings you may set VAT tax settings for your offers. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#opcje-faktury-i-stawki-vat" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#invoice-and-vat-settings" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.getTaxSettings();
   * ```
   */
  getTaxSettings(
    query: SaleGetTaxSettingsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SaleGetTaxSettingsResponse> {
    return this._client.get('/sale/tax-settings', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to propose a product. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-utworzyc-nowy-produkt" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-create-a-product" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.proposeProduct({
   *   category: {},
   *   images: [{}],
   *   language: 'pl-PL',
   *   name: 'iPhone 5s',
   *   parameters: [{ id: 'id' }],
   * });
   * ```
   */
  proposeProduct(
    params: SaleProposeProductParams,
    options?: RequestOptions,
  ): APIPromise<SaleProposeProductResponse> {
    const { 'Accept-Language': acceptLanguage, ...body } = params;
    return this._client.post('/sale/product-proposals', {
      body,
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
   * Use this resource to update the Allegro Prices consent value for the account on
   * chosen marketplaces. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.updateAllegroPricesAccountConsent({
   *     additionalMarketplaces: {
   *       'allegro-cz': { status: 'DENIED' },
   *     },
   *     status: 'ALLOWED',
   *   });
   * ```
   */
  updateAllegroPricesAccountConsent(
    body: SaleUpdateAllegroPricesAccountConsentParams,
    options?: RequestOptions,
  ): APIPromise<SaleUpdateAllegroPricesAccountConsentResponse> {
    return this._client.put('/sale/allegro-prices-account-consent', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Upload image to our servers. You can choose from two upload options:
   *
   * - \- provide a link and we will download an image for you
   * - \- send an image as binary data
   *
   * **Important!** Remember to use dedicated domain for upload, i.e.
   *
   * - \- https://upload.allegro.pl for Production
   * - \- https://upload.allegro.pl.allegrosandbox.pl for Sandbox
   *
   * Read more about the rules for photos in an offer's gallery and description:
   * <a href="https://help.allegro.com/pl/sell/a/zasady-dla-zdjec-w-galerii-i-w-opisie-8dvWz3eo4T5?marketplaceId=allegro-pl" target="_blank">PL</a>
   * /
   * <a href="https://help.allegro.com/en/sell/a/rules-for-images-in-the-gallery-and-in-descriptions-8dvWB8Y2PIq" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response = await client.sale.uploadImage({
   *   url: 'url',
   * });
   * ```
   */
  uploadImage(body: SaleUploadImageParams, options?: RequestOptions): APIPromise<SaleUploadImageResponse> {
    return this._client.post('/sale/images', {
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

export interface AvailablePromotionPackage {
  /**
   * Promotion package identifier.
   */
  id?: string;

  /**
   * Promo package cycle duration.
   */
  cycleDuration?: string;

  /**
   * Promotion package name.
   */
  name?: string;
}

export interface Category {
  /**
   * Category identifier.
   */
  id?: string;
}

/**
 * Category suggestion category object.
 */
export interface CategorySuggestionCategoryNode {
  /**
   * ID of category.
   */
  id: string;

  /**
   * Category name.
   */
  name: string;

  /**
   * Category suggestion category object.
   */
  parent?: CategorySuggestionCategoryNode;
}

export interface ClassifiedDailyEventStat {
  /**
   * Date in format yyyy-MM-dd
   */
  date?: string;

  /**
   * List of event types with number of occurrences.
   */
  eventStats?: Array<ClassifiedEventStat>;
}

export interface ClassifiedEventStat {
  count?: number;

  /**
   * Classified statistical event type.
   */
  eventType?:
    | 'SHOWED_PHONE_NUMBER'
    | 'ASKED_QUESTION'
    | 'CLICKED_ASK_QUESTION'
    | 'ADDED_TO_FAVOURITES'
    | 'REMOVED_FROM_FAVOURITES';
}

/**
 * Identifies a marketplace.
 */
export interface MarketplaceReference {
  /**
   * The id of a marketplace.<br/> Available marketplaces can be determined using
   * <a href="#operation/marketplacesGET">GET /marketplaces</a>.
   */
  id: string;
}

/**
 * Product category
 */
export interface ProductCategory {
  /**
   * Category identifier.
   */
  id?: string;
}

/**
 * Product's parameter
 */
export interface ProductParameter {
  id: string;

  options?: ProductParameter.Options;

  /**
   * Parameter's range value
   */
  rangeValue?: ProductsAPI.ParameterRangeValue;

  unit?: string;

  values?: Array<string>;

  valuesIds?: Array<string>;

  valuesLabels?: Array<string>;
}

export namespace ProductParameter {
  export interface Options {
    identifiesProduct?: boolean;
  }
}

export interface SaleGetAllegroPricesAccountEligibilityResponse {
  /**
   * Eligibility state on marketplces other than the base marketplace of the account.
   */
  additionalMarketplaces?: Record<
    string,
    SaleGetAllegroPricesAccountEligibilityResponse.AdditionalMarketplaces
  >;

  consent?: 'ALLOWED' | 'DENIED';

  qualification?: SaleGetAllegroPricesAccountEligibilityResponse.Qualification;
}

export namespace SaleGetAllegroPricesAccountEligibilityResponse {
  export interface AdditionalMarketplaces {
    consent?: 'ALLOWED' | 'DENIED';

    qualification?: AdditionalMarketplaces.Qualification;
  }

  export namespace AdditionalMarketplaces {
    export interface Qualification {
      status?: 'QUALIFIED' | 'DISQUALIFIED';
    }
  }

  export interface Qualification {
    status?: 'QUALIFIED' | 'DISQUALIFIED';
  }
}

export interface SaleGetBadgeCampaignsResponse {
  /**
   * List of badge campaigns.
   */
  badgeCampaigns: Array<SaleGetBadgeCampaignsResponse.BadgeCampaign>;
}

export namespace SaleGetBadgeCampaignsResponse {
  export interface BadgeCampaign {
    /**
     * Badge campaign ID.
     */
    id: string;

    /**
     * Time period when the campaign is open for applying for badge.
     */
    application: BadgeCampaign.Application;

    /**
     * Summary of user eligibility for participation in the campaign.
     */
    eligibility: BadgeCampaign.Eligibility;

    /**
     * Identifies a marketplace.
     */
    marketplace: SaleAPI.MarketplaceReference;

    /**
     * Badge campaign name.
     */
    name: string;

    /**
     * Time period when the badge is displayed on the list of offers or on the offer
     * page.
     */
    publication: BadgeCampaign.Publication;

    /**
     * Link to campaign Terms & Conditions
     */
    regulationsLink: string;

    type: 'DISCOUNT' | 'STANDARD' | 'SOURCING';

    /**
     * Time period when the campaign is visible in
     * <a href="https://allegro.pl/moje-allegro/sprzedaz/moje-oferty" target="_blank">My
     * Allegro</a> and
     * <a href="https://ms.allegro.pl/seller-offers/" target="_blank">Sales Manager
     * (Menedżer sprzedaży)</a> (it is not equal to the time period when badges are
     * displayed on the list of offers or on the offer page).
     */
    visibility: BadgeCampaign.Visibility;
  }

  export namespace BadgeCampaign {
    /**
     * Time period when the campaign is open for applying for badge.
     */
    export interface Application {
      type: 'ALWAYS' | 'SINCE' | 'WITHIN' | 'UNTIL' | 'NEVER';

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      from?: string;

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      to?: string;
    }

    /**
     * Summary of user eligibility for participation in the campaign.
     */
    export interface Eligibility {
      /**
       * Information whether user is eligible to participate in this campaign.
       */
      eligible: boolean;

      /**
       * Information why user is not able to participate in the campaign.
       */
      refusalReasons: Array<Eligibility.RefusalReason>;
    }

    export namespace Eligibility {
      export interface RefusalReason {
        /**
         * Code corresponding to the message. For more information visit
         * <a href="/badge/#6" target="_blank">the list of available codes</a>.
         */
        code: string;

        /**
         * List of refusal messages.
         */
        messages: Array<RefusalReason.Message>;
      }

      export namespace RefusalReason {
        export interface Message {
          /**
           * Detailed message.
           */
          text: string;

          /**
           * Optional link that redirects to page associated with refusal reason.
           */
          link?: string | null;
        }
      }
    }

    /**
     * Time period when the badge is displayed on the list of offers or on the offer
     * page.
     */
    export interface Publication {
      type: 'ALWAYS' | 'SINCE' | 'WITHIN' | 'UNTIL' | 'NEVER';

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      from?: string;

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      to?: string;
    }

    /**
     * Time period when the campaign is visible in
     * <a href="https://allegro.pl/moje-allegro/sprzedaz/moje-oferty" target="_blank">My
     * Allegro</a> and
     * <a href="https://ms.allegro.pl/seller-offers/" target="_blank">Sales Manager
     * (Menedżer sprzedaży)</a> (it is not equal to the time period when badges are
     * displayed on the list of offers or on the offer page).
     */
    export interface Visibility {
      type: 'ALWAYS' | 'SINCE' | 'WITHIN' | 'UNTIL' | 'NEVER';

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      from?: string;

      /**
       * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
       */
      to?: string;
    }
  }
}

export interface SaleGetBadgeOperationDetailsResponse {
  /**
   * Badge operation ID.
   */
  id: string;

  campaign: BadgesAPI.BadgeApplicationCampaign;

  /**
   * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
   */
  createdAt: string;

  offer: BadgesAPI.BadgeApplicationOffer;

  /**
   * Information about processing of the request/operation
   */
  process: SaleGetBadgeOperationDetailsResponse.Process;

  /**
   * Badge operation type.
   */
  type: 'UPDATE' | 'FINISH';

  /**
   * Provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).
   */
  updatedAt: string;
}

export namespace SaleGetBadgeOperationDetailsResponse {
  /**
   * Information about processing of the request/operation
   */
  export interface Process {
    /**
     * A list of rejection reasons for the badge operation. Returned for process.status
     * = DECLINED only.
     */
    rejectionReasons: Array<BadgesAPI.BadgeApplicationRejectionReason>;

    status: 'REQUESTED' | 'PROCESSED' | 'DECLINED';
  }
}

export interface SaleGetCategoryEventsResponse {
  /**
   * The list of events.
   */
  events: Array<SaleGetCategoryEventsResponse.Event>;
}

export namespace SaleGetCategoryEventsResponse {
  /**
   * The data of an event.
   */
  export interface Event {
    /**
     * The ID of the event. It can be used in the `from` parameter of the query.
     */
    id: string;

    /**
     * The date and time when the change occurred, provided in
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    occurredAt: string;

    /**
     * The type of the change.
     */
    type: string;
  }
}

export interface SaleGetCategoryParametersScheduledChangesResponse {
  /**
   * The list of scheduled changes.
   */
  scheduledChanges: Array<SaleGetCategoryParametersScheduledChangesResponse.ScheduledChange>;
}

export namespace SaleGetCategoryParametersScheduledChangesResponse {
  /**
   * The data of an scheduled change.
   */
  export interface ScheduledChange {
    /**
     * The date and time when the change was scheduled, provided in
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    scheduledAt: string;

    /**
     * The date and time when the change will be effective from, provided in
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    scheduledFor: string;

    /**
     * The type of the change.
     */
    type: string;
  }
}

/**
 * Data objects containing details for counted events per offer. Includes a list of
 * OfferStatResponseDto grouped by date and a list of ClassifiedEventStat grouped
 * by EventType for a specific period.
 */
export interface SaleGetClassifiedOffersStatsResponse {
  offerStats?: Array<SaleGetClassifiedOffersStatsResponse.OfferStat>;
}

export namespace SaleGetClassifiedOffersStatsResponse {
  export interface OfferStat {
    eventsPerDay?: Array<SaleAPI.ClassifiedDailyEventStat>;

    eventStatsTotal?: Array<SaleAPI.ClassifiedEventStat>;

    /**
     * Offer details data, containg offer identifier.
     */
    offer?: OfferStat.Offer;
  }

  export namespace OfferStat {
    /**
     * Offer details data, containg offer identifier.
     */
    export interface Offer {
      id?: string;
    }
  }
}

/**
 * Data class for a specific seller events. Includes a list of OfferStatResponseDto
 * grouped by date and a list of ClassifiedEventStat grouped by EventType for a
 * specific period.
 */
export interface SaleGetClassifiedSellerStatsResponse {
  eventsPerDay?: Array<ClassifiedDailyEventStat>;

  eventStatsTotal?: Array<ClassifiedEventStat>;
}

export interface SaleGetCompatibilityListSuggestionsResponse {
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

export interface SaleGetDeliveryMethodsResponse {
  deliveryMethods?: Array<SaleGetDeliveryMethodsResponse.DeliveryMethod>;
}

export namespace SaleGetDeliveryMethodsResponse {
  export interface DeliveryMethod {
    /**
     * Delivery method id.
     */
    id?: string;

    /**
     * Indicates Allegro signed delivery method, which allows to easily distinguish
     * similar delivery methods with various restrictions, e.g. Allegro Paczkomaty 24/7
     * InPost from Paczkomaty 24/7.
     */
    allegroEndorsed?: boolean;

    /**
     * Country code to which the shipment is being sent.
     */
    destinationCountry?: string;

    /**
     * Country code from which the shipment is dispatched, if null the country is
     * undefined and the shipment can be dispatched from any country.
     */
    dispatchCountry?: string | null;

    /**
     * List of marketplace ids where this delivery method is available for buyers.
     */
    marketplaces?: Array<string>;

    /**
     * Delivery method name. Please note that only method ids are unique, not method
     * names. For duplicate names, check the marketplaces, paymentPolicy and
     * allegroEndorsed properties as well.
     */
    name?: string;

    /**
     * Whether the payment is to be collected in advance or on delivery.
     */
    paymentPolicy?: 'IN_ADVANCE' | 'CASH_ON_DELIVERY';

    /**
     * Rules for the delivery method, i.e. price, quantity, shipping time, etc.
     */
    shippingRatesConstraints?: DeliveryMethod.ShippingRatesConstraints;
  }

  export namespace DeliveryMethod {
    /**
     * Rules for the delivery method, i.e. price, quantity, shipping time, etc.
     */
    export interface ShippingRatesConstraints {
      /**
       * Indicates whether delivery method can be used when adding or modifying shipping
       * rates.
       */
      allowed?: boolean;

      /**
       * Rules for the shipping cost for the first item in the parcel.
       */
      firstItemRate?: ShippingRatesConstraints.FirstItemRate;

      /**
       * Rules for the maximum weight of a package.
       */
      maxPackageWeight?: ShippingRatesConstraints.MaxPackageWeight;

      /**
       * Rules for the quantity per parcel.
       */
      maxQuantityPerPackage?: ShippingRatesConstraints.MaxQuantityPerPackage;

      /**
       * Rules for the shipping cost of another item in the parcel.
       */
      nextItemRate?: ShippingRatesConstraints.NextItemRate;

      /**
       * Rules for the shipping time.
       */
      shippingTime?: ShippingRatesConstraints.ShippingTime;
    }

    export namespace ShippingRatesConstraints {
      /**
       * Rules for the shipping cost for the first item in the parcel.
       */
      export interface FirstItemRate {
        /**
         * ISO 4217 currency code.
         */
        currency?: string;

        /**
         * Upper limit for the rate.
         */
        max?: string;

        /**
         * Lower limit for the rate.
         */
        min?: string;
      }

      /**
       * Rules for the maximum weight of a package.
       */
      export interface MaxPackageWeight {
        /**
         * Upper limit for the maximum package weight, provided in a string format to avoid
         * rounding errors.
         */
        max?: string | null;

        /**
         * Lower limit for the maximum package weight, provided in a string format to avoid
         * rounding errors.
         */
        min?: string | null;

        /**
         * Indicates whether the maximum package weight can be set in shipping rates for
         * the delivery method.
         */
        supported?: boolean;

        /**
         * Weight unit. Currently only `KILOGRAM` is supported.
         */
        unit?: string | null;
      }

      /**
       * Rules for the quantity per parcel.
       */
      export interface MaxQuantityPerPackage {
        /**
         * Upper limit for quantity per package.
         */
        max?: number;
      }

      /**
       * Rules for the shipping cost of another item in the parcel.
       */
      export interface NextItemRate {
        /**
         * ISO 4217 currency code.
         */
        currency?: string;

        /**
         * Upper limit for the rate.
         */
        max?: string;

        /**
         * Lower limit for the rate.
         */
        min?: string;
      }

      /**
       * Rules for the shipping time.
       */
      export interface ShippingTime {
        /**
         * Indicates if custom shipping time can be set when adding or modifying shipping
         * rates.
         */
        customizable?: boolean;

        /**
         * Default shipping time.
         */
        default?: ShippingTime.Default;
      }

      export namespace ShippingTime {
        /**
         * Default shipping time.
         */
        export interface Default {
          /**
           * ISO 8601 duration format.
           */
          from?: string;

          /**
           * ISO 8601 duration format.
           */
          to?: string;
        }
      }
    }
  }
}

export interface SaleGetMatchingCategoriesResponse {
  /**
   * List of categories matching with given phrase.
   */
  matchingCategories: Array<CategorySuggestionCategoryNode>;
}

export interface SaleGetOfferEventsResponse {
  /**
   * The list of events.
   */
  offerEvents: Array<SaleGetOfferEventsResponse.OfferEvent>;
}

export namespace SaleGetOfferEventsResponse {
  /**
   * The data of an event.
   */
  export interface OfferEvent {
    /**
     * The ID of the event. It can be used in the `from` parameter of the query.
     */
    id: string;

    /**
     * The date and time when the event occurred, provided in
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    occurredAt: string;

    /**
     * The type of the event.
     */
    type: string;
  }
}

export interface SaleGetOfferPromotionPackagesResponse {
  /**
   * Available promotion packages on additional marketplaces.
   */
  additionalMarketplaces?: Array<SaleGetOfferPromotionPackagesResponse.AdditionalMarketplace>;

  /**
   * Available base promotion packages. Only one base package can be set on an offer.
   */
  basePackages?: Array<AvailablePromotionPackage>;

  /**
   * Available extra promotion packages. Multiple different extra packages can be set
   * on an offer.
   */
  extraPackages?: Array<AvailablePromotionPackage>;

  marketplaceId?: string;
}

export namespace SaleGetOfferPromotionPackagesResponse {
  export interface AdditionalMarketplace {
    /**
     * Available base promotion packages. Only one base package can be set on an offer.
     */
    basePackages?: Array<SaleAPI.AvailablePromotionPackage>;

    /**
     * Available extra promotion packages. Multiple different extra packages can be set
     * on an offer.
     */
    extraPackages?: Array<SaleAPI.AvailablePromotionPackage>;

    marketplaceId?: string;
  }
}

/**
 * At most 30 day sales quality history, if seller doesn't have sales quality for
 * given day, it won't be present in `quality` array.
 */
export interface SaleGetQualityResponse {
  quality: Array<SaleGetQualityResponse.Quality>;
}

export namespace SaleGetQualityResponse {
  export interface Quality {
    /**
     * The main sales quality level for the given day.
     */
    grade: string;

    /**
     * The maximum possible total score for the given day.
     */
    maxScore: number;

    metrics: Array<Quality.Metric>;

    /**
     * Date for which the result is calculated.
     */
    resultFor: string;

    /**
     * The total score for the given day.
     */
    score: number;
  }

  export namespace Quality {
    export interface Metric {
      /**
       * The code name of the metric.
       */
      code: string;

      /**
       * Translated name of the metric.
       */
      name: string;

      /**
       * The score for the given metric.
       */
      score: number;

      /**
       * The maximum possible score for the given metric.
       */
      maxScore?: number;
    }
  }
}

export interface SaleGetSizeTablesTemplatesResponse {
  /**
   * size tables templates
   */
  templates: Array<SaleGetSizeTablesTemplatesResponse.Template>;
}

export namespace SaleGetSizeTablesTemplatesResponse {
  export interface Template {
    /**
     * size table template id
     */
    id: string;

    /**
     * size table template headers
     */
    headers: Array<SizeTablesAPI.Header>;

    /**
     * size table template name
     */
    name: string;

    /**
     * size table template cells
     */
    values: Array<SizeTablesAPI.Cells>;

    /**
     * size table template image
     */
    image?: Template.Image;
  }

  export namespace Template {
    /**
     * size table template image
     */
    export interface Image {
      captions: Array<Image.Caption>;

      url: string;
    }

    export namespace Image {
      export interface Caption {
        index: string;

        value: string;
      }
    }
  }
}

export interface SaleGetSmartSellerClassificationReportResponse {
  /**
   * Seller Smart! eligibility status
   */
  classification?: SaleGetSmartSellerClassificationReportResponse.Classification;

  /**
   * Set of conditions to be met in order for user to be Smart!
   */
  conditions?: Array<SaleGetSmartSellerClassificationReportResponse.Condition>;

  /**
   * Set of delivery methods that were excluded from Smart! classification on demand
   * by seller
   */
  excludedDeliveryMethods?: Array<OffersAPI.SmartDeliveryMethod>;
}

export namespace SaleGetSmartSellerClassificationReportResponse {
  /**
   * Seller Smart! eligibility status
   */
  export interface Classification {
    /**
     * Indicates whether that user is currently Smart!
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
     * Indicates whether this condition is met
     */
    fulfilled?: boolean;

    /**
     * Condition name
     */
    name?: string;

    /**
     * Indicates whether this condition is required to obtain Smart! status. Please
     * note that certain conditions may be required (or not) based on result of
     * checking other conditions.
     */
    required?: boolean;

    /**
     * Minimum required `value` of related user attribute.
     */
    threshold?: number;

    /**
     * Value of related user attribute that this condition tests. Has to be greater
     * that threshold if present.
     */
    value?: number;
  }
}

export interface SaleGetTaxSettingsResponse {
  /**
   * A list of tax exemptions.
   */
  exemptions?: Array<SaleGetTaxSettingsResponse.Exemption>;

  /**
   * A list of tax rates.
   */
  rates?: Array<SaleGetTaxSettingsResponse.Rate>;

  /**
   * A list of tax subjects.
   */
  subjects?: Array<SaleGetTaxSettingsResponse.Subject>;
}

export namespace SaleGetTaxSettingsResponse {
  export interface Exemption {
    /**
     * Displayable exemption label.
     */
    label?: string;

    /**
     * Value of exemption.
     */
    value?: string;
  }

  export interface Rate {
    /**
     * A country code for which given VAT setting is defined.
     */
    countryCode?: string;

    /**
     * Values of tax rates for given country code.
     */
    values?: Array<Rate.Value>;
  }

  export namespace Rate {
    export interface Value {
      /**
       * Exemption field must be filled out if true, otherwise is optional.
       */
      exemptionRequired?: boolean;

      /**
       * Displayable tax rate label.
       */
      label?: string;

      /**
       * A numeric value of VAT tax rate. In case of "OUT_OF_SCOPE_OF_VAT" it is set
       * to 0.
       */
      value?: string;
    }
  }

  export interface Subject {
    /**
     * Displayable tax subject label.
     */
    label?: string;

    /**
     * Value of subject.
     */
    value?: string;
  }
}

export interface SaleProposeProductResponse {
  /**
   * Product id.
   */
  id?: string;

  /**
   * Product category
   */
  category?: SaleProposeProductResponse.Category;

  /**
   * The description section cannot have more than 40000 bytes in length.
   */
  description?: ProductsAPI.StandardizedDescription;

  /**
   * List of product images.
   */
  images?: Array<ProductsAPI.ImageURL>;

  /**
   * Language of product data (name, description, parameters's values).
   */
  language?: string;

  /**
   * Product name.
   */
  name?: string;

  /**
   * Offer id.
   */
  offerId?: string;

  /**
   * List of product parameters.
   */
  parameters?: Array<SaleProposeProductResponse.Parameter>;

  publication?: SaleProposeProductResponse.Publication;

  /**
   * Supplier id.
   */
  supplier?: SaleProposeProductResponse.Supplier;
}

export namespace SaleProposeProductResponse {
  /**
   * Product category
   */
  export interface Category extends SaleAPI.ProductCategory {
    /**
     * A list of similar categories in which you can sell this product.
     */
    similar?: Array<SaleAPI.Category>;
  }

  export interface Parameter {
    id?: string;

    /**
     * Parameter's range value
     */
    rangeValue?: ProductsAPI.ParameterRangeValue;

    values?: Array<string>;

    valuesIds?: Array<string>;
  }

  export interface Publication {
    /**
     * The publication status of the submitted product:
     *
     * - `PROPOSED` - a new product proposal was created and can be reviewed
     */
    status?: 'PROPOSED' | 'LISTED';
  }

  /**
   * Supplier id.
   */
  export interface Supplier {
    id?: string;
  }
}

export interface SaleUpdateAllegroPricesAccountConsentResponse {
  /**
   * Consent statuses on marketplaces other than the base marketplace of the account.
   */
  additionalMarketplaces?: Record<
    string,
    SaleUpdateAllegroPricesAccountConsentResponse.AdditionalMarketplaces
  >;

  status?: 'ALLOWED' | 'DENIED';
}

export namespace SaleUpdateAllegroPricesAccountConsentResponse {
  export interface AdditionalMarketplaces {
    status?: 'ALLOWED' | 'DENIED';
  }
}

export interface SaleUploadImageResponse {
  /**
   * Date of file expiration (removal from the server). We will remove it unless you
   * use it in your offer.
   */
  expiresAt?: string;

  /**
   * Link to the uploaded image
   */
  location?: string;
}

export interface SaleGetBadgeCampaignsParams {
  marketplace?: SaleGetBadgeCampaignsParams.Marketplace;
}

export namespace SaleGetBadgeCampaignsParams {
  export interface Marketplace {
    /**
     * The marketplace of campaigns.
     */
    id?: string;
  }
}

export interface SaleGetCategoryEventsParams {
  /**
   * The ID of the last seen event. Changes that occurred after the given event will
   * be returned.
   */
  from?: string;

  /**
   * The number of events that will be returned in the response.
   */
  limit?: number;

  /**
   * The types of events that will be returned in the response. All types of events
   * are returned by default.
   */
  type?: Array<'CATEGORY_CREATED' | 'CATEGORY_RENAMED' | 'CATEGORY_MOVED' | 'CATEGORY_DELETED'>;
}

export interface SaleGetCategoryParametersScheduledChangesParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;

  scheduledAt?: SaleGetCategoryParametersScheduledChangesParams.ScheduledAt;

  scheduledFor?: SaleGetCategoryParametersScheduledChangesParams.ScheduledFor;

  /**
   * The types of changes that will be returned in the response. All types of changes
   * are returned by default.
   */
  type?: Array<'REQUIREMENT_CHANGE'>;
}

export namespace SaleGetCategoryParametersScheduledChangesParams {
  export interface ScheduledAt {
    /**
     * The minimum date and time at which the change was scheduled in ISO 8601 format.
     */
    gte?: string;

    /**
     * The maximum date and time at which the change was scheduled in ISO 8601 format.
     */
    lte?: string;
  }

  export interface ScheduledFor {
    /**
     * The minimum date and time from which the change will be effective from in ISO
     * 8601 format. Should be greater than the current date time and less than 3 months
     * from the current date.
     */
    gte?: string;

    /**
     * The maximum date and time from which the change will be effective from in ISO
     * 8601 format. Should be greater than the current date time and less than 3 months
     * from the current date.
     */
    lte?: string;
  }
}

export interface SaleGetClassifiedOffersStatsParams {
  date?: SaleGetClassifiedOffersStatsParams.Date;

  offer?: SaleGetClassifiedOffersStatsParams.Offer;
}

export namespace SaleGetClassifiedOffersStatsParams {
  export interface Date {
    /**
     * The maximum date and time from which the events will be fetched in ISO 8601
     * format. The value should be less than the current date time. The difference
     * between date.gte and date.lte should be less than 3 months.
     */
    gte?: string;

    /**
     * The minimum date and time from which the events will be fetched in ISO 8601
     * format. The value should be less than the current date time and greater than
     * date.lte. The difference between date.gte and date.lte should be less than 3
     * months.
     */
    lte?: string;
  }

  export interface Offer {
    /**
     * List of offer Ids, maximum 50 values.
     */
    id: Array<string>;
  }
}

export interface SaleGetClassifiedSellerStatsParams {
  date?: SaleGetClassifiedSellerStatsParams.Date;
}

export namespace SaleGetClassifiedSellerStatsParams {
  export interface Date {
    /**
     * The maximum date and time from which the events will be fetched in ISO 8601
     * format. The value should be less than the current date time. The difference
     * between date.gte and date.lte should be less than 3 months.
     */
    gte?: string;

    /**
     * The minimum date and time from which the events will be fetched in ISO 8601
     * format. The value should be less than the current date time and greater than
     * date.lte. The difference between date.gte and date.lte should be less than 3
     * months.
     */
    lte?: string;
  }
}

export interface SaleGetCompatibilityListSuggestionsParams {
  /**
   * Locale on the basis of which we will return the suggested compatibility list.
   * For product-based suggestions if missing pl-PL will be used. For offer-based
   * suggestions if missing offer language will be used.
   */
  language?: string;

  offer?: SaleGetCompatibilityListSuggestionsParams.Offer;

  product?: SaleGetCompatibilityListSuggestionsParams.Product;
}

export namespace SaleGetCompatibilityListSuggestionsParams {
  export interface Offer {
    /**
     * Offer id on the basis of which we will return the suggested compatibility list.
     */
    id?: string;
  }

  export interface Product {
    /**
     * Product id on the basis of which we will return the suggested compatibility
     * list.
     */
    id?: string;
  }
}

export interface SaleGetDeliveryMethodsParams {
  /**
   * Allows to filter delivery methods by marketplace id.
   */
  marketplace?: string;
}

export interface SaleGetMatchingCategoriesParams {
  /**
   * Product name for which you want to get suggested categories.
   */
  name: string;
}

export interface SaleGetOfferEventsParams {
  /**
   * The ID of the last seen event. Events that occured after the given event will be
   * returned.
   */
  from?: string;

  /**
   * The number of events that will be returned in the response.
   */
  limit?: number;

  /**
   * The types of events that will be returned in the response. All types of events
   * are returned by default.
   */
  type?: Array<
    | 'OFFER_ACTIVATED'
    | 'OFFER_CHANGED'
    | 'OFFER_ENDED'
    | 'OFFER_STOCK_CHANGED'
    | 'OFFER_PRICE_CHANGED'
    | 'OFFER_ARCHIVED'
    | 'OFFER_BID_PLACED'
    | 'OFFER_BID_CANCELED'
    | 'OFFER_TRANSLATION_UPDATED'
    | 'OFFER_VISIBILITY_CHANGED'
  >;
}

export interface SaleGetSmartSellerClassificationReportParams {
  /**
   * Marketplace for which seller classification report will be returned. If not
   * specified, the classification result for the seller's registration marketplace
   * will be returned.
   */
  marketplaceId?: string;
}

export interface SaleGetTaxSettingsParams {
  category?: SaleGetTaxSettingsParams.Category;

  /**
   * Country code for which tax settings will be returned. If not provided settings
   * for all countries will be returned.
   */
  countryCode?: Array<'PL' | 'CZ' | 'SK' | 'HU'>;
}

export namespace SaleGetTaxSettingsParams {
  export interface Category {
    /**
     * An identifier of a category for which all available tax settings will be
     * returned.
     */
    id: string;
  }
}

export interface SaleProposeProductParams {
  /**
   * Body param: Product category
   */
  category: ProductCategory;

  /**
   * Body param: List of product images. At least one image is required.
   */
  images: Array<ProductsAPI.ImageURL>;

  /**
   * Body param: Language of provided product data (name, description, parameters's
   * values).
   */
  language: string;

  /**
   * Body param: Suggested product name.
   */
  name: string;

  /**
   * Body param: List of product parameters.
   */
  parameters: Array<ProductParameter>;

  /**
   * Body param: The description section cannot have more than 40000 bytes in length.
   */
  description?: ProductsAPI.StandardizedDescription;

  /**
   * Header param: Expected language of messages.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export interface SaleUpdateAllegroPricesAccountConsentParams {
  /**
   * Consent statuses on marketplaces other than the base marketplace of the account.
   */
  additionalMarketplaces?: Record<string, SaleUpdateAllegroPricesAccountConsentParams.AdditionalMarketplaces>;

  status?: 'ALLOWED' | 'DENIED';
}

export namespace SaleUpdateAllegroPricesAccountConsentParams {
  export interface AdditionalMarketplaces {
    status?: 'ALLOWED' | 'DENIED';
  }
}

export interface SaleUploadImageParams {
  /**
   * URL of the image. It has to contain domain name, not an IP address. Currently we
   * support http and https protocols. When using https the certificate chain needs
   * to be valid.
   */
  url: string;
}

Sale.ProductOffers = ProductOffers;
Sale.Offers = Offers;
Sale.OfferPublicationCommands = OfferPublicationCommands;
Sale.OfferClassifiedsPackages = OfferClassifiedsPackages;
Sale.ClassifiedsPackages = ClassifiedsPackages;
Sale.UserRatings = UserRatings;
Sale.OfferAdditionalServices = OfferAdditionalServices;
Sale.Bundles = Bundles;
Sale.Loyalty = Loyalty;
Sale.TurnoverDiscount = TurnoverDiscount;
Sale.OfferModificationCommands = OfferModificationCommands;
Sale.OfferPriceChangeCommands = OfferPriceChangeCommands;
Sale.OfferQuantityChangeCommands = OfferQuantityChangeCommands;
Sale.OfferPriceAutomationCommands = OfferPriceAutomationCommands;
Sale.PriceAutomation = PriceAutomation;
Sale.Categories = Categories;
Sale.ShippingRates = ShippingRatesAPIShippingRates;
Sale.OfferContacts = OfferContacts;
Sale.ResponsiblePersons = ResponsiblePersons;
Sale.ResponsibleProducers = ResponsibleProducers;
Sale.SizeTables = SizeTables;
Sale.OfferVariants = OfferVariants;
Sale.OfferAttachments = OfferAttachments;
Sale.Disputes = Disputes;
Sale.DisputeAttachments = DisputeAttachments;
Sale.Products = Products;
Sale.CompatibilityList = CompatibilityList;
Sale.CompatibleProducts = CompatibleProducts;
Sale.Badges = Badges;
Sale.BadgeApplications = BadgeApplications;
Sale.AllegroPricesOfferConsents = AllegroPricesOfferConsents;
Sale.AlleDiscount = AlleDiscount;

export declare namespace Sale {
  export {
    type AvailablePromotionPackage as AvailablePromotionPackage,
    type Category as Category,
    type CategorySuggestionCategoryNode as CategorySuggestionCategoryNode,
    type ClassifiedDailyEventStat as ClassifiedDailyEventStat,
    type ClassifiedEventStat as ClassifiedEventStat,
    type MarketplaceReference as MarketplaceReference,
    type ProductCategory as ProductCategory,
    type ProductParameter as ProductParameter,
    type SaleGetAllegroPricesAccountEligibilityResponse as SaleGetAllegroPricesAccountEligibilityResponse,
    type SaleGetBadgeCampaignsResponse as SaleGetBadgeCampaignsResponse,
    type SaleGetBadgeOperationDetailsResponse as SaleGetBadgeOperationDetailsResponse,
    type SaleGetCategoryEventsResponse as SaleGetCategoryEventsResponse,
    type SaleGetCategoryParametersScheduledChangesResponse as SaleGetCategoryParametersScheduledChangesResponse,
    type SaleGetClassifiedOffersStatsResponse as SaleGetClassifiedOffersStatsResponse,
    type SaleGetClassifiedSellerStatsResponse as SaleGetClassifiedSellerStatsResponse,
    type SaleGetCompatibilityListSuggestionsResponse as SaleGetCompatibilityListSuggestionsResponse,
    type SaleGetDeliveryMethodsResponse as SaleGetDeliveryMethodsResponse,
    type SaleGetMatchingCategoriesResponse as SaleGetMatchingCategoriesResponse,
    type SaleGetOfferEventsResponse as SaleGetOfferEventsResponse,
    type SaleGetOfferPromotionPackagesResponse as SaleGetOfferPromotionPackagesResponse,
    type SaleGetQualityResponse as SaleGetQualityResponse,
    type SaleGetSizeTablesTemplatesResponse as SaleGetSizeTablesTemplatesResponse,
    type SaleGetSmartSellerClassificationReportResponse as SaleGetSmartSellerClassificationReportResponse,
    type SaleGetTaxSettingsResponse as SaleGetTaxSettingsResponse,
    type SaleProposeProductResponse as SaleProposeProductResponse,
    type SaleUpdateAllegroPricesAccountConsentResponse as SaleUpdateAllegroPricesAccountConsentResponse,
    type SaleUploadImageResponse as SaleUploadImageResponse,
    type SaleGetBadgeCampaignsParams as SaleGetBadgeCampaignsParams,
    type SaleGetCategoryEventsParams as SaleGetCategoryEventsParams,
    type SaleGetCategoryParametersScheduledChangesParams as SaleGetCategoryParametersScheduledChangesParams,
    type SaleGetClassifiedOffersStatsParams as SaleGetClassifiedOffersStatsParams,
    type SaleGetClassifiedSellerStatsParams as SaleGetClassifiedSellerStatsParams,
    type SaleGetCompatibilityListSuggestionsParams as SaleGetCompatibilityListSuggestionsParams,
    type SaleGetDeliveryMethodsParams as SaleGetDeliveryMethodsParams,
    type SaleGetMatchingCategoriesParams as SaleGetMatchingCategoriesParams,
    type SaleGetOfferEventsParams as SaleGetOfferEventsParams,
    type SaleGetSmartSellerClassificationReportParams as SaleGetSmartSellerClassificationReportParams,
    type SaleGetTaxSettingsParams as SaleGetTaxSettingsParams,
    type SaleProposeProductParams as SaleProposeProductParams,
    type SaleUpdateAllegroPricesAccountConsentParams as SaleUpdateAllegroPricesAccountConsentParams,
    type SaleUploadImageParams as SaleUploadImageParams,
  };

  export {
    ProductOffers as ProductOffers,
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

  export {
    Offers as Offers,
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
    OfferPublicationCommands as OfferPublicationCommands,
    type GeneralReport as GeneralReport,
    type OfferCriterium as OfferCriterium,
    type TaskCount as TaskCount,
    type TaskReport as TaskReport,
    type OfferPublicationCommandBatchModifyParams as OfferPublicationCommandBatchModifyParams,
    type OfferPublicationCommandGetDetailedReportParams as OfferPublicationCommandGetDetailedReportParams,
  };

  export {
    OfferClassifiedsPackages as OfferClassifiedsPackages,
    type ClassifiedExtraPackage as ClassifiedExtraPackage,
    type ClassifiedPackage as ClassifiedPackage,
    type OfferClassifiedsPackageRetrieveResponse as OfferClassifiedsPackageRetrieveResponse,
    type OfferClassifiedsPackageUpdateParams as OfferClassifiedsPackageUpdateParams,
  };

  export {
    ClassifiedsPackages as ClassifiedsPackages,
    type ClassifiedPackageConfig as ClassifiedPackageConfig,
    type ClassifiedsPackageListResponse as ClassifiedsPackageListResponse,
    type ClassifiedsPackageListParams as ClassifiedsPackageListParams,
  };

  export {
    UserRatings as UserRatings,
    type Answer as Answer,
    type Removal as Removal,
    type UserRating as UserRating,
    type UserRatingListResponse as UserRatingListResponse,
    type UserRatingRetrieveParams as UserRatingRetrieveParams,
    type UserRatingListParams as UserRatingListParams,
    type UserRatingAnswerParams as UserRatingAnswerParams,
    type UserRatingRequestRemovalParams as UserRatingRequestRemovalParams,
  };

  export {
    OfferAdditionalServices as OfferAdditionalServices,
    type OfferAdditionalServiceGetCategoriesResponse as OfferAdditionalServiceGetCategoriesResponse,
  };

  export {
    Bundles as Bundles,
    type BundleDiscount as BundleDiscount,
    type BundleMarketplace as BundleMarketplace,
    type BundledOffer as BundledOffer,
    type OfferBundle as OfferBundle,
    type BundleListResponse as BundleListResponse,
    type BundleCreateParams as BundleCreateParams,
    type BundleListParams as BundleListParams,
    type BundleUpdateDiscountParams as BundleUpdateDiscountParams,
  };

  export { Loyalty as Loyalty };

  export {
    TurnoverDiscount as TurnoverDiscount,
    type TurnoverDiscountDefinitionDto as TurnoverDiscountDefinitionDto,
    type TurnoverDiscountDto as TurnoverDiscountDto,
    type TurnoverDiscountThresholdDto as TurnoverDiscountThresholdDto,
    type TurnoverDiscountListResponse as TurnoverDiscountListResponse,
    type TurnoverDiscountUpdateParams as TurnoverDiscountUpdateParams,
    type TurnoverDiscountListParams as TurnoverDiscountListParams,
  };

  export {
    OfferModificationCommands as OfferModificationCommands,
    type ShippingRates as ShippingRates,
    type OfferModificationCommandUpdateParams as OfferModificationCommandUpdateParams,
    type OfferModificationCommandTasksParams as OfferModificationCommandTasksParams,
  };

  export {
    OfferPriceChangeCommands as OfferPriceChangeCommands,
    type OfferPriceChangeCommandUpdateParams as OfferPriceChangeCommandUpdateParams,
    type OfferPriceChangeCommandTasksParams as OfferPriceChangeCommandTasksParams,
  };

  export {
    OfferQuantityChangeCommands as OfferQuantityChangeCommands,
    type OfferQuantityChangeCommandUpdateParams as OfferQuantityChangeCommandUpdateParams,
    type OfferQuantityChangeCommandTasksParams as OfferQuantityChangeCommandTasksParams,
  };

  export {
    OfferPriceAutomationCommands as OfferPriceAutomationCommands,
    type OfferPriceAutomationCommandCreateParams as OfferPriceAutomationCommandCreateParams,
    type OfferPriceAutomationCommandTasksParams as OfferPriceAutomationCommandTasksParams,
  };

  export { PriceAutomation as PriceAutomation };

  export {
    Categories as Categories,
    type CategoryData as CategoryData,
    type CategoryParameterDisplayConditions as CategoryParameterDisplayConditions,
    type CategoryParameterRequirementConditions as CategoryParameterRequirementConditions,
    type CategoryParameterWithValue as CategoryParameterWithValue,
    type CategoryListResponse as CategoryListResponse,
    type CategoryRetrieveParametersResponse as CategoryRetrieveParametersResponse,
    type CategoryRetrieveProductParametersResponse as CategoryRetrieveProductParametersResponse,
    type CategoryListParams as CategoryListParams,
  };

  export {
    ShippingRatesAPIShippingRates as ShippingRates,
    type ShippingRatesSet as ShippingRatesSet,
    type ShippingRateListResponse as ShippingRateListResponse,
    type ShippingRateCreateParams as ShippingRateCreateParams,
    type ShippingRateUpdateParams as ShippingRateUpdateParams,
    type ShippingRateListParams as ShippingRateListParams,
  };

  export {
    type DeliverySettings as DeliverySettings,
    type DeliverySettingRetrieveParams as DeliverySettingRetrieveParams,
    type DeliverySettingUpdateParams as DeliverySettingUpdateParams,
  };

  export {
    OfferContacts as OfferContacts,
    type ContactRequest as ContactRequest,
    type ContactResponse as ContactResponse,
    type OfferContactListResponse as OfferContactListResponse,
    type OfferContactCreateParams as OfferContactCreateParams,
    type OfferContactUpdateParams as OfferContactUpdateParams,
  };

  export {
    ResponsiblePersons as ResponsiblePersons,
    type ResponsiblePersonAddress as ResponsiblePersonAddress,
    type ResponsiblePersonContact as ResponsiblePersonContact,
    type ResponsiblePersonResponse as ResponsiblePersonResponse,
    type ResponsiblePersonListResponse as ResponsiblePersonListResponse,
    type ResponsiblePersonCreateParams as ResponsiblePersonCreateParams,
    type ResponsiblePersonUpdateParams as ResponsiblePersonUpdateParams,
    type ResponsiblePersonListParams as ResponsiblePersonListParams,
  };

  export {
    ResponsibleProducers as ResponsibleProducers,
    type ResponsibleProducerAddress as ResponsibleProducerAddress,
    type ResponsibleProducerContact as ResponsibleProducerContact,
    type ResponsibleProducerResponse as ResponsibleProducerResponse,
    type ResponsibleProducerListResponse as ResponsibleProducerListResponse,
    type ResponsibleProducerCreateParams as ResponsibleProducerCreateParams,
    type ResponsibleProducerRetrieveParams as ResponsibleProducerRetrieveParams,
    type ResponsibleProducerUpdateParams as ResponsibleProducerUpdateParams,
    type ResponsibleProducerListParams as ResponsibleProducerListParams,
  };

  export {
    SizeTables as SizeTables,
    type Cells as Cells,
    type Header as Header,
    type JustID as JustID,
    type PublicTable as PublicTable,
    type SizeTableListResponse as SizeTableListResponse,
    type SizeTableCreateParams as SizeTableCreateParams,
    type SizeTableUpdateParams as SizeTableUpdateParams,
  };

  export {
    OfferVariants as OfferVariants,
    type VariantSet as VariantSet,
    type OfferVariantListResponse as OfferVariantListResponse,
    type OfferVariantCreateParams as OfferVariantCreateParams,
    type OfferVariantUpdateParams as OfferVariantUpdateParams,
    type OfferVariantListParams as OfferVariantListParams,
  };

  export {
    OfferAttachments as OfferAttachments,
    type OfferAttachment as OfferAttachment,
    type OfferAttachmentCreateParams as OfferAttachmentCreateParams,
    type OfferAttachmentUploadParams as OfferAttachmentUploadParams,
  };

  export {
    Disputes as Disputes,
    type Dispute as Dispute,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListParams as DisputeListParams,
  };

  export {
    DisputeAttachments as DisputeAttachments,
    type DisputeAttachmentCreateResponse as DisputeAttachmentCreateResponse,
    type DisputeAttachmentCreateParams as DisputeAttachmentCreateParams,
    type DisputeAttachmentUploadParams as DisputeAttachmentUploadParams,
  };

  export {
    Products as Products,
    type AICoCreatedContent as AICoCreatedContent,
    type ImageURL as ImageURL,
    type ParameterRangeValue as ParameterRangeValue,
    type ProductCategoryWithPath as ProductCategoryWithPath,
    type ProductParameterDto as ProductParameterDto,
    type ProductSafety as ProductSafety,
    type ProductsCategoryPath as ProductsCategoryPath,
    type StandardizedDescription as StandardizedDescription,
    type TrustedContent as TrustedContent,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListResponse as ProductListResponse,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductListParams as ProductListParams,
  };

  export {
    CompatibilityList as CompatibilityList,
    type CompatibilityListListResponse as CompatibilityListListResponse,
  };

  export {
    CompatibleProducts as CompatibleProducts,
    type CompatibleProductListResponse as CompatibleProductListResponse,
    type CompatibleProductListGroupsResponse as CompatibleProductListGroupsResponse,
    type CompatibleProductListParams as CompatibleProductListParams,
    type CompatibleProductListGroupsParams as CompatibleProductListGroupsParams,
  };

  export {
    Badges as Badges,
    type BadgeApplication as BadgeApplication,
    type BadgeApplicationBargainPrice as BadgeApplicationBargainPrice,
    type BadgeApplicationCampaign as BadgeApplicationCampaign,
    type BadgeApplicationOffer as BadgeApplicationOffer,
    type BadgeApplicationPrices as BadgeApplicationPrices,
    type BadgeApplicationPurchaseConstraints as BadgeApplicationPurchaseConstraints,
    type BadgeApplicationRejectionReason as BadgeApplicationRejectionReason,
    type BadgeListResponse as BadgeListResponse,
    type BadgeListParams as BadgeListParams,
    type BadgeApplyParams as BadgeApplyParams,
  };

  export {
    BadgeApplications as BadgeApplications,
    type BadgeApplicationListResponse as BadgeApplicationListResponse,
    type BadgeApplicationListParams as BadgeApplicationListParams,
  };

  export {
    AllegroPricesOfferConsents as AllegroPricesOfferConsents,
    type AllegroPricesOfferConsentChangeResponse as AllegroPricesOfferConsentChangeResponse,
    type AllegroPricesOfferConsentUpdateParams as AllegroPricesOfferConsentUpdateParams,
  };

  export {
    AlleDiscount as AlleDiscount,
    type AlleDiscountListCampaignsResponse as AlleDiscountListCampaignsResponse,
    type AlleDiscountListEligibleOffersResponse as AlleDiscountListEligibleOffersResponse,
    type AlleDiscountListSubmittedOffersResponse as AlleDiscountListSubmittedOffersResponse,
    type AlleDiscountListCampaignsParams as AlleDiscountListCampaignsParams,
    type AlleDiscountListEligibleOffersParams as AlleDiscountListEligibleOffersParams,
    type AlleDiscountListSubmittedOffersParams as AlleDiscountListSubmittedOffersParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export {
  AlleDiscount,
  type AlleDiscountListCampaignsResponse,
  type AlleDiscountListEligibleOffersResponse,
  type AlleDiscountListSubmittedOffersResponse,
  type AlleDiscountListCampaignsParams,
  type AlleDiscountListEligibleOffersParams,
  type AlleDiscountListSubmittedOffersParams,
} from './alle-discount/index';
export {
  AllegroPricesOfferConsents,
  type AllegroPricesOfferConsentChangeResponse,
  type AllegroPricesOfferConsentUpdateParams,
} from './allegro-prices-offer-consents';
export {
  BadgeApplications,
  type BadgeApplicationListResponse,
  type BadgeApplicationListParams,
} from './badge-applications';
export {
  Badges,
  type BadgeApplication,
  type BadgeApplicationBargainPrice,
  type BadgeApplicationCampaign,
  type BadgeApplicationOffer,
  type BadgeApplicationPrices,
  type BadgeApplicationPurchaseConstraints,
  type BadgeApplicationRejectionReason,
  type BadgeListResponse,
  type BadgeListParams,
  type BadgeApplyParams,
} from './badges/index';
export {
  Bundles,
  type BundleDiscount,
  type BundleMarketplace,
  type BundledOffer,
  type OfferBundle,
  type BundleListResponse,
  type BundleCreateParams,
  type BundleListParams,
  type BundleUpdateDiscountParams,
} from './bundles';
export {
  Categories,
  type CategoryData,
  type CategoryParameterDisplayConditions,
  type CategoryParameterRequirementConditions,
  type CategoryParameterWithValue,
  type CategoryListResponse,
  type CategoryRetrieveParametersResponse,
  type CategoryRetrieveProductParametersResponse,
  type CategoryListParams,
} from './categories';
export {
  ClassifiedsPackages,
  type ClassifiedPackageConfig,
  type ClassifiedsPackageListResponse,
  type ClassifiedsPackageListParams,
} from './classifieds-packages';
export { CompatibilityList, type CompatibilityListListResponse } from './compatibility-list';
export {
  CompatibleProducts,
  type CompatibleProductListResponse,
  type CompatibleProductListGroupsResponse,
  type CompatibleProductListParams,
  type CompatibleProductListGroupsParams,
} from './compatible-products';
export {
  DeliverySettings,
  type DeliverySettingRetrieveParams,
  type DeliverySettingUpdateParams,
} from './delivery-settings';
export {
  DisputeAttachments,
  type DisputeAttachmentCreateResponse,
  type DisputeAttachmentCreateParams,
  type DisputeAttachmentUploadParams,
} from './dispute-attachments';
export { Disputes, type Dispute, type DisputeListResponse, type DisputeListParams } from './disputes/index';
export { Loyalty } from './loyalty/index';
export {
  OfferAdditionalServices,
  type OfferAdditionalServiceGetCategoriesResponse,
} from './offer-additional-services/index';
export {
  OfferAttachments,
  type OfferAttachment,
  type OfferAttachmentCreateParams,
  type OfferAttachmentUploadParams,
} from './offer-attachments';
export {
  OfferClassifiedsPackages,
  type ClassifiedExtraPackage,
  type ClassifiedPackage,
  type OfferClassifiedsPackageRetrieveResponse,
  type OfferClassifiedsPackageUpdateParams,
} from './offer-classifieds-packages';
export {
  OfferContacts,
  type ContactRequest,
  type ContactResponse,
  type OfferContactListResponse,
  type OfferContactCreateParams,
  type OfferContactUpdateParams,
} from './offer-contacts';
export {
  OfferModificationCommands,
  type ShippingRates,
  type OfferModificationCommandUpdateParams,
  type OfferModificationCommandTasksParams,
} from './offer-modification-commands';
export {
  OfferPriceAutomationCommands,
  type OfferPriceAutomationCommandCreateParams,
  type OfferPriceAutomationCommandTasksParams,
} from './offer-price-automation-commands';
export {
  OfferPriceChangeCommands,
  type OfferPriceChangeCommandUpdateParams,
  type OfferPriceChangeCommandTasksParams,
} from './offer-price-change-commands';
export {
  OfferPublicationCommands,
  type GeneralReport,
  type OfferCriterium,
  type TaskCount,
  type TaskReport,
  type OfferPublicationCommandBatchModifyParams,
  type OfferPublicationCommandGetDetailedReportParams,
} from './offer-publication-commands';
export {
  OfferQuantityChangeCommands,
  type OfferQuantityChangeCommandUpdateParams,
  type OfferQuantityChangeCommandTasksParams,
} from './offer-quantity-change-commands';
export {
  OfferVariants,
  type VariantSet,
  type OfferVariantListResponse,
  type OfferVariantCreateParams,
  type OfferVariantUpdateParams,
  type OfferVariantListParams,
} from './offer-variants';
export {
  Offers,
  type DeliveryMethodID,
  type OfferPromoOption,
  type OfferPromoOptions,
  type OfferPromoOptionsPendingChanges,
  type PromoOptionsModification,
  type SmartDeliveryMethod,
  type OfferListResponse,
  type OfferListUnfilledParametersResponse,
  type OfferRetrieveRatingResponse,
  type OfferRetrieveSmartReportResponse,
  type OfferListParams,
  type OfferListUnfilledParametersParams,
  type OfferModifyPromoOptionsParams,
  type OfferRetrieveSmartReportParams,
} from './offers/index';
export { PriceAutomation } from './price-automation/index';
export {
  ProductOffers,
  type AfterSalesServices,
  type B2b,
  type BuyNowPrice,
  type CompatibilityListManualType,
  type Contact,
  type DeliveryProductOfferRequest,
  type Error,
  type ExternalID,
  type ImpliedWarranty,
  type Location,
  type MarketedBeforeGpsrObligation,
  type MinimalPrice,
  type OfferCategory,
  type OfferID,
  type OfferStatus,
  type ParameterProductOfferRequest,
  type ParameterProductOfferResponse,
  type ProductOfferAdditionalServices,
  type ProductOfferAttachmentItem,
  type ProductOfferFundraisingCampaignRequest,
  type ProductSetElement,
  type ProductSetElementQuantity,
  type ProductSetElementResponsiblePersonRequest,
  type ProductSetElementResponsibleProducerRequestWrapper,
  type ProductSetElementSafetyInformation,
  type ProductSetElementSafetyInformationWrapper,
  type PublicationRequest,
  type ReturnPolicy,
  type SaleProductOffer,
  type SaleProductOfferPublicationRequest,
  type SaleProductOfferRequestBase,
  type SaleProductOfferResponseV1,
  type SaleProductOffersRequestStock,
  type SellingModeFormat,
  type SizeTable,
  type StartingPrice,
  type Warranty,
  type ProductOfferCheckOperationStatusResponse,
  type ProductOfferRetrievePartsResponse,
  type ProductOfferCreateParams,
  type ProductOfferUpdateParams,
  type ProductOfferCheckOperationStatusParams,
  type ProductOfferRetrievePartsParams,
} from './product-offers';
export {
  Products,
  type AICoCreatedContent,
  type ImageURL,
  type ParameterRangeValue,
  type ProductCategoryWithPath,
  type ProductParameterDto,
  type ProductSafety,
  type ProductsCategoryPath,
  type StandardizedDescription,
  type TrustedContent,
  type ProductRetrieveResponse,
  type ProductListResponse,
  type ProductRetrieveParams,
  type ProductListParams,
} from './products/index';
export {
  ResponsiblePersons,
  type ResponsiblePersonAddress,
  type ResponsiblePersonContact,
  type ResponsiblePersonResponse,
  type ResponsiblePersonListResponse,
  type ResponsiblePersonCreateParams,
  type ResponsiblePersonUpdateParams,
  type ResponsiblePersonListParams,
} from './responsible-persons';
export {
  ResponsibleProducers,
  type ResponsibleProducerAddress,
  type ResponsibleProducerContact,
  type ResponsibleProducerResponse,
  type ResponsibleProducerListResponse,
  type ResponsibleProducerCreateParams,
  type ResponsibleProducerRetrieveParams,
  type ResponsibleProducerUpdateParams,
  type ResponsibleProducerListParams,
} from './responsible-producers';
export {
  Sale,
  type AvailablePromotionPackage,
  type Category,
  type CategorySuggestionCategoryNode,
  type ClassifiedDailyEventStat,
  type ClassifiedEventStat,
  type MarketplaceReference,
  type ProductCategory,
  type ProductParameter,
  type SaleGetAllegroPricesAccountEligibilityResponse,
  type SaleGetBadgeCampaignsResponse,
  type SaleGetBadgeOperationDetailsResponse,
  type SaleGetCategoryEventsResponse,
  type SaleGetCategoryParametersScheduledChangesResponse,
  type SaleGetClassifiedOffersStatsResponse,
  type SaleGetClassifiedSellerStatsResponse,
  type SaleGetCompatibilityListSuggestionsResponse,
  type SaleGetDeliveryMethodsResponse,
  type SaleGetMatchingCategoriesResponse,
  type SaleGetOfferEventsResponse,
  type SaleGetOfferPromotionPackagesResponse,
  type SaleGetQualityResponse,
  type SaleGetSizeTablesTemplatesResponse,
  type SaleGetSmartSellerClassificationReportResponse,
  type SaleGetTaxSettingsResponse,
  type SaleProposeProductResponse,
  type SaleUpdateAllegroPricesAccountConsentResponse,
  type SaleUploadImageResponse,
  type SaleGetBadgeCampaignsParams,
  type SaleGetCategoryEventsParams,
  type SaleGetCategoryParametersScheduledChangesParams,
  type SaleGetClassifiedOffersStatsParams,
  type SaleGetClassifiedSellerStatsParams,
  type SaleGetCompatibilityListSuggestionsParams,
  type SaleGetDeliveryMethodsParams,
  type SaleGetMatchingCategoriesParams,
  type SaleGetOfferEventsParams,
  type SaleGetSmartSellerClassificationReportParams,
  type SaleGetTaxSettingsParams,
  type SaleProposeProductParams,
  type SaleUpdateAllegroPricesAccountConsentParams,
  type SaleUploadImageParams,
} from './sale';
export {
  SizeTables,
  type Cells,
  type Header,
  type JustID,
  type PublicTable,
  type SizeTableListResponse,
  type SizeTableCreateParams,
  type SizeTableUpdateParams,
} from './size-tables';
export {
  TurnoverDiscount,
  type TurnoverDiscountDefinitionDto,
  type TurnoverDiscountDto,
  type TurnoverDiscountThresholdDto,
  type TurnoverDiscountListResponse,
  type TurnoverDiscountUpdateParams,
  type TurnoverDiscountListParams,
} from './turnover-discount';
export {
  UserRatings,
  type Answer,
  type Removal,
  type UserRating,
  type UserRatingListResponse,
  type UserRatingRetrieveParams,
  type UserRatingListParams,
  type UserRatingAnswerParams,
  type UserRatingRequestRemovalParams,
} from './user-ratings';
export {
  type ShippingRatesSet,
  type ShippingRateListResponse,
  type ShippingRateCreateParams,
  type ShippingRateUpdateParams,
  type ShippingRateListParams,
} from './shipping-rates';

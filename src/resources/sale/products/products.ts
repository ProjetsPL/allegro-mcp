// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProductsAPI from './products';
import * as OffersAPI from '../../offers';
import * as ProductOffersAPI from '../product-offers';
import * as ResponsibleProducersAPI from '../responsible-producers';
import * as ChangeProposalsAPI from './change-proposals';
import {
  ChangeProposalCreateParams,
  ChangeProposalRetrieveParams,
  ChangeProposals,
  ProductChangeProposal,
} from './change-proposals';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Products extends APIResource {
  changeProposals: ChangeProposalsAPI.ChangeProposals = new ChangeProposalsAPI.ChangeProposals(this._client);

  /**
   * Use this resource to retrieve all data of the particular product. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-pobrac-pelne-dane-o-produkcie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-retrieve-product-data" target="_blank">EN</a>.
   * This resource is limited with
   * <a href="../../tutorials/basic-information-VL6YelvVKTn#limiting-the-number-of-queries-limits" target="_blank">Leaky
   * Bucket</a> mechanism.
   *
   * @example
   * ```ts
   * const product = await client.sale.products.retrieve(
   *   'productId',
   * );
   * ```
   */
  retrieve(
    productID: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/sale/products/${productID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of products according to provided parameters. At
   * least ean or phrase parameter is required. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-znalezc-produkt" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-find-a-product" target="_blank">EN</a>.
   * This resource is limited with Leaky Bucket mechanism, read more
   * <a href="../../tutorials/informacje-podstawowe-b21569boAI1#ograniczenie-liczby-zapytan-limity" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/basic-information-VL6YelvVKTn#limiting-the-number-of-queries-limits" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const products = await client.sale.products.list();
   * ```
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/sale/products', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Each path will point to a specific field in object which is co-created by AI.
 */
export interface AICoCreatedContent {
  paths: Array<string>;
}

/**
 * Image url
 */
export interface ImageURL {
  url?: string;
}

/**
 * Parameter's range value
 */
export interface ParameterRangeValue {
  from: string;

  to: string;
}

/**
 * Category in which the product can be listed for sale
 */
export interface ProductCategoryWithPath {
  /**
   * Category identifier.
   */
  id?: string;

  path?: Array<ProductsCategoryPath>;

  /**
   * A list of similar categories in which you can sell this product.
   */
  similar?: Array<ProductCategoryWithPath.Similar>;
}

export namespace ProductCategoryWithPath {
  /**
   * Category in which the product can be listed for sale
   */
  export interface Similar {
    /**
     * Category identifier.
     */
    id?: string;

    path?: Array<ProductsAPI.ProductsCategoryPath>;
  }
}

/**
 * Product's parameter
 */
export interface ProductParameterDto {
  id: string;

  name?: string;

  options?: ProductParameterDto.Options;

  /**
   * Parameter's range value
   */
  rangeValue?: ParameterRangeValue;

  unit?: string;

  values?: Array<string>;

  valuesIds?: Array<string>;

  valuesLabels?: Array<string>;
}

export namespace ProductParameterDto {
  export interface Options {
    identifiesProduct: boolean;

    isGTIN?: boolean;

    /**
     * Parameter values originate directly from the manufacturer, its representative,
     * or a trusted source.
     */
    isTrusted?: boolean;
  }
}

/**
 * Suggested product safety data in accordance with GPSR. **Note:** Allegro does
 * not assume responsibility for the accuracy of this data. It is the merchant's
 * responsibility to verify its applicability to their product.
 */
export interface ProductSafety {
  marketedBeforeGPSRObligation?: boolean | null;

  responsibleProducers?: Array<ResponsibleProducersAPI.ResponsibleProducerResponse> | null;

  /**
   * Contains information about product's safety. Reference
   * <a href="https://developer.allegro.pl/documentation#operation/createOfferAttachmentUsingPOST">Docs</a>
   */
  safetyInformation?: ProductOffersAPI.ProductSetElementSafetyInformation | null;
}

export interface ProductsCategoryPath {
  /**
   * Category id.
   */
  id?: string;

  /**
   * Category name.
   */
  name?: string;
}

/**
 * The description section cannot have more than 40000 bytes in length.
 */
export interface StandardizedDescription {
  sections?: Array<StandardizedDescription.Section>;
}

export namespace StandardizedDescription {
  export interface Section {
    items?: Array<Section.Item>;
  }

  export namespace Section {
    /**
     * One of: TextItem, ImageItem
     */
    export interface Item {
      type: string;
    }
  }
}

/**
 * Each path will point to a specific field in the product object, indicating that
 * given product part data originates directly from the manufacturer, its
 * representative, or a trusted source.
 */
export interface TrustedContent {
  paths: Array<string>;
}

export interface ProductRetrieveResponse {
  /**
   * Product id.
   */
  id: string;

  /**
   * Category in which the product can be listed for sale
   */
  category: ProductCategoryWithPath;

  /**
   * Product name.
   */
  name: string;

  /**
   * Each path will point to a specific field in object which is co-created by AI.
   */
  aiCoCreatedContent?: AICoCreatedContent;

  /**
   * Compatibility list assigned to this product, based on information from TecDoc
   * database.
   */
  compatibilityList?: ProductRetrieveResponse.CompatibilityList;

  /**
   * The description section cannot have more than 40000 bytes in length.
   */
  description?: StandardizedDescription;

  /**
   * Flag that informs if product is a part of a protected brand's assortment and its
   * use may be restricted.
   */
  hasProtectedBrand?: boolean;

  /**
   * List of product images.
   */
  images?: Array<ImageURL>;

  /**
   * Flag that informs if product is waiting for resolution of basic parameters
   * change proposal.
   */
  isDraft?: boolean;

  /**
   * Conditions which an offer must meet to be assigned with the product, i.e.
   * Condition parameter must be set to New.
   */
  offerRequirements?: ProductRetrieveResponse.OfferRequirements;

  /**
   * List of product parameters.
   */
  parameters?: Array<ProductParameterDto>;

  /**
   * Suggested product safety data in accordance with GPSR. **Note:** Allegro does
   * not assume responsibility for the accuracy of this data. It is the merchant's
   * responsibility to verify its applicability to their product.
   */
  productSafety?: ProductSafety | null;

  publication?: ProductRetrieveResponse.Publication;

  /**
   * Contains additional information describing products from automotive categories.
   * Technical specification is created based on TecDoc database and can only be used
   * while creating offer with assigned product to it.
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA" target="_blank">Read
   * more</a>.
   */
  tecdocSpecification?: ProductRetrieveResponse.TecdocSpecification;

  /**
   * Each path will point to a specific field in the product object, indicating that
   * given product part data originates directly from the manufacturer, its
   * representative, or a trusted source.
   */
  trustedContent?: TrustedContent;
}

export namespace ProductRetrieveResponse {
  /**
   * Compatibility list assigned to this product, based on information from TecDoc
   * database.
   */
  export interface CompatibilityList {
    /**
     * Id of product-based compatibility list.
     */
    id: string;

    /**
     * Type of compatibility list.
     */
    type: string;

    /**
     * List of the compatible items.
     */
    items?: Array<CompatibilityList.Item>;
  }

  export namespace CompatibilityList {
    export interface Item {
      /**
       * Text description of the compatible item.
       */
      text?: string;
    }
  }

  /**
   * Conditions which an offer must meet to be assigned with the product, i.e.
   * Condition parameter must be set to New.
   */
  export interface OfferRequirements {
    /**
     * The id of the offer that can be associated with this product.
     */
    id?: string;

    parameters?: Array<ProductsAPI.ProductParameterDto>;
  }

  export interface Publication {
    /**
     * The publication status of the product:
     *
     * - `PROPOSED` - product is proposed and can be during the review process
     * - `LISTED` - product is created and reviewed
     */
    status?: 'PROPOSED' | 'LISTED';
  }

  /**
   * Contains additional information describing products from automotive categories.
   * Technical specification is created based on TecDoc database and can only be used
   * while creating offer with assigned product to it.
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA" target="_blank">Read
   * more</a>.
   */
  export interface TecdocSpecification {
    /**
     * Identifier of technical specification.
     */
    id: string;

    /**
     * Text representation of the technical specification. Provided for informational
     * purposes only - ignored when creating (Post) or updating (Put) compatibility
     * list in the offer.
     */
    items?: Array<TecdocSpecification.Item>;
  }

  export namespace TecdocSpecification {
    export interface Item {
      /**
       * Technical specification property name.
       */
      name?: string;

      /**
       * Technical specification property values.
       */
      values?: Array<string>;
    }
  }
}

export interface ProductListResponse {
  products: Array<ProductListResponse.Product>;

  categories?: ProductListResponse.Categories;

  filters?: Array<OffersAPI.ListingResponseFilters>;

  nextPage?: ProductListResponse.NextPage;
}

export namespace ProductListResponse {
  export interface Product {
    id: string;

    /**
     * Category in which the product can be listed for sale
     */
    category: ProductsAPI.ProductCategoryWithPath;

    /**
     * Name of the product.
     */
    name: string;

    /**
     * Each path will point to a specific field in object which is co-created by AI.
     */
    aiCoCreatedContent?: ProductsAPI.AICoCreatedContent;

    /**
     * The description section cannot have more than 40000 bytes in length.
     */
    description?: ProductsAPI.StandardizedDescription;

    /**
     * Flag that informs if product is a part of a protected brand's assortment and its
     * use may be restricted.
     */
    hasProtectedBrand?: boolean;

    images?: Array<ProductsAPI.ImageURL>;

    /**
     * Flag that informs if product is waiting for resolution of basic parameters
     * change proposal.
     */
    isDraft?: boolean;

    parameters?: Array<ProductsAPI.ProductParameterDto>;

    /**
     * Suggested product safety data in accordance with GPSR. **Note:** Allegro does
     * not assume responsibility for the accuracy of this data. It is the merchant's
     * responsibility to verify its applicability to their product.
     */
    productSafety?: ProductsAPI.ProductSafety | null;

    publication?: Product.Publication;

    /**
     * Each path will point to a specific field in the product object, indicating that
     * given product part data originates directly from the manufacturer, its
     * representative, or a trusted source.
     */
    trustedContent?: ProductsAPI.TrustedContent;
  }

  export namespace Product {
    export interface Publication {
      /**
       * The publication status of the product:
       *
       * - `PROPOSED` - product is proposed and can be during the review process
       * - `LISTED` - product is created and reviewed
       */
      status?: 'PROPOSED' | 'LISTED';
    }
  }

  export interface Categories {
    /**
     * The path of current category used as categrory filter in search.
     */
    path?: Array<ProductsAPI.ProductsCategoryPath>;

    /**
     * A list of categories that contain results for given search parameters.
     */
    subcategories?: Array<Categories.Subcategory>;
  }

  export namespace Categories {
    export interface Subcategory {
      /**
       * Category id.
       */
      id?: string;

      /**
       * Total number of products matching query criteria in this category.
       */
      count?: number;

      /**
       * Category name.
       */
      name?: string;
    }
  }

  export interface NextPage {
    /**
     * A "cursor" to the next set of results.
     */
    id?: string;
  }
}

export interface ProductRetrieveParams {
  category?: ProductRetrieveParams.Category;

  /**
   * Return also if product is in draft state.
   */
  includeDrafts?: boolean;

  /**
   * The language version of product. You can indicate the language for the returned
   * product data.
   */
  language?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export namespace ProductRetrieveParams {
  export interface Category {
    /**
     * The similar category identifier. You can choose a category from 'similar
     * categories' to filter the list of parameters available in the category context.
     */
    id?: string;
  }
}

export interface ProductListParams {
  category?: ProductListParams.Category;

  /**
   * You can filter and customize your search results to find exactly what you need
   * by applying filters ids and their dictionary values to query according to the
   * flowing pattern: id=value. When the filter definition looks like:
   *
   * ```
   * {
   *   "id": "127448",
   *   "name": "Kolor",
   *   "type": "SINGLE",
   *   "values": [
   *     {
   *       "name": "biały",
   *       "value": "127448_2"
   *     },
   *     {
   *       "name": "czarny",
   *       "value": "127448_1"
   *     }
   *   ]
   * }
   * ```
   *
   * You can use 'Kolor' filter to query results, i.e.:
   *
   * - `127448=127448_2` for "biały"
   * - `127448=127448_1` for "czarny".
   */
  'Dynamic filters'?: Record<string, string>;

  /**
   * The EAN values can include EAN, ISBN, and UPC identifier types. Parameter is
   * depracated and will be removed in the future. Please use combination of phrase
   * and mode (`GTIN`) parameters instead.
   */
  ean?: string;

  /**
   * Include products in draft state.
   */
  includeDrafts?: boolean;

  /**
   * Language indicates the language for searching products. Allows to specify the
   * language of the given phrase.
   */
  language?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';

  /**
   * Search mode. If not specified, we are searching by GTIN, MPN, product's name,
   * parameters, etc.
   *
   * - `GTIN` - restricts the search filtering to GTINs (Global Trade Item Number),
   *   e.g. EAN, ISBN, UPC.
   * - `MPN` - restricts the search filtering to MPNs (Manufacturer Part Number).
   */
  mode?: 'GTIN' | 'MPN';

  page?: ProductListParams.Page;

  /**
   * Search phrase.
   */
  phrase?: string;

  /**
   * Enables additional search options: - _SIMILAR_CATEGORIES_ - searching in the
   * indicated category (category.id) and in 'similar categories' (works only if
   * category.id is a leaf category).
   */
  searchFeatures?: 'SIMILAR_CATEGORIES';
}

export namespace ProductListParams {
  export interface Category {
    /**
     * The category identifier to filter results. This can only be used when searching
     * by phrase.
     */
    id?: string;
  }

  export interface Page {
    /**
     * A "cursor" to the next set of results.
     */
    id?: string;
  }
}

Products.ChangeProposals = ChangeProposals;

export declare namespace Products {
  export {
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
    ChangeProposals as ChangeProposals,
    type ProductChangeProposal as ProductChangeProposal,
    type ChangeProposalCreateParams as ChangeProposalCreateParams,
    type ChangeProposalRetrieveParams as ChangeProposalRetrieveParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Use this resource to get the details of a specific category. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-utworzyc-nowy-produkt" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-create-a-product" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const categoryData = await client.sale.categories.retrieve(
   *   '6061',
   * );
   * ```
   */
  retrieve(categoryID: string, options?: RequestOptions): APIPromise<CategoryData> {
    return this._client.get(path`/sale/categories/${categoryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to traverse the Allegro categories tree. It returns the list
   * of the given category's children or a list of the main Allegro categories. Read
   * more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#uzupelnij-kategorie-i-parametry" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#provide-category-and-parameters" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const categories = await client.sale.categories.list();
   * ```
   */
  list(
    query: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    return this._client.get('/sale/categories', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get the list of parameters that are supported by the given
   * category. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#parametry-ofertowe" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-parameters" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.categories.retrieveParameters('709');
   * ```
   */
  retrieveParameters(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveParametersResponse> {
    return this._client.get(path`/sale/categories/${categoryID}/parameters`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get the list of product parameters available in given
   * category. You can use these parameters to create a new product. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#jak-utworzyc-nowy-produkt" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#how-to-create-a-product" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.categories.retrieveProductParameters(
   *     '709',
   *   );
   * ```
   */
  retrieveProductParameters(
    categoryID: string,
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveProductParametersResponse> {
    return this._client.get(path`/sale/categories/${categoryID}/product-parameters`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * The category data.
 */
export interface CategoryData {
  /**
   * The ID of the category. This can be either in UUID format or an integer format.
   * You should be ready to accept any string value as the category ID.
   */
  id?: string;

  /**
   * Indicates whether the category is at the lowest level. Leaf categories do not
   * have any children. Offers can be listed only in leaf categories.
   */
  leaf?: boolean;

  /**
   * Name of the category in Polish.
   */
  name?: string;

  /**
   * A list of the different options which can be used with this category.
   */
  options?: CategoryData.Options;

  /**
   * The parent category data.
   */
  parent?: CategoryData.Parent;
}

export namespace CategoryData {
  /**
   * A list of the different options which can be used with this category.
   */
  export interface Options {
    /**
     * Indicates whether offers of type ADVERTISEMENT can be listed in this category.
     */
    advertisement?: boolean;

    /**
     * Indicates whether advertisements listed in this category must have a price
     * given. If the value is `true` then you don't have to provide a price when
     * listing an advertisement in this category.
     */
    advertisementPriceOptional?: boolean;

    /**
     * Indicates whether custom parameters can be added to offers in this category.
     */
    customParametersEnabled?: boolean;

    /**
     * Information whether the category supports assigning offers to a product.
     */
    offersWithProductPublicationEnabled?: boolean;

    /**
     * Indicates whether the category supports creating products.
     */
    productCreationEnabled?: boolean;

    /**
     * Indicates whether the category supports message to seller in `REQUIRED` mode.
     */
    sellerCanRequirePurchaseComments?: boolean;

    /**
     * Indicates whether you can combine offers from this category into variant sets
     * based on the color and pattern.
     */
    variantsByColorPatternAllowed?: boolean;
  }

  /**
   * The parent category data.
   */
  export interface Parent {
    /**
     * The ID of the parent category.
     */
    id?: string;
  }
}

/**
 * Restricts the circumstances when this parameter should be displayed e.g. on a
 * user form. `null` if this parameter is displayed always. Present if this
 * parameter should be displayed only if all of the contained conditions of all
 * condition types are fulfilled. At least one condition is contained if this field
 * is present.
 */
export interface CategoryParameterDisplayConditions {
  /**
   * Condition type which displays this parameter only if each of the given other
   * parameters has filled in one of the respective given value ids in an offer or
   * product. Empty if no condition of this type is present.
   */
  parametersWithValue: Array<CategoryParameterWithValue>;
}

/**
 * Restricts the circumstances when this parameter is required. `null` if solely
 * the `required` flag determines if this parameter is required. Present if this
 * parameter is required only if all of the contained conditions of all condition
 * types are fulfilled. At least one condition is contained if this field is
 * present.
 */
export interface CategoryParameterRequirementConditions {
  /**
   * Condition type which requires this parameter only if each of the given other
   * parameters has filled neither a value nor a value id in an offer or product.
   * Empty if no condition of this type is present.
   */
  parametersWithoutValue: Array<CategoryParameterRequirementConditions.ParametersWithoutValue>;

  /**
   * Condition type which requires this parameter only if each of the given other
   * parameters has filled in one of the respective given value ids in an offer or
   * product. Empty if no condition of this type is present.
   */
  parametersWithValue: Array<CategoryParameterWithValue>;
}

export namespace CategoryParameterRequirementConditions {
  export interface ParametersWithoutValue {
    /**
     * Id of another parameter.
     */
    id: string;
  }
}

export interface CategoryParameterWithValue {
  /**
   * Id of another parameter with a value dictionary.
   */
  id: string;

  /**
   * A list of value ids. One of them must be chosen in order to fulfill this
   * condition. Not empty.
   */
  oneOfValueIds: Array<string>;
}

/**
 * The list of categories.
 */
export interface CategoryListResponse {
  categories?: Array<CategoryData>;
}

export interface CategoryRetrieveParametersResponse {
  /**
   * The list of parameters supported by the category.
   */
  parameters?: Array<CategoryRetrieveParametersResponse.Parameter>;
}

export namespace CategoryRetrieveParametersResponse {
  export interface Parameter {
    /**
     * The type of the parameter. Other fields in this structure may appear based on
     * the type of the parameter.
     */
    type: string;

    /**
     * The ID of the parameter.
     */
    id?: string;

    /**
     * Restricts the circumstances when this parameter should be displayed e.g. on a
     * user form. `null` if this parameter is displayed always. Present if this
     * parameter should be displayed only if all of the contained conditions of all
     * condition types are fulfilled. At least one condition is contained if this field
     * is present.
     */
    displayedIf?: CategoriesAPI.CategoryParameterDisplayConditions;

    /**
     * The name of the parameter in Polish.
     */
    name?: string;

    /**
     * A list of the different options which can be used with this parameter.
     */
    options?: Parameter.Options;

    /**
     * Indicates whether the value of this parameter must be set in an offer. Offers
     * without required parameters set cannot be published. See also `requiredIf`.
     */
    required?: boolean;

    /**
     * Indicates whether the value of this parameter must be set in a product. Product
     * without required parameters set cannot be created.
     */
    requiredForProduct?: boolean;

    /**
     * Restricts the circumstances when this parameter is required. `null` if solely
     * the `required` flag determines if this parameter is required. Present if this
     * parameter is required only if all of the contained conditions of all condition
     * types are fulfilled. At least one condition is contained if this field is
     * present.
     */
    requiredIf?: CategoriesAPI.CategoryParameterRequirementConditions;

    /**
     * The unit in which values of the parameter are used. May be `null`.
     */
    unit?: string | null;
  }

  export namespace Parameter {
    /**
     * A list of the different options which can be used with this parameter.
     */
    export interface Options {
      /**
       * Indicates what value in the dictionary is defined as an ambiguous one. Only
       * parameters with dictionaries might have this option defined.
       */
      ambiguousValueId?: string | null;

      /**
       * Indicates if a custom value can be added to a parameter with an ambiguous value.
       */
      customValuesEnabled?: boolean;

      /**
       * Indicates whether this parameter's allowed values depend on another parameter's
       * values. This field is set only for dictionary parameters which have at least one
       * dictionary value with dependent values (see also
       * `dictionary[].dependsOnValueIds`). Otherwise this field is null.
       */
      dependsOnParameterId?: string | null;

      /**
       * Indicates if parameter is used to define products.
       */
      describesProduct?: boolean;

      /**
       * Parameters with this option enabled can be used for offer variants creation.
       */
      variantsAllowed?: boolean;

      /**
       * All offer variants must have the same values in parameters with this option
       * enabled.
       */
      variantsEqual?: boolean;
    }
  }
}

export interface CategoryRetrieveProductParametersResponse {
  /**
   * The list of product parameters supported by the category.
   */
  parameters?: Array<CategoryRetrieveProductParametersResponse.Parameter>;
}

export namespace CategoryRetrieveProductParametersResponse {
  export interface Parameter {
    /**
     * The type of the product parameter. Other fields in this structure may appear
     * based on the type of the parameter.
     */
    type: string;

    /**
     * The ID of the parameter.
     */
    id?: string;

    /**
     * Restricts the circumstances when this parameter should be displayed e.g. on a
     * user form. `null` if this parameter is displayed always. Present if this
     * parameter should be displayed only if all of the contained conditions of all
     * condition types are fulfilled. At least one condition is contained if this field
     * is present.
     */
    displayedIf?: CategoriesAPI.CategoryParameterDisplayConditions;

    /**
     * The name of the parameter in Polish.
     */
    name?: string;

    /**
     * Indicates whether the value of this parameter must be set in a product. Product
     * without required parameters set cannot be created. See also `requiredIf`.
     */
    required?: boolean;

    /**
     * Restricts the circumstances when this parameter is required. `null` if solely
     * the `required` flag determines if this parameter is required. Present if this
     * parameter is required only if all of the contained conditions of all condition
     * types are fulfilled. At least one condition is contained if this field is
     * present.
     */
    requiredIf?: CategoriesAPI.CategoryParameterRequirementConditions;

    /**
     * The unit in which values of the parameter are used. May be `null`.
     */
    unit?: string | null;
  }
}

export interface CategoryListParams {
  parent?: CategoryListParams.Parent;
}

export namespace CategoryListParams {
  export interface Parent {
    /**
     * The ID of the category which children should be returned. If omitted, the list
     * of main Allegro categories will be returned.
     */
    id?: string;
  }
}

export declare namespace Categories {
  export {
    type CategoryData as CategoryData,
    type CategoryParameterDisplayConditions as CategoryParameterDisplayConditions,
    type CategoryParameterRequirementConditions as CategoryParameterRequirementConditions,
    type CategoryParameterWithValue as CategoryParameterWithValue,
    type CategoryListResponse as CategoryListResponse,
    type CategoryRetrieveParametersResponse as CategoryRetrieveParametersResponse,
    type CategoryRetrieveProductParametersResponse as CategoryRetrieveProductParametersResponse,
    type CategoryListParams as CategoryListParams,
  };
}

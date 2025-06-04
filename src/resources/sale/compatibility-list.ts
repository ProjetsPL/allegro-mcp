// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class CompatibilityList extends APIResource {
  /**
   * Compatibility list is available in particular categories, this resource allows
   * to get the list of these categories with additional details. Read more:
   * <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-sprawdzic-czy-w-danej-kategorii-moge-dodac-sekcje-pasuje-do-do-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#which-categories-support-compatibility-section" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const compatibilityLists =
   *   await client.sale.compatibilityList.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CompatibilityListListResponse> {
    return this._client.get('/sale/compatibility-list/supported-categories', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface CompatibilityListListResponse {
  /**
   * List with information about categories where compatibility list is supported.
   * <a href=" https://developer.allegro.pl/compatibility_list/" target="_blank">Read
   * more</a>.
   */
  supportedCategories?: Array<CompatibilityListListResponse.SupportedCategory>;
}

export namespace CompatibilityListListResponse {
  export interface SupportedCategory {
    /**
     * Identifier of the category, where you can use the compatibility list in an offer
     * listed in the category or in all subcategories, which belongs to returned
     * category.
     */
    categoryId?: string;

    /**
     * Type of the representation of compatible item. <ul> <li>`TEXT` - item on
     * compatibility list has to be provided as plain text.</li> <li>`ID` - item on
     * compatibility list has to be provided as identifier of compatible product. To
     * obtain it please use
     * <a href="/documentation/#tag/Compatibility-List/paths/~1sale~1compatible-products/get">compatible-products</a>
     * resource together with `itemsType` supported in particular category. </li> </ul>
     */
    inputType?: 'TEXT' | 'ID';

    /**
     * Type of the compatible item.
     */
    itemsType?: string;

    /**
     * Name of supported category.
     */
    name?: string;

    /**
     * Additional information about constraints assigned to the category.
     */
    validationRules?: SupportedCategory.ValidationRules;
  }

  export namespace SupportedCategory {
    /**
     * Additional information about constraints assigned to the category.
     */
    export interface ValidationRules {
      /**
       * Maximum length of single item on the list.
       */
      maxCharactersPerLine?: number;

      /**
       * Maximum number of items allowed on compatibility list.
       */
      maxRows?: number;
    }
  }
}

export declare namespace CompatibilityList {
  export { type CompatibilityListListResponse as CompatibilityListListResponse };
}

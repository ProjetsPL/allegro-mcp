// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class CompatibleProducts extends APIResource {
  /**
   * Resource allows to fetch compatible products of given type. Read more:
   * <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-zarzadzac-sekcja-pasuje-do-zintegrowana-z-baza-pojazdow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#managing-the-compatibility-section-compatibilitylist-integrated-vehicle-database" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const compatibleProducts =
   *   await client.sale.compatibleProducts.list({
   *     type: 'CAR',
   *   });
   * ```
   */
  list(
    params: CompatibleProductListParams,
    options?: RequestOptions,
  ): APIPromise<CompatibleProductListResponse> {
    const { 'If-Modified-Since': ifModifiedSince, ...query } = params;
    return this._client.get('/sale/compatible-products', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Compatible products are organized in groups, this resource allows to browse
   * these groups. Read more:
   * <a href="../../tutorials/jak-zarzadzac-sekcja-pasuje-do-E7Zj6gAEGil#jak-zarzadzac-sekcja-pasuje-do-zintegrowana-z-baza-pojazdow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-compatibility-section-v8WbL1wV0Hz#managing-the-compatibility-section-compatibilitylist-integrated-vehicle-database" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.compatibleProducts.listGroups({
   *     type: 'CAR',
   *   });
   * ```
   */
  listGroups(
    params: CompatibleProductListGroupsParams,
    options?: RequestOptions,
  ): APIPromise<CompatibleProductListGroupsResponse> {
    const { 'If-Modified-Since': ifModifiedSince, ...query } = params;
    return this._client.get('/sale/compatible-products/groups', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(ifModifiedSince != null ? { 'If-Modified-Since': ifModifiedSince } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface CompatibleProductListResponse {
  /**
   * List of compatible products for given type and parameters.
   */
  compatibleProducts?: Array<CompatibleProductListResponse.CompatibleProduct>;

  /**
   * Number of returned elements.
   */
  count?: number;

  /**
   * Total number of available elements. Field is not present when `phrase` parameter
   * is used.
   */
  totalCount?: number;
}

export namespace CompatibleProductListResponse {
  export interface CompatibleProduct {
    /**
     * Identifier of the compatible product.
     */
    id?: string;

    /**
     * List of compatible products attributes.
     */
    attributes?: Array<CompatibleProduct.Attribute>;

    /**
     * Group to which compatible product is assigned to.
     */
    group?: CompatibleProduct.Group;

    /**
     * Textual representation of the compatible product.
     */
    text?: string;
  }

  export namespace CompatibleProduct {
    export interface Attribute {
      /**
       * Identifier of an attribute
       */
      id?: string;

      /**
       * List of attribute's values.
       */
      values?: Array<string>;
    }

    /**
     * Group to which compatible product is assigned to.
     */
    export interface Group {
      /**
       * Identifier of the group.
       */
      id?: string;
    }
  }
}

export interface CompatibleProductListGroupsResponse {
  /**
   * Number of returned elements.
   */
  count?: number;

  /**
   * List of groups for given type of compatible products.
   */
  groups?: Array<CompatibleProductListGroupsResponse.Group>;

  /**
   * Total number of available elements.
   */
  totalCount?: number;
}

export namespace CompatibleProductListGroupsResponse {
  export interface Group {
    /**
     * Identifier of the group.
     */
    id?: string;

    /**
     * Name of the group.
     */
    text?: string;
  }
}

export interface CompatibleProductListParams {
  /**
   * Query param: Type of compatible products. You can find available types in the
   * response for the GET
   * <a href="/documentation/#tag/Compatibility-List/paths/~1sale~1compatibility-list~1supported-categories/get">supported-categories</a>
   * resource. You can use value provided in `itemsType`, for categories where
   * `inputType=ID`.
   */
  type: string;

  /**
   * Query param:
   */
  group?: CompatibleProductListParams.Group;

  /**
   * Query param: The limit of returned items. If `phrase` parameter is present,
   * parameter is ignored and maximum value is set to `200`.
   */
  limit?: number;

  /**
   * Query param: The offset of returned items. If `phrase` parameter is present,
   * parameter is ignored.
   */
  offset?: number;

  /**
   * Query param: Query for compatible products. When used, parameters: `group.id`,
   * `limit`, `offset` and header `If-Modified-Since` are ignored.
   */
  phrase?: string;

  /**
   * Query param:
   */
  tecdoc?: CompatibleProductListParams.Tecdoc;

  /**
   * Header param: Date of last data modification. If data has been modified after
   * specified date, full set of data is returned. If header is not specified, full
   * set of data is returned. Date has to be provided in HTTP-date format. Header is
   * ignored if `phrase` parameter is used.
   */
  'If-Modified-Since'?: string;
}

export namespace CompatibleProductListParams {
  export interface Group {
    /**
     * Group identifier from `/sale/compatible-products/groups` resource. Parameter is
     * required when parameter `tecdoc.kTypNr` or `tecdoc.nTypNr` or `phrase` is not
     * specified.
     */
    id?: string;
  }

  export interface Tecdoc {
    /**
     * Identifier of passenger vehicle (kTypNr) from TecDoc database. When used,
     * `group.id` parameter is ignored.
     */
    kTypNr?: string;

    /**
     * Identifier of commercial vehicle (nTypNr) from TecDoc database. When used,
     * `group.id` parameter is ignored.
     */
    nTypNr?: string;
  }
}

export interface CompatibleProductListGroupsParams {
  /**
   * Query param: Type of compatible products. You can find available types in the
   * response for the GET
   * <a href="/documentation/#tag/Compatibility-List/paths/~1sale~1compatibility-list~1supported-categories/get">supported-categories</a>
   * resource. You can use value provided in `itemsType`, for categories where
   * `inputType=ID`.
   */
  type: string;

  /**
   * Query param: The limit of returned items.
   */
  limit?: number;

  /**
   * Query param: The offset of returned items.
   */
  offset?: number;

  /**
   * Header param: Date of last data modification. If data has been modified after
   * specified date, full set of data is returned. If header is not specified, full
   * set of data is returned. Date has to be provided in HTTP-date format.
   */
  'If-Modified-Since'?: string;
}

export declare namespace CompatibleProducts {
  export {
    type CompatibleProductListResponse as CompatibleProductListResponse,
    type CompatibleProductListGroupsResponse as CompatibleProductListGroupsResponse,
    type CompatibleProductListParams as CompatibleProductListParams,
    type CompatibleProductListGroupsParams as CompatibleProductListGroupsParams,
  };
}

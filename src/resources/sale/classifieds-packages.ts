// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ClassifiedsPackages extends APIResource {
  /**
   * Use this resource to retrieve the configuration of a classifieds package. Read
   * more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#lista-pakietow-i-opcji-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#list-of-promo-options" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const classifiedPackageConfig =
   *   await client.sale.classifiedsPackages.retrieve(
   *     'packageId',
   *   );
   * ```
   */
  retrieve(packageID: string, options?: RequestOptions): APIPromise<ClassifiedPackageConfig> {
    return this._client.get(path`/sale/classifieds-packages/${packageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to retrieve configurations of classifieds packages for a
   * category. Read more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#lista-pakietow-i-opcji-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#list-of-promo-options" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const classifiedsPackages =
   *   await client.sale.classifiedsPackages.list();
   * ```
   */
  list(
    query: ClassifiedsPackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClassifiedsPackageListResponse> {
    return this._client.get('/sale/classifieds-packages', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface ClassifiedPackageConfig {
  /**
   * The classifieds package ID.
   */
  id: string;

  /**
   * The classifieds package name.
   */
  name: string;

  type: 'BASE' | 'EXTRA';

  extensions?: Array<ClassifiedPackageConfig.Extension>;

  /**
   * A list of additional promotions included in the package.
   */
  promotions?: Array<ClassifiedPackageConfig.Promotion>;

  publication?: ClassifiedPackageConfig.Publication;
}

export namespace ClassifiedPackageConfig {
  export interface Extension {
    /**
     * The classified extension description.
     */
    description?: string;

    /**
     * The classified extension name.
     */
    name?: string;
  }

  export interface Promotion {
    /**
     * Duration in ISO 8601 format.
     */
    duration: string;

    /**
     * Name of the promotion.
     */
    name: string;
  }

  export interface Publication {
    /**
     * Duration in ISO 8601 format.
     */
    duration: string;
  }
}

export interface ClassifiedsPackageListResponse {
  packages: Array<ClassifiedPackageConfig>;
}

export interface ClassifiedsPackageListParams {
  category?: ClassifiedsPackageListParams.Category;
}

export namespace ClassifiedsPackageListParams {
  export interface Category {
    /**
     * The category ID.
     */
    id: string;
  }
}

export declare namespace ClassifiedsPackages {
  export {
    type ClassifiedPackageConfig as ClassifiedPackageConfig,
    type ClassifiedsPackageListResponse as ClassifiedsPackageListResponse,
    type ClassifiedsPackageListParams as ClassifiedsPackageListParams,
  };
}

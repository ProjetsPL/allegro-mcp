// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ShippingRates extends APIResource {
  /**
   * Use this resource to create a new seller's shipping rates set. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-cennik-dostaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-add-shipping-rates" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const shippingRatesSet =
   *   await client.sale.shippingRates.create({
   *     rates: [
   *       {
   *         deliveryMethod: {},
   *         firstItemRate: {},
   *         maxQuantityPerPackage: 1,
   *         nextItemRate: {},
   *       },
   *     ],
   *   });
   * ```
   */
  create(body: ShippingRateCreateParams, options?: RequestOptions): APIPromise<ShippingRatesSet> {
    return this._client.post('/sale/shipping-rates', {
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
   * Use this resource to get details of the given shipping rates set. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-cennik-dostaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-shipping-rates" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const shippingRatesSet =
   *   await client.sale.shippingRates.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ShippingRatesSet> {
    return this._client.get(path`/sale/shipping-rates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to edit a new seller's shipping rates set. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-edytowac-cennik-dostaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-modify-shipping-rates" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const shippingRatesSet =
   *   await client.sale.shippingRates.update('id', {
   *     rates: [
   *       {
   *         deliveryMethod: {},
   *         firstItemRate: {},
   *         maxQuantityPerPackage: 1,
   *         nextItemRate: {},
   *       },
   *     ],
   *   });
   * ```
   */
  update(
    pathID: string,
    body: ShippingRateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ShippingRatesSet> {
    return this._client.put(path`/sale/shipping-rates/${pathID}`, {
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
   * Use this resource to get a list of seller's shipping rates. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-cennik-dostaw" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-shipping-rates" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const shippingRates =
   *   await client.sale.shippingRates.list();
   * ```
   */
  list(
    query: ShippingRateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ShippingRateListResponse> {
    return this._client.get('/sale/shipping-rates', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface ShippingRatesSet {
  rates: Array<ShippingRatesSet.Rate>;

  /**
   * Shipping rates set ID (UUID) When creating a shipping rates set (Post) the field
   * is ignored. It is required when updating (Put) a shipping rates.
   */
  id?: string;

  /**
   * Date and time of the last modification of the set in UTC ISO 8601 format. When
   * creating (Post) or updating (Put) a shipping rates set the field is ignored.
   */
  lastModified?: string;

  /**
   * User defined name of the shipping rates set. It may only contain: letters,
   * numbers, hyphens, dots, commas and spaces.
   */
  name?: string;
}

export namespace ShippingRatesSet {
  export interface Rate {
    deliveryMethod: Rate.DeliveryMethod;

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    firstItemRate: Rate.FirstItemRate;

    /**
     * Maximum quantity per package for the given delivery method. Minimum value is 1.
     */
    maxQuantityPerPackage: number;

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    nextItemRate: Rate.NextItemRate;

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    maxPackageWeight?: Rate.MaxPackageWeight;

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    shippingTime?: Rate.ShippingTime;
  }

  export namespace Rate {
    export interface DeliveryMethod {
      /**
       * ID of the delivery method
       */
      id?: string;
    }

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    export interface FirstItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    export interface NextItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    export interface MaxPackageWeight {
      /**
       * Weight unit. Currently only `KILOGRAM` is supported.
       */
      unit?: string | null;

      /**
       * Weight value with an accuracy of three decimal places.
       */
      value?: string;
    }

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    export interface ShippingTime {
      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      from?: string;

      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      to?: string;
    }
  }
}

export interface ShippingRateListResponse {
  shippingRates?: Array<ShippingRateListResponse.ShippingRate>;
}

export namespace ShippingRateListResponse {
  export interface ShippingRate {
    /**
     * Shipping rate ID.
     */
    id?: string;

    /**
     * List of marketplace ids where these shipping rates are qualified for. The list
     * is calculated based on the delivery methods added to the shipping rates.
     */
    marketplaces?: Array<ShippingRate.Marketplace>;

    /**
     * User defined name of the shipping rates set.
     */
    name?: string;
  }

  export namespace ShippingRate {
    export interface Marketplace {
      /**
       * Marketplace ID.
       */
      id?: string;
    }
  }
}

export interface ShippingRateCreateParams {
  rates: Array<ShippingRateCreateParams.Rate>;

  /**
   * Shipping rates set ID (UUID) When creating a shipping rates set (Post) the field
   * is ignored. It is required when updating (Put) a shipping rates.
   */
  id?: string;

  /**
   * Date and time of the last modification of the set in UTC ISO 8601 format. When
   * creating (Post) or updating (Put) a shipping rates set the field is ignored.
   */
  lastModified?: string;

  /**
   * User defined name of the shipping rates set. It may only contain: letters,
   * numbers, hyphens, dots, commas and spaces.
   */
  name?: string;
}

export namespace ShippingRateCreateParams {
  export interface Rate {
    deliveryMethod: Rate.DeliveryMethod;

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    firstItemRate: Rate.FirstItemRate;

    /**
     * Maximum quantity per package for the given delivery method. Minimum value is 1.
     */
    maxQuantityPerPackage: number;

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    nextItemRate: Rate.NextItemRate;

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    maxPackageWeight?: Rate.MaxPackageWeight;

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    shippingTime?: Rate.ShippingTime;
  }

  export namespace Rate {
    export interface DeliveryMethod {
      /**
       * ID of the delivery method
       */
      id?: string;
    }

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    export interface FirstItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    export interface NextItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    export interface MaxPackageWeight {
      /**
       * Weight unit. Currently only `KILOGRAM` is supported.
       */
      unit?: string | null;

      /**
       * Weight value with an accuracy of three decimal places.
       */
      value?: string;
    }

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    export interface ShippingTime {
      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      from?: string;

      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      to?: string;
    }
  }
}

export interface ShippingRateUpdateParams {
  rates: Array<ShippingRateUpdateParams.Rate>;

  /**
   * Shipping rates set ID (UUID) When creating a shipping rates set (Post) the field
   * is ignored. It is required when updating (Put) a shipping rates.
   */
  body_id?: string;

  /**
   * Date and time of the last modification of the set in UTC ISO 8601 format. When
   * creating (Post) or updating (Put) a shipping rates set the field is ignored.
   */
  lastModified?: string;

  /**
   * User defined name of the shipping rates set. It may only contain: letters,
   * numbers, hyphens, dots, commas and spaces.
   */
  name?: string;
}

export namespace ShippingRateUpdateParams {
  export interface Rate {
    deliveryMethod: Rate.DeliveryMethod;

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    firstItemRate: Rate.FirstItemRate;

    /**
     * Maximum quantity per package for the given delivery method. Minimum value is 1.
     */
    maxQuantityPerPackage: number;

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    nextItemRate: Rate.NextItemRate;

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    maxPackageWeight?: Rate.MaxPackageWeight;

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    shippingTime?: Rate.ShippingTime;
  }

  export namespace Rate {
    export interface DeliveryMethod {
      /**
       * ID of the delivery method
       */
      id?: string;
    }

    /**
     * Rate for the first item in the parcel for the given delivery method. The rate
     * amount and currency must comply with the shippingRatesConstraints.firstItemRate
     * restrictions described in the delivery-methods resource.
     */
    export interface FirstItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Rate for every other item, after the first, in the same parcel for the given
     * delivery method. The rate amount and currency must comply with the
     * shippingRatesConstraints.nextItemRate restrictions described in the
     * delivery-methods resource.
     */
    export interface NextItemRate {
      /**
       * Amount
       */
      amount?: string;

      /**
       * ISO 4217 currency code
       */
      currency?: string;
    }

    /**
     * Maximum weight of a package for the given delivery method (allowed only for
     * methods with shippingRatesConstraints.maxPackageWeight.supported set to true in
     * the delivery-methods resource). If not set, only maxQuantityPerPackage will be
     * used to calculate the number of packages. Please note that the weight value must
     * be the same for both related delivery methods, i.e. with `IN_ADVANCE` and
     * `CASH_ON_DELIVERY` payment policy if both methods are in the shipping rates set.
     */
    export interface MaxPackageWeight {
      /**
       * Weight unit. Currently only `KILOGRAM` is supported.
       */
      unit?: string | null;

      /**
       * Weight value with an accuracy of three decimal places.
       */
      value?: string;
    }

    /**
     * Custom shipping time for the given delivery method (allowed only for methods
     * with shippingRatesConstraints.shippingTime.customizable set to true in the
     * delivery-methods resource). If not set the default shipping time specified in
     * the delivery-methods resource is used.
     */
    export interface ShippingTime {
      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      from?: string;

      /**
       * ISO 8601 duration format, e.g. P3D for 3 days
       */
      to?: string;
    }
  }
}

export interface ShippingRateListParams {
  /**
   * Allows to filter shipping rates by marketplace that they are qualified for.
   */
  marketplace?: string;
}

export declare namespace ShippingRates {
  export {
    type ShippingRatesSet as ShippingRatesSet,
    type ShippingRateListResponse as ShippingRateListResponse,
    type ShippingRateCreateParams as ShippingRateCreateParams,
    type ShippingRateUpdateParams as ShippingRateUpdateParams,
    type ShippingRateListParams as ShippingRateListParams,
  };
}

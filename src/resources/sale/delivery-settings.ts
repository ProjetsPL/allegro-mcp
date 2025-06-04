// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class DeliverySettings extends APIResource {
  /**
   * Use this resource to get the delivery settings declared by the seller. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-ustawienia-dostawy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-get-delivery-settings" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const deliverySettings =
   *   await client.sale.deliverySettings.retrieve();
   * ```
   */
  retrieve(
    query: DeliverySettingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliverySettings> {
    return this._client.get('/sale/delivery-settings', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to modify the delivery settings declared by the seller. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-edytowac-ustawienia-dostawy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-edit-delivery-settings" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const deliverySettings =
   *   await client.sale.deliverySettings.update({
   *     customCost: { allowed: false },
   *     joinPolicy: { strategy: 'MIN' },
   *   });
   * ```
   */
  update(body: DeliverySettingUpdateParams, options?: RequestOptions): APIPromise<DeliverySettings> {
    return this._client.put('/sale/delivery-settings', {
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

export interface DeliverySettings {
  /**
   * Policy of custom delivery cost.
   */
  customCost: DeliverySettings.CustomCost;

  /**
   * Policy of calculating delivery costs.
   */
  joinPolicy: DeliverySettings.JoinPolicy;

  /**
   * Marketplace for which delivery settings were returned.
   */
  marketplace: DeliverySettings.Marketplace;

  /**
   * Date and time of the last modification of the set in UTC ISO 8601 format.
   */
  updatedAt: string;

  /**
   * A minimum total order amount required to qualify for free foreign delivery (for
   * example for allegro-cz marketplace, all delivery countries other than Czechia
   * are treated as foreign).
   */
  abroadFreeDelivery?: DeliverySettings.AbroadFreeDelivery;

  /**
   * A minimum total order amount required to qualify for free domestic delivery (for
   * example for allegro-cz marketplace, only Czechia is treated as domestic).
   */
  freeDelivery?: DeliverySettings.FreeDelivery;
}

export namespace DeliverySettings {
  /**
   * Policy of custom delivery cost.
   */
  export interface CustomCost {
    /**
     * If true the customer can enter a custom shipping cost.
     */
    allowed: boolean;
  }

  /**
   * Policy of calculating delivery costs.
   */
  export interface JoinPolicy {
    /**
     * Strategy used to calculate delivery cost for items from offers with different
     * delivery costs. The possible values:
     *
     * - `MAX` - The buyer will pay for the most expensive delivery
     * - `MIN` - The buyer will pay for the cheapest delivery
     * - `SUM` - Items will be sent in separate parcels and delivery costs will be sum
     *   of delivery costs for each item.
     */
    strategy: 'MIN' | 'MAX' | 'SUM';
  }

  /**
   * Marketplace for which delivery settings were returned.
   */
  export interface Marketplace {
    /**
     * Marketplace id
     */
    id: string;
  }

  /**
   * A minimum total order amount required to qualify for free foreign delivery (for
   * example for allegro-cz marketplace, all delivery countries other than Czechia
   * are treated as foreign).
   */
  export interface AbroadFreeDelivery {
    /**
     * The amount provided in a string format to avoid rounding errors.
     */
    amount: string;

    /**
     * ISO 4217 currency code. Currency code depends on marketplace, e.g. PLN for
     * allegro-pl, CZK for allegro-cz.
     */
    currency: string;
  }

  /**
   * A minimum total order amount required to qualify for free domestic delivery (for
   * example for allegro-cz marketplace, only Czechia is treated as domestic).
   */
  export interface FreeDelivery {
    /**
     * The amount provided in a string format to avoid rounding errors.
     */
    amount: string;

    /**
     * ISO 4217 currency code. Currency code depends on marketplace, e.g. PLN for
     * allegro-pl, CZK for allegro-cz.
     */
    currency: string;
  }
}

export interface DeliverySettingRetrieveParams {
  marketplace?: DeliverySettingRetrieveParams.Marketplace;
}

export namespace DeliverySettingRetrieveParams {
  export interface Marketplace {
    /**
     * Marketplace for which delivery settings will be returned. By default (if the
     * marketplace parameter is not set) the marketplace on which the seller has
     * registered is used. However, we recommend that the marketplace.id query
     * parameter should always be explicitly set.
     */
    id?: string;
  }
}

export interface DeliverySettingUpdateParams {
  /**
   * Policy of custom delivery cost.
   */
  customCost: DeliverySettingUpdateParams.CustomCost;

  /**
   * Policy of calculating delivery costs.
   */
  joinPolicy: DeliverySettingUpdateParams.JoinPolicy;

  /**
   * A minimum total order amount required to qualify for free foreign delivery (for
   * example for allegro-cz marketplace, all delivery countries other than Czechia
   * are treated as foreign). If you do not want to set free foreign delivery
   * threshold, do not set this value.
   */
  abroadFreeDelivery?: DeliverySettingUpdateParams.AbroadFreeDelivery;

  /**
   * A minimum total order amount required to qualify for free domestic delivery (for
   * example for allegro-cz marketplace, only Czechia is treated as domestic). If you
   * do not want to set free domestic delivery threshold, do not set this value.
   */
  freeDelivery?: DeliverySettingUpdateParams.FreeDelivery;

  /**
   * The marketplace for which delivery settings will be modified. By default (if the
   * marketplace parameter is not set) the marketplace on which the seller has
   * registered is used. However, we recommend that the marketplace parameter should
   * always be explicitly set.
   */
  marketplace?: DeliverySettingUpdateParams.Marketplace;
}

export namespace DeliverySettingUpdateParams {
  /**
   * Policy of custom delivery cost.
   */
  export interface CustomCost {
    /**
     * If true the customer can enter a custom shipping cost.
     */
    allowed: boolean;
  }

  /**
   * Policy of calculating delivery costs.
   */
  export interface JoinPolicy {
    /**
     * Strategy used to calculate delivery cost for items from offers with different
     * delivery costs. The possible values:
     *
     * - `MAX` - The buyer will pay for the most expensive delivery
     * - `MIN` - The buyer will pay for the cheapest delivery
     * - `SUM` - Items will be sent in separate parcels and delivery costs will be sum
     *   of delivery costs for each item.
     */
    strategy: 'MIN' | 'MAX' | 'SUM';
  }

  /**
   * A minimum total order amount required to qualify for free foreign delivery (for
   * example for allegro-cz marketplace, all delivery countries other than Czechia
   * are treated as foreign). If you do not want to set free foreign delivery
   * threshold, do not set this value.
   */
  export interface AbroadFreeDelivery {
    /**
     * The amount provided in a string format to avoid rounding errors.
     */
    amount: string;

    /**
     * ISO 4217 currency code. The correct currency code for a given marketplace should
     * be set, e.g. PLN for allegro-pl, CZK for allegro-cz.
     */
    currency: string;
  }

  /**
   * A minimum total order amount required to qualify for free domestic delivery (for
   * example for allegro-cz marketplace, only Czechia is treated as domestic). If you
   * do not want to set free domestic delivery threshold, do not set this value.
   */
  export interface FreeDelivery {
    /**
     * The amount provided in a string format to avoid rounding errors.
     */
    amount: string;

    /**
     * ISO 4217 currency code. The correct currency code for a given marketplace should
     * be set, e.g. PLN for allegro-pl, CZK for allegro-cz.
     */
    currency: string;
  }

  /**
   * The marketplace for which delivery settings will be modified. By default (if the
   * marketplace parameter is not set) the marketplace on which the seller has
   * registered is used. However, we recommend that the marketplace parameter should
   * always be explicitly set.
   */
  export interface Marketplace {
    /**
     * Marketplace id
     */
    id: string;
  }
}

export declare namespace DeliverySettings {
  export {
    type DeliverySettings as DeliverySettings,
    type DeliverySettingRetrieveParams as DeliverySettingRetrieveParams,
    type DeliverySettingUpdateParams as DeliverySettingUpdateParams,
  };
}

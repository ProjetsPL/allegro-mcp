// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MarketplacesAPI from './marketplaces';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Marketplaces extends APIResource {
  /**
   * Use this resource to get information about all the marketplaces on the platform.
   * Read more:
   * <a href="../../tutorials/wystawianie-i-zarzadzanie-oferta-w-serwisach-zagranicznych-wwzjP4M8gTZ#serwis-bazowy-uzytkownika-oraz-lista-dostepnych-serwisow" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-offers-on-foreign-marketplaces-7GndGjeAATn#user-s-base-marketplace-and-list-of-available-marketplaces" target="_blank">EN</a>.
   */
  list(options?: RequestOptions): APIPromise<MarketplaceListResponse> {
    return this._client.get('/marketplaces', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface MarketplaceItemCurrency {
  /**
   * ISO 4217 currency code
   */
  code?: string;
}

export interface MarketplaceItemLanguage {
  /**
   * BCP-47 language code
   */
  code?: string;
}

export interface MarketplaceListResponse {
  /**
   * List of marketplaces in allegro
   */
  marketplaces?: Array<MarketplaceListResponse.Marketplace>;
}

export namespace MarketplaceListResponse {
  export interface Marketplace {
    /**
     * Marketplace id
     */
    id?: string;

    /**
     * Currencies available for that marketplace
     */
    currencies?: Marketplace.Currencies;

    /**
     * Languages available for that marketplace
     */
    languages?: Marketplace.Languages;

    /**
     * List of delivery countries for that marketplace
     */
    shippingCountries?: Array<Marketplace.ShippingCountry>;
  }

  export namespace Marketplace {
    /**
     * Currencies available for that marketplace
     */
    export interface Currencies {
      /**
       * List of other currencies available for that marketplace
       */
      additional?: Array<MarketplacesAPI.MarketplaceItemCurrency>;

      base?: MarketplacesAPI.MarketplaceItemCurrency;
    }

    /**
     * Languages available for that marketplace
     */
    export interface Languages {
      /**
       * Languages in which you can create offer
       */
      offerCreation?: Array<MarketplacesAPI.MarketplaceItemLanguage>;

      /**
       * Languages in which buyer can see the offer
       */
      offerDisplay?: Array<MarketplacesAPI.MarketplaceItemLanguage>;
    }

    export interface ShippingCountry {
      /**
       * ISO 3166 country code
       */
      code?: string;
    }
  }
}

export declare namespace Marketplaces {
  export {
    type MarketplaceItemCurrency as MarketplaceItemCurrency,
    type MarketplaceItemLanguage as MarketplaceItemLanguage,
    type MarketplaceListResponse as MarketplaceListResponse,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TranslationsAPI from './translations';
import * as ProductsAPI from '../products/products';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Translations extends APIResource {
  /**
   * Update manual translation for offer. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offers.translations.update('en-US', {
   *   offerId: 'offerId',
   * });
   * ```
   */
  update(language: string, params: TranslationUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { offerId, ...body } = params;
    return this._client.patch(path`/sale/offers/${offerId}/translations/${language}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Get offer translation for given language or all present. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const translations =
   *   await client.sale.offers.translations.list('offerId');
   * ```
   */
  list(
    offerID: string,
    query: TranslationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TranslationListResponse> {
    return this._client.get(path`/sale/offers/${offerID}/translations`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Delete single element or entire manual translation. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-ofert" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#offer-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offers.translations.delete('en-US', {
   *   offerId: 'offerId',
   * });
   * ```
   */
  delete(language: string, params: TranslationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { offerId, element, products } = params;
    return this._client.delete(path`/sale/offers/${offerId}/translations/${language}`, {
      query: { element, products },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Type of content: BASE - initial content for offer in declared offer language.
 * AUTO - automatic translation from BASE content. MANUAL - manual translation
 * provided by the user.
 */
export type OfferTranslationType = 'AUTO' | 'MANUAL' | 'BASE';

export interface TranslationListResponse {
  translations?: Array<TranslationListResponse.Translation>;
}

export namespace TranslationListResponse {
  export interface Translation {
    /**
     * Language of the translation.
     */
    language: string;

    /**
     * Offer description translation
     */
    description?: Translation.Description;

    /**
     * Offer safety information translations
     */
    safetyInformation?: Translation.SafetyInformation;

    /**
     * Offer title translation
     */
    title?: Translation.Title;
  }

  export namespace Translation {
    /**
     * Offer description translation
     */
    export interface Description {
      /**
       * The description section cannot have more than 40000 bytes in length.
       */
      translation?: ProductsAPI.StandardizedDescription;

      /**
       * Type of content: BASE - initial content for offer in declared offer language.
       * AUTO - automatic translation from BASE content. MANUAL - manual translation
       * provided by the user.
       */
      type?: TranslationsAPI.OfferTranslationType;
    }

    /**
     * Offer safety information translations
     */
    export interface SafetyInformation {
      products?: Array<SafetyInformation.Product>;
    }

    export namespace SafetyInformation {
      export interface Product {
        id?: string;

        /**
         * Product safety information translation content
         */
        translation?: string;

        /**
         * Type of content: BASE - initial content for offer in declared offer language.
         * AUTO - automatic translation from BASE content. MANUAL - manual translation
         * provided by the user.
         */
        type?: TranslationsAPI.OfferTranslationType;
      }
    }

    /**
     * Offer title translation
     */
    export interface Title {
      /**
       * Offer title translation content
       */
      translation?: string;

      /**
       * Type of content: BASE - initial content for offer in declared offer language.
       * AUTO - automatic translation from BASE content. MANUAL - manual translation
       * provided by the user.
       */
      type?: TranslationsAPI.OfferTranslationType;
    }
  }
}

export interface TranslationUpdateParams {
  /**
   * Path param: Offer identifier.
   */
  offerId: string;

  /**
   * Body param: Manual offer description translation
   */
  description?: TranslationUpdateParams.Description;

  /**
   * Body param: Manual offer products safety information translations. Updating this
   * resource is in accordance with
   * <a href=" https://datatracker.ietf.org/doc/html/rfc7396/" target="_blank">RFC7396</a> -
   * all or nothing.'
   */
  safetyInformation?: TranslationUpdateParams.SafetyInformation;

  /**
   * Body param: Manual offer title translation
   */
  title?: TranslationUpdateParams.Title;
}

export namespace TranslationUpdateParams {
  /**
   * Manual offer description translation
   */
  export interface Description {
    /**
     * The description section cannot have more than 40000 bytes in length.
     */
    translation?: ProductsAPI.StandardizedDescription;
  }

  /**
   * Manual offer products safety information translations. Updating this resource is
   * in accordance with
   * <a href=" https://datatracker.ietf.org/doc/html/rfc7396/" target="_blank">RFC7396</a> -
   * all or nothing.'
   */
  export interface SafetyInformation {
    products?: Array<SafetyInformation.Product>;
  }

  export namespace SafetyInformation {
    /**
     * Manual product safety information translation
     */
    export interface Product {
      /**
       * Product id connected with provided translated content
       */
      id?: string;

      /**
       * Manual product safety information translation content
       */
      translation?: string;
    }
  }

  /**
   * Manual offer title translation
   */
  export interface Title {
    /**
     * Manual offer title translation content
     */
    translation?: string;
  }
}

export interface TranslationListParams {
  /**
   * Language for translation to retrieve. If not provided, all translations as well
   * as base content for offer will be returned.
   */
  language?: string;
}

export interface TranslationDeleteParams {
  /**
   * Path param: Offer identifier.
   */
  offerId: string;

  /**
   * Query param: Offer element for which translation should be deleted. If not
   * provided, translations for all elements will be deleted.
   */
  element?: 'title' | 'description' | 'safety_information';

  /**
   * Query param:
   */
  products?: TranslationDeleteParams.Products;
}

export namespace TranslationDeleteParams {
  export interface Products {
    /**
     * ProductId for which safety information translation should be deleted. If not
     * provided, safety information translations for all products in offer will be
     * deleted.
     */
    id?: string;
  }
}

export declare namespace Translations {
  export {
    type OfferTranslationType as OfferTranslationType,
    type TranslationListResponse as TranslationListResponse,
    type TranslationUpdateParams as TranslationUpdateParams,
    type TranslationListParams as TranslationListParams,
    type TranslationDeleteParams as TranslationDeleteParams,
  };
}

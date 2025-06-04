// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TranslationsAPI from './translations';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Translations extends APIResource {
  /**
   * Use this resource to create/update translation for additional service group and
   * specified language. It is allowed to provide an incomplete list of services that
   * belong to the group. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const translation =
   *   await client.sale.offerAdditionalServices.groups.translations.update(
   *     'pl-PL',
   *     { groupId: 'groupId' },
   *   );
   * ```
   */
  update(
    language: string,
    params: TranslationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TranslationUpdateResponse> {
    const { groupId, ...body } = params;
    return this._client.patch(
      path`/sale/offer-additional-services/groups/${groupId}/translations/${language}`,
      {
        body,
        ...options,
        headers: buildHeaders([
          {
            'Content-Type': 'application/vnd.allegro.public.v1+json',
            Accept: 'application/vnd.allegro.public.v1+json',
          },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * Use this resource to get translations for additional service group. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const translations =
   *   await client.sale.offerAdditionalServices.groups.translations.list(
   *     'groupId',
   *   );
   * ```
   */
  list(
    groupID: string,
    query: TranslationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TranslationListResponse> {
    return this._client.get(path`/sale/offer-additional-services/groups/${groupID}/translations`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete the translation for specified additional service
   * group and language. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#tlumaczenia-uslug-dodatkowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#additional-services-translations" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offerAdditionalServices.groups.translations.delete(
   *   'pl-PL',
   *   { groupId: 'groupId' },
   * );
   * ```
   */
  delete(language: string, params: TranslationDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { groupId } = params;
    return this._client.delete(
      path`/sale/offer-additional-services/groups/${groupId}/translations/${language}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface AdditionalServiceTranslation {
  definition?: AdditionalServiceTranslation.Definition;

  /**
   * Description of an additional service - provided by merchants and visible by
   * customers.
   */
  description?: string;
}

export namespace AdditionalServiceTranslation {
  export interface Definition {
    id: string;
  }
}

export interface AdditionalServicesGroupTranslationWrapper {
  translation?: Array<AdditionalServiceTranslation>;

  /**
   * Type of translation.
   */
  type?: 'MANUAL' | 'AUTO';
}

export interface TranslationUpdateResponse {
  additionalServices?: AdditionalServicesGroupTranslationWrapper;

  /**
   * IETF language tag.
   */
  language?: string;
}

export interface TranslationListResponse {
  translations?: Array<TranslationListResponse.Translation>;
}

export namespace TranslationListResponse {
  export interface Translation {
    additionalServices?: TranslationsAPI.AdditionalServicesGroupTranslationWrapper;

    /**
     * IETF language tag.
     */
    language?: string;
  }
}

export interface TranslationUpdateParams {
  /**
   * Path param: Additional Service Group ID.
   */
  groupId: string;

  /**
   * Body param:
   */
  additionalServices?: TranslationUpdateParams.AdditionalServices;
}

export namespace TranslationUpdateParams {
  export interface AdditionalServices {
    translation?: Array<TranslationsAPI.AdditionalServiceTranslation>;
  }
}

export interface TranslationListParams {
  /**
   * IETF language tag. When provided, the response will contain translations in only
   * that language (if exists).
   */
  language?: string;
}

export interface TranslationDeleteParams {
  /**
   * Additional service group ID.
   */
  groupId: string;
}

export declare namespace Translations {
  export {
    type AdditionalServiceTranslation as AdditionalServiceTranslation,
    type AdditionalServicesGroupTranslationWrapper as AdditionalServicesGroupTranslationWrapper,
    type TranslationUpdateResponse as TranslationUpdateResponse,
    type TranslationListResponse as TranslationListResponse,
    type TranslationUpdateParams as TranslationUpdateParams,
    type TranslationListParams as TranslationListParams,
    type TranslationDeleteParams as TranslationDeleteParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferClassifiedsPackages extends APIResource {
  /**
   * Use this resource to retrieve classified packages currently assigned to an
   * offer. Read more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#dodatkowe-opcje-promowania" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#additional-promo-options" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerClassifiedsPackage =
   *   await client.sale.offerClassifiedsPackages.retrieve(
   *     'offerId',
   *   );
   * ```
   */
  retrieve(offerID: string, options?: RequestOptions): APIPromise<OfferClassifiedsPackageRetrieveResponse> {
    return this._client.get(path`/sale/offer-classifieds-packages/${offerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to assign classified packages to an offer. Read more:
   * <a href="../../tutorials/jak-wystawic-i-zarzadzac-ogloszeniem-K6r3Z47dKcy#dodatkowe-opcje-promowania" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/listing-and-managing-classified-ads-5Ln0r6wkWs7#additional-promo-options" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offerClassifiedsPackages.update(
   *   'offerId',
   *   { basePackage: {} },
   * );
   * ```
   */
  update(
    offerID: string,
    body: OfferClassifiedsPackageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/sale/offer-classifieds-packages/${offerID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }
}

export interface ClassifiedExtraPackage {
  /**
   * The classifieds extra package ID.
   */
  id?: string;

  /**
   * Extra package with this flag set to true will be recreated when offer is being
   * republished
   */
  republish?: boolean;
}

export interface ClassifiedPackage {
  /**
   * The classifieds package ID.
   */
  id?: string;
}

export interface OfferClassifiedsPackageRetrieveResponse {
  basePackage: ClassifiedPackage;

  extraPackages: Array<ClassifiedExtraPackage>;
}

export interface OfferClassifiedsPackageUpdateParams {
  basePackage: ClassifiedPackage;

  extraPackages?: Array<ClassifiedPackage>;
}

export declare namespace OfferClassifiedsPackages {
  export {
    type ClassifiedExtraPackage as ClassifiedExtraPackage,
    type ClassifiedPackage as ClassifiedPackage,
    type OfferClassifiedsPackageRetrieveResponse as OfferClassifiedsPackageRetrieveResponse,
    type OfferClassifiedsPackageUpdateParams as OfferClassifiedsPackageUpdateParams,
  };
}

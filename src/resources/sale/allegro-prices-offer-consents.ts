// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AllegroPricesOfferConsents extends APIResource {
  /**
   * Use this resource to get the current Allegro Prices consent value for the offer
   * on each of the available marketplaces. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const allegroPricesOfferConsentChangeResponse =
   *   await client.sale.allegroPricesOfferConsents.retrieve(
   *     'offerId',
   *   );
   * ```
   */
  retrieve(offerID: string, options?: RequestOptions): APIPromise<AllegroPricesOfferConsentChangeResponse> {
    return this._client.get(path`/sale/allegro-prices-offer-consents/${offerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update the Allegro Prices consent value for the offer on
   * chosen marketplaces. Read more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#allegro-ceny-jak-zarzadzac-zgodami-na-uczestnictwo-w-programie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#allegro-prices-how-to-manage-program-participation-consents" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const allegroPricesOfferConsentChangeResponse =
   *   await client.sale.allegroPricesOfferConsents.update(
   *     'offerId',
   *     {
   *       additionalMarketplaces: {
   *         'allegro-cz': { status: 'DENIED' },
   *       },
   *       status: 'DENIED',
   *     },
   *   );
   * ```
   */
  update(
    offerID: string,
    body: AllegroPricesOfferConsentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AllegroPricesOfferConsentChangeResponse> {
    return this._client.put(path`/sale/allegro-prices-offer-consents/${offerID}`, {
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

export interface AllegroPricesOfferConsentChangeResponse {
  /**
   * Consent statuses on marketplaces other than the base marketplace of the offer.
   */
  additionalMarketplaces?: Record<string, AllegroPricesOfferConsentChangeResponse.AdditionalMarketplaces>;

  /**
   * Consent status on the base marketplace of the offer.
   */
  status?: 'ALLOWED' | 'DENIED';
}

export namespace AllegroPricesOfferConsentChangeResponse {
  export interface AdditionalMarketplaces {
    status?: 'ALLOWED' | 'DENIED';
  }
}

export interface AllegroPricesOfferConsentUpdateParams {
  /**
   * Use it to update the consent on marketplaces other than the base marketplace of
   * the offer.
   */
  additionalMarketplaces?: Record<string, AllegroPricesOfferConsentUpdateParams.AdditionalMarketplaces>;

  /**
   * Use it to update the consent on the base marketplace of the offer.
   */
  status?: 'ALLOWED' | 'DENIED';
}

export namespace AllegroPricesOfferConsentUpdateParams {
  export interface AdditionalMarketplaces {
    status?: 'ALLOWED' | 'DENIED';
  }
}

export declare namespace AllegroPricesOfferConsents {
  export {
    type AllegroPricesOfferConsentChangeResponse as AllegroPricesOfferConsentChangeResponse,
    type AllegroPricesOfferConsentUpdateParams as AllegroPricesOfferConsentUpdateParams,
  };
}

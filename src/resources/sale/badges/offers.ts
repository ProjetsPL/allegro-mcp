// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BadgesAPI from './badges';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Offers extends APIResource {
  /**
   * This resource allows you to update a campaign badge for the given offer. You can
   * use _Location_ provided in header of the response to track your update status.
   * Update offer price in a campaign or finish marking an offer in a campaign. Read
   * more:
   * <a href="../../tutorials/jak-przypisac-oferte-kampanii-GRaj0q6Gwuy#zmiana-ceny-i-zakonczenie-oznaczenia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-submit-offers-to-campaigns-AgGjd6EmyH4#change-price-and-finish-badge" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.badges.offers.updateCampaign(
   *     'campaignId',
   *     { offerId: 'offerId' },
   *   );
   * ```
   */
  updateCampaign(
    campaignID: string,
    params: OfferUpdateCampaignParams,
    options?: RequestOptions,
  ): APIPromise<OfferUpdateCampaignResponse> {
    const { offerId, ...body } = params;
    return this._client.patch(path`/sale/badges/offers/${offerId}/campaigns/${campaignID}`, {
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

export interface OfferUpdateCampaignResponse {
  /**
   * Operation Id
   */
  id?: string;
}

export type OfferUpdateCampaignParams =
  | OfferUpdateCampaignParams.BadgePatchProcess
  | OfferUpdateCampaignParams.BadgePatchPrices;

export declare namespace OfferUpdateCampaignParams {
  export interface BadgePatchProcess {
    /**
     * Path param: Offer ID.
     */
    offerId: string;

    /**
     * Body param:
     */
    process?: BadgePatchProcess.Process;
  }

  export namespace BadgePatchProcess {
    export interface Process {
      status?: 'FINISHED';
    }
  }

  export interface BadgePatchPrices {
    /**
     * Path param: Offer ID.
     */
    offerId: string;

    /**
     * Body param:
     */
    prices?: BadgePatchPrices.Prices | null;
  }

  export namespace BadgePatchPrices {
    export interface Prices {
      bargain?: Prices.Bargain;
    }

    export namespace Prices {
      export interface Bargain {
        /**
         * Bargain price. Required by DISCOUNT and SOURCING campaign.
         */
        value?: BadgesAPI.BadgeApplicationBargainPrice | null;
      }
    }
  }
}

export declare namespace Offers {
  export {
    type OfferUpdateCampaignResponse as OfferUpdateCampaignResponse,
    type OfferUpdateCampaignParams as OfferUpdateCampaignParams,
  };
}

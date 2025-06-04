// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Charity extends APIResource {
  /**
   * Use this resource to search fundraising campaigns. Read more:
   * <a href="../../news/wystaw-oferte-charytatywna-na-allegro-MR87PBxZySY" target="_blank">PL</a>
   * /
   * <a href="../../news/list-a-charity-offer-on-allegro-LRV0572GOhr" target="_blank">EN</a>.
   */
  listFundraisingCampaigns(
    query: CharityListFundraisingCampaignsParams,
    options?: RequestOptions,
  ): APIPromise<CharityListFundraisingCampaignsResponse> {
    return this._client.get('/charity/fundraising-campaigns', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.beta.v1+json' }, options?.headers]),
    });
  }
}

export interface CharityListFundraisingCampaignsResponse {
  /**
   * search results
   */
  campaigns?: Array<CharityListFundraisingCampaignsResponse.Campaign>;
}

export namespace CharityListFundraisingCampaignsResponse {
  export interface Campaign {
    /**
     * unique campaign identifier
     */
    id?: string;

    /**
     * campaign name
     */
    name?: string;

    organization?: Campaign.Organization;
  }

  export namespace Campaign {
    export interface Organization {
      /**
       * organization name
       */
      name?: string;
    }
  }
}

export interface CharityListFundraisingCampaignsParams {
  /**
   * Maximum number of returned results.
   */
  limit: number;

  /**
   * Fundraising campaign name or it's Organization name prefix to search for.
   */
  phrase: string;
}

export declare namespace Charity {
  export {
    type CharityListFundraisingCampaignsResponse as CharityListFundraisingCampaignsResponse,
    type CharityListFundraisingCampaignsParams as CharityListFundraisingCampaignsParams,
  };
}

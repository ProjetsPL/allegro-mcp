// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Use this resource to receive feedback statistics. Read more:
   * <a href="../../news/nowe-zasoby-ktorymi-pobierzesz-informacje-o-ocenach-ZM9L1WPBbUb" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-to-download-sales-feedback-d2VYERBMRiz" target="_blank">EN</a>.
   */
  retrieveRatingsSummary(
    userID: string,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveRatingsSummaryResponse> {
    return this._client.get(path`/users/${userID}/ratings-summary`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface UserRetrieveRatingsSummaryResponse {
  /**
   * Summary of data concerning users that do not recommend the seller.
   */
  notRecommended: UserRetrieveRatingsSummaryResponse.NotRecommended;

  /**
   * Summary of data concerning users that recommend the seller.
   */
  recommended: UserRetrieveRatingsSummaryResponse.Recommended;

  /**
   * Percentage of unique buyers recommending the seller.
   */
  recommendedPercentage: string;

  /**
   * The rates broken down into detailed categories. Note that this information is
   * only available if the seller has received enough detailed ratings.
   */
  averageRates?: UserRetrieveRatingsSummaryResponse.AverageRates;
}

export namespace UserRetrieveRatingsSummaryResponse {
  /**
   * Summary of data concerning users that do not recommend the seller.
   */
  export interface NotRecommended {
    /**
     * Total number of negative feedbacks received.
     */
    total: number;

    /**
     * Number of unique users.
     */
    unique: number;
  }

  /**
   * Summary of data concerning users that recommend the seller.
   */
  export interface Recommended {
    /**
     * Total number of positive feedbacks received.
     */
    total: number;

    /**
     * Number of unique users.
     */
    unique: number;
  }

  /**
   * The rates broken down into detailed categories. Note that this information is
   * only available if the seller has received enough detailed ratings.
   */
  export interface AverageRates {
    /**
     * The average value of delivery rate.
     */
    delivery?: number;

    /**
     * The average value of delivery cost rate.
     */
    deliveryCost?: number;

    /**
     * The average value of description rate.
     */
    description?: number;

    /**
     * The average value of service rate.
     */
    service?: number;
  }
}

export declare namespace Users {
  export { type UserRetrieveRatingsSummaryResponse as UserRetrieveRatingsSummaryResponse };
}

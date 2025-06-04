// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserRatings extends APIResource {
  /**
   * Use this resource to receive your sales rating by given rating id. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-informacje-o-ocenie-sprzedazy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-user-s-ratings-data" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const userRating = await client.sale.userRatings.retrieve(
   *   '41846511',
   * );
   * ```
   */
  retrieve(
    ratingID: string,
    params: UserRatingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRating> {
    const { 'Accept-Language': acceptLanguage } = params ?? {};
    return this._client.get(path`/sale/user-ratings/${ratingID}`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to receive your sales ratings sorted by last change date,
   * starting from the latest. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-pobrac-informacje-o-ocenie-sprzedazy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-retrieve-user-s-ratings-data" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const userRatings = await client.sale.userRatings.list();
   * ```
   */
  list(
    params: UserRatingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserRatingListResponse> {
    const { 'Accept-Language': acceptLanguage, ...query } = params ?? {};
    return this._client.get('/sale/user-ratings', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.allegro.public.v1+json',
          ...(acceptLanguage?.toString() != null ?
            { 'Accept-Language': acceptLanguage?.toString() }
          : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to answer for received rating. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-dodac-odpowiedz-na-ocene" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-answer-for-user-rating" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const answer = await client.sale.userRatings.answer(
   *   '5df0a6d1ef437e00255572a1',
   *   { message: 'message' },
   * );
   * ```
   */
  answer(ratingID: string, body: UserRatingAnswerParams, options?: RequestOptions): APIPromise<Answer> {
    return this._client.put(path`/sale/user-ratings/${ratingID}/answer`, {
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
   * Use this resource to request removal of received rating. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#jak-wyslac-prosbe-o-usuniecie-oceny" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#how-to-send-a-request-to-remove-user-rating" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const removal =
   *   await client.sale.userRatings.requestRemoval(
   *     '5df0a6d1ef437e00255572a1',
   *     { request: { message: 'message' } },
   *   );
   * ```
   */
  requestRemoval(
    ratingID: string,
    body: UserRatingRequestRemovalParams,
    options?: RequestOptions,
  ): APIPromise<Removal> {
    return this._client.put(path`/sale/user-ratings/${ratingID}/removal`, {
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

/**
 * Seller's answer, if null seller did not publish answer
 */
export interface Answer {
  /**
   * Answer creation datetime in ISO 8601 format
   */
  createdAt: string;

  /**
   * Answer message
   */
  message: string;
}

export interface Removal {
  /**
   * Date until a removal request can be submitted in ISO 8601 format
   */
  possibleTo: string;

  /**
   * Submitted removal request, null if removal was not requested
   */
  request?: Removal.Request;
}

export namespace Removal {
  /**
   * Submitted removal request, null if removal was not requested
   */
  export interface Request {
    /**
     * Removal request creation datetime in ISO 8601 format
     */
    createdAt: string;

    /**
     * Message containing explanation for removing rating
     */
    message: string;

    /**
     * Message containing information who requested removing of a rating
     */
    source?: 'SELLER' | 'ADMIN';
  }
}

export interface UserRating {
  /**
   * Rating id
   */
  id: string;

  buyer: UserRating.Buyer;

  /**
   * Creation datetime in ISO 8601 format
   */
  createdAt: string;

  /**
   * Whether buyer recommends the order
   */
  recommended: boolean;

  /**
   * Seller's answer, if null seller did not publish answer
   */
  answer?: Answer;

  /**
   * Buyer's text comment
   */
  comment?: string;

  /**
   * Edition datetime in ISO 8601 format
   */
  editedAt?: string;

  /**
   * If true this rating was not included in calculating average user rates
   */
  excludedFromAverageRates?: boolean;

  /**
   * The reason why the rating was excluded from calculating average user rates. The
   * message is translated based on the value of the "Accept-Language" header and
   * exists only when the rating was excluded.
   */
  excludedFromAverageRatesReason?: string;

  /**
   * Last change (creation or latest edition) datetime in ISO 8601 format
   */
  lastChangedAt?: string;

  order?: UserRating.Order;

  rates?: UserRating.Rates;

  removal?: Removal;
}

export namespace UserRating {
  export interface Buyer {
    /**
     * Buyer id
     */
    id: string;

    /**
     * Buyer's login
     */
    login: string;
  }

  export interface Order {
    /**
     * Order id
     */
    id: string;

    /**
     * List of order offers
     */
    offers: Array<Order.Offer>;
  }

  export namespace Order {
    export interface Offer {
      /**
       * Offer ID
       */
      id: string;

      /**
       * Offer title
       */
      title: string;

      /**
       * Offer snapshot URL parameter pointing to historical offer view
       */
      snapshot?: string;
    }
  }

  export interface Rates {
    /**
     * Delivery rate value
     */
    delivery?: 1 | 2 | 3 | 4 | 5;

    /**
     * Delivery cost rate value
     */
    deliveryCost?: 1 | 2 | 3 | 4 | 5;

    /**
     * Description rate value
     */
    description?: 1 | 2 | 3 | 4 | 5;

    /**
     * Service rate value
     */
    service?: 1 | 2 | 3 | 4 | 5;
  }
}

export interface UserRatingListResponse {
  /**
   * List of ratings that match requested filter. Empty when no rating matched.
   */
  ratings: Array<UserRating>;
}

export interface UserRatingRetrieveParams {
  /**
   * Expected language of messages. The header is available only for content version
   * 'application/vnd.allegro.beta.v1+json'.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export interface UserRatingListParams {
  /**
   * Query param:
   */
  lastChangedAt?: UserRatingListParams.LastChangedAt;

  /**
   * Query param: The limit of elements in the response.
   */
  limit?: number;

  /**
   * Query param: The offset of elements in the response.
   */
  offset?: number;

  /**
   * Query param: Filter by recommended.
   */
  recommended?: 'true' | 'false';

  /**
   * Header param: Expected language of messages. The header is available only for
   * content version 'application/vnd.allegro.beta.v1+json'.
   */
  'Accept-Language'?: 'en-US' | 'pl-PL' | 'uk-UA' | 'sk-SK' | 'cs-CZ' | 'hu-HU';
}

export namespace UserRatingListParams {
  export interface LastChangedAt {
    /**
     * Last change (creation or latest edition) date time in ISO 8601 format. The lower
     * bound of date time range from which ratings will be fetched.
     */
    gte?: string;

    /**
     * Last change (creation or latest edition) date time in ISO 8601 format. The upper
     * bound of date time range from which ratings will be fetched.
     */
    lte?: string;
  }
}

export interface UserRatingAnswerParams {
  /**
   * Answer message.
   */
  message: string;
}

export interface UserRatingRequestRemovalParams {
  request: UserRatingRequestRemovalParams.Request;
}

export namespace UserRatingRequestRemovalParams {
  export interface Request {
    /**
     * Message containing explanation for removing rating.
     */
    message: string;
  }
}

export declare namespace UserRatings {
  export {
    type Answer as Answer,
    type Removal as Removal,
    type UserRating as UserRating,
    type UserRatingListResponse as UserRatingListResponse,
    type UserRatingRetrieveParams as UserRatingRetrieveParams,
    type UserRatingListParams as UserRatingListParams,
    type UserRatingAnswerParams as UserRatingAnswerParams,
    type UserRatingRequestRemovalParams as UserRatingRequestRemovalParams,
  };
}

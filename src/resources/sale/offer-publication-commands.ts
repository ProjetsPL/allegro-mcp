// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductOffersAPI from './product-offers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferPublicationCommands extends APIResource {
  /**
   * Use this resource to modify multiple offers publication at once. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#publikacja-oferty" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#offer-publication" target="_blank">EN</a>.
   * This resource is rate limited to 250 000 offer changes per hour or 9000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPublicationCommands.batchModify(
   *     'commandId',
   *   );
   * ```
   */
  batchModify(
    commandID: string,
    body: OfferPublicationCommandBatchModifyParams,
    options?: RequestOptions,
  ): APIPromise<GeneralReport> {
    return this._client.put(path`/sale/offer-publication-commands/${commandID}`, {
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
   * Use this resource to retrieve information about the offer statuses on the site
   * (Defaults: limit = 100, offset = 0). Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#informacje-o-publikacji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#information-about-publication" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const taskReport =
   *   await client.sale.offerPublicationCommands.getDetailedReport(
   *     'commandId',
   *   );
   * ```
   */
  getDetailedReport(
    commandID: string,
    query: OfferPublicationCommandGetDetailedReportParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TaskReport> {
    return this._client.get(path`/sale/offer-publication-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to retrieve information about the offer listing statuses. You
   * will receive a summary with a number of correctly listed offers and errors. Read
   * more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zestawienie-zadan" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#task-list" target="_blank">EN</a>.
   * This resource is rate limited to retrieving information about 270 000 offer
   * changes per minute.
   *
   * @example
   * ```ts
   * const generalReport =
   *   await client.sale.offerPublicationCommands.getSummary(
   *     'commandId',
   *   );
   * ```
   */
  getSummary(commandID: string, options?: RequestOptions): APIPromise<GeneralReport> {
    return this._client.get(path`/sale/offer-publication-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Command execution summary
 */
export interface GeneralReport {
  /**
   * Command ID
   */
  id?: string;

  /**
   * Date of command completion. Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ
   */
  completedAt?: string | null;

  /**
   * Date of command creation. Format (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ
   */
  createdAt?: string;

  /**
   * Offers updates summary
   */
  taskCount?: TaskCount;
}

/**
 * Contains offers criteria
 */
export interface OfferCriterium {
  /**
   * Set of offers
   */
  offers?: Array<ProductOffersAPI.OfferID>;

  /**
   * Criteria type: CONTAINS_OFFERS
   */
  type?: 'CONTAINS_OFFERS';
}

/**
 * Offers updates summary
 */
export interface TaskCount {
  /**
   * Current number of failed offers updates
   */
  failed?: number;

  /**
   * Current number of success offers updates
   */
  success?: number;

  /**
   * Total number of scheduled offers updates
   */
  total?: number;
}

/**
 * Contains list of task results
 */
export interface TaskReport {
  /**
   * List of task results
   */
  tasks?: Array<TaskReport.Task>;
}

export namespace TaskReport {
  /**
   * Status of single command task.
   */
  export interface Task {
    /**
     * The list of error objects explaining the problems with command processing for
     * the given offer.
     */
    errors?: Array<ProductOffersAPI.Error>;

    /**
     * Modified field as JSON path.
     */
    field?: string;

    /**
     * General fail reason. You should check the errors structure to get more detailed
     * information of the encountered errors.
     */
    message?: string;

    offer?: ProductOffersAPI.OfferID;

    /**
     * Available statuses: NEW, SUCCESS, FAIL
     */
    status?: string;
  }
}

export interface OfferPublicationCommandBatchModifyParams {
  /**
   * List of offer criteria
   */
  offerCriteria?: Array<OfferCriterium>;

  /**
   * Contains publication's fields to change
   */
  publication?: OfferPublicationCommandBatchModifyParams.Publication;
}

export namespace OfferPublicationCommandBatchModifyParams {
  /**
   * Contains publication's fields to change
   */
  export interface Publication {
    /**
     * Action to perform
     */
    action?: 'ACTIVATE' | 'END';

    /**
     * Date and time for scheduling ACTIVATE action, will be ignored for another
     * actions
     */
    scheduledFor?: string;
  }
}

export interface OfferPublicationCommandGetDetailedReportParams {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace OfferPublicationCommands {
  export {
    type GeneralReport as GeneralReport,
    type OfferCriterium as OfferCriterium,
    type TaskCount as TaskCount,
    type TaskReport as TaskReport,
    type OfferPublicationCommandBatchModifyParams as OfferPublicationCommandBatchModifyParams,
    type OfferPublicationCommandGetDetailedReportParams as OfferPublicationCommandGetDetailedReportParams,
  };
}

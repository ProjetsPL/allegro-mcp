// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PromoOptionsCommandsAPI from './promo-options-commands';
import * as OfferPublicationCommandsAPI from '../offer-publication-commands';
import * as ProductOffersAPI from '../product-offers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PromoOptionsCommands extends APIResource {
  /**
   * Use this resource to modify promotion packages on multiple offers at once. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-lub-edytowac-opcje-promowania-na-wielu-ofertach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-or-change-promo-options-in-multiple-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const promoGeneralReport =
   *   await client.sale.offers.promoOptionsCommands.batchModify(
   *     'aca8103b-14eb-4855-b9b3-de5bef06bd30',
   *   );
   * ```
   */
  batchModify(
    commandID: string,
    body: PromoOptionsCommandBatchModifyParams,
    options?: RequestOptions,
  ): APIPromise<PromoGeneralReport> {
    return this._client.put(path`/sale/offers/promo-options-commands/${commandID}`, {
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
   * Use this resource to retrieve the result of an offer modification command. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-sprawdzic-szczegolowy-raport-zadania" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-check-a-detailed-report-of-your-task" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.sale.offers.promoOptionsCommands.detailedResult(
   *     'commandId',
   *   );
   * ```
   */
  detailedResult(
    commandID: string,
    query: PromoOptionsCommandDetailedResultParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PromoOptionsCommandDetailedResultResponse> {
    return this._client.get(path`/sale/offers/promo-options-commands/${commandID}/tasks`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to find out how many offers were edited within one
   * {commandId}. You will receive a summary with a number of successfully edited
   * offers and errors. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-lub-edytowac-opcje-promowania-na-wielu-ofertach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-or-change-promo-options-in-multiple-offers" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const promoGeneralReport =
   *   await client.sale.offers.promoOptionsCommands.summary(
   *     'commandId',
   *   );
   * ```
   */
  summary(commandID: string, options?: RequestOptions): APIPromise<PromoGeneralReport> {
    return this._client.get(path`/sale/offers/promo-options-commands/${commandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Command execution summary
 */
export interface PromoGeneralReport {
  /**
   * Command ID
   */
  id?: string;

  /**
   * Offers updates summary
   */
  taskCount?: OfferPublicationCommandsAPI.TaskCount;
}

export interface PromoOptionsCommandModification {
  /**
   * The base package. Available packages can be determined using
   * <a href="#operation/getAvailableOfferPromotionPackages">GET
   * /sale/offer-promotion-packages</a>.
   */
  basePackage?: PromoOptionsCommandModificationPackage;

  /**
   * Extra packages to be set on offer. Omitting this parameter will preserve the
   * packages already present.
   */
  extraPackages?: Array<PromoOptionsCommandModificationPackage>;

  /**
   * Time at which the modification will be applied.
   */
  modificationTime?: 'NOW' | 'END_OF_CYCLE';
}

export interface PromoOptionsCommandModificationPackage {
  id?: string;
}

export interface PromoOptionsCommandDetailedResultResponse {
  additionalMarketplaces?: Array<PromoOptionsCommandDetailedResultResponse.AdditionalMarketplace>;

  modification?: PromoOptionsCommandModification;

  /**
   * Offer promotion modification tasks.
   */
  tasks?: Array<PromoOptionsCommandDetailedResultResponse.Task>;
}

export namespace PromoOptionsCommandDetailedResultResponse {
  export interface AdditionalMarketplace {
    marketplaceId?: string;

    modification?: PromoOptionsCommandsAPI.PromoOptionsCommandModification;
  }

  export interface Task {
    /**
     * The list of all the error objects explaining the error.
     */
    errors?: Array<ProductOffersAPI.Error>;

    /**
     * Date on which the promotion modification task finished processing: Format
     * (ISO 8601) - yyyy-MM-dd'T'HH:mm:ss.SSSZ.
     */
    finishedAt?: string;

    marketplaceId?: string;

    offer?: ProductOffersAPI.OfferID;

    /**
     * Date on which the promotion modification task was scheduled: Format (ISO 8601) -
     * yyyy-MM-dd'T'HH:mm:ss.SSSZ.
     */
    scheduledAt?: string;

    status?: 'DONE' | 'ERROR' | 'IN_PROGRESS';
  }
}

export interface PromoOptionsCommandBatchModifyParams {
  additionalMarketplaces?: Array<PromoOptionsCommandBatchModifyParams.AdditionalMarketplace>;

  modification?: PromoOptionsCommandModification;

  /**
   * Offer choice criteria.
   */
  offerCriteria?: Array<OfferPublicationCommandsAPI.OfferCriterium>;
}

export namespace PromoOptionsCommandBatchModifyParams {
  export interface AdditionalMarketplace {
    marketplaceId?: string;

    modification?: PromoOptionsCommandsAPI.PromoOptionsCommandModification;
  }
}

export interface PromoOptionsCommandDetailedResultParams {
  /**
   * The limit of returned items.
   */
  limit?: number;

  /**
   * The offset of returned items.
   */
  offset?: number;
}

export declare namespace PromoOptionsCommands {
  export {
    type PromoGeneralReport as PromoGeneralReport,
    type PromoOptionsCommandModification as PromoOptionsCommandModification,
    type PromoOptionsCommandModificationPackage as PromoOptionsCommandModificationPackage,
    type PromoOptionsCommandDetailedResultResponse as PromoOptionsCommandDetailedResultResponse,
    type PromoOptionsCommandBatchModifyParams as PromoOptionsCommandBatchModifyParams,
    type PromoOptionsCommandDetailedResultParams as PromoOptionsCommandDetailedResultParams,
  };
}

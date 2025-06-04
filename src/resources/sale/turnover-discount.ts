// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TurnoverDiscountAPI from './turnover-discount';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TurnoverDiscount extends APIResource {
  /**
   * Create or modify the turnover discount for the specified marketplace. Currently,
   * the only supported marketplace is `allegro-business-cz`. <br/> Turnover discount
   * is assigned to all offers available on the given marketplace. Only B2B users
   * will see and be eligible for this discount. In order to create a turnover
   * discount definition, you also have to be a B2B user. <br/> Created turnover
   * discount becomes visible for B2B users with the first day of the next month.
   * Since that day, B2B users begin cumulating their spending on your offers they
   * purchased. Turnover cumulated within the month translate into appropriate
   * percentage of the discount for all orders of your offers in the following month.
   * <br/> Turnover discount created in a given month is susceptible for change only
   * until the end of that month. After that, as mentioned before, turnover discount
   * becomes available for the users and can no longer be modified instantly.
   * Modifying turnover discount in such case will result in creation of the new
   * definition of the discount. This new definition will become available for the
   * users on the same basis that the previously created one, with the start of the
   * next month. Also, similarly, newly created definition can be modified only until
   * the the end of the month. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#utworz-lub-edytuj-rabat-obrotowy" target="_blank">PL</a>
   * /
   * <a href="../..//tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#create-or-edit-turnover-discount" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const turnoverDiscountDto =
   *   await client.sale.turnoverDiscount.update(
   *     'marketplaceId',
   *   );
   * ```
   */
  update(
    marketplaceID: string,
    body: TurnoverDiscountUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TurnoverDiscountDto> {
    return this._client.put(path`/sale/turnover-discount/${marketplaceID}`, {
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
   * Get a list of turnover discounts for all supported marketplaces. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#pobierz-liste-rabatow-obrotowych" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#retrieve-the-list-of-turnover-discounts" target="_blank">EN</a>.
   * Currently, the only supported marketplace is `allegro-business-cz`. <br/>
   * Turnover discount for the marketplace can have one of the three statuses:
   *
   * 1. `ACTIVATING` - neither accumulation of the turnover, nor applying of the
   *    discount has started yet. Turnover will be being accumulated from the
   *    beginning of the next month.
   * 2. `ACTIVE` - there is ongoing accumulation of the turnover and/or applying of
   *    the discount. The latest discount definition does not have fields
   *    `cumulatingToDate` and `spendingToDate` set to a specific date. There may be
   *    multiple (up to 3) definitions of the discount returned for each marketplace.
   *    Only one definition can be accumulated against, and only one definition can
   *    be applied at the same time - appropriate periods from different definitions
   *    will not overlap.
   * 3. `DEACTIVATING` - there is ongoing accumulation of the turnover and/or
   *    applying of the discount. Accumulation of the turnover will be continued
   *    until `cumulatingToDate` of the last definition. Applying of the discount
   *    will be continued until `spendingToDate` of the last definition.
   *
   * @example
   * ```ts
   * const turnoverDiscounts =
   *   await client.sale.turnoverDiscount.list();
   * ```
   */
  list(
    query: TurnoverDiscountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TurnoverDiscountListResponse> {
    return this._client.get('/sale/turnover-discount', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Deactivate turnover discount for a given marketplace. Read more:
   * <a href="../../tutorials/jak-zarzadzac-rabatami-promocjami-yPya2mj6zUP#deaktywuj-rabat-obrotowy" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-rebates-and-promotions-g05avdL0vT4#deactivate-turnover-discount" target="_blank">EN</a>.
   * Currently, the only supported marketplace is `allegro-business-cz`. <br/>
   * Turnover discount will stop being cumulated with the end of the current month.
   * Discount based on cumulated turnover will stop being applied with the end of the
   * next month. After that, the discount will be completely deactivated. <br/> When
   * deactivating the discount that still has `ACTIVATING` status, turnover discount
   * is deactivated immediately. In that case, no turnover discount will start being
   * cumulated with the new month.
   *
   * @example
   * ```ts
   * const turnoverDiscountDto =
   *   await client.sale.turnoverDiscount.deactivate(
   *     'marketplaceId',
   *   );
   * ```
   */
  deactivate(marketplaceID: string, options?: RequestOptions): APIPromise<TurnoverDiscountDto> {
    return this._client.put(path`/sale/turnover-discount/${marketplaceID}/deactivate`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

/**
 * Turnover discount definition.
 */
export interface TurnoverDiscountDefinitionDto {
  /**
   * Creation date of the definition.
   */
  createdAt?: string;

  /**
   * First day of cumulating turnover against definition.
   */
  cumulatingFromDate?: string;

  /**
   * First day when cumulating turnover against definition is no longer happening. If
   * empty - cumulating turnover will be continued indefinitely.
   */
  cumulatingToDate?: string | null;

  /**
   * First day of applying discount from this definition based on cumulated turnover.
   */
  spendingFromDate?: string;

  /**
   * First day when applying discount from definition is no longer happening. If
   * empty - applying discount will be continued indefinitely.
   */
  spendingToDate?: string | null;

  /**
   * Turnover discount thresholds.
   */
  thresholds?: Array<TurnoverDiscountThresholdDto>;

  /**
   * Last update date of the definition.
   */
  updatedAt?: string;
}

/**
 * Turnover discount for a marketplace.
 */
export interface TurnoverDiscountDto {
  /**
   * Definitions currently active or active in the future.
   */
  definitions?: Array<TurnoverDiscountDefinitionDto>;

  /**
   * Marketplace ID.
   */
  marketplaceId?: string;

  /**
   * Turnover discount status.
   */
  status?: 'ACTIVATING' | 'ACTIVE' | 'DEACTIVATING';
}

/**
 * Turnover discount threshold.
 */
export interface TurnoverDiscountThresholdDto {
  /**
   * Discount obtained by user after reaching turnover threshold.
   */
  discount?: TurnoverDiscountThresholdDto.Discount;

  /**
   * The minimum turnover that the buyer is required to accumulate in order to
   * receive a discount for the next month.
   */
  minimumTurnover?: TurnoverDiscountThresholdDto.MinimumTurnover;
}

export namespace TurnoverDiscountThresholdDto {
  /**
   * Discount obtained by user after reaching turnover threshold.
   */
  export interface Discount {
    /**
     * Discount percentage value. The fractional part must be absent or equal to 0.
     */
    percentage?: string;
  }

  /**
   * The minimum turnover that the buyer is required to accumulate in order to
   * receive a discount for the next month.
   */
  export interface MinimumTurnover {
    /**
     * Amount of the minimal turnover. The fractional part must be absent or equal
     * to 0.
     */
    amount?: string;

    /**
     * The currency provided as a 3-letter code in accordance with ISO 4217 standard
     * (https://en.wikipedia.org/wiki/ISO_4217). Must meet the base currency for the
     * marketplace.
     */
    currency?: string;
  }
}

/**
 * List of turnover discounts for marketplaces.
 */
export type TurnoverDiscountListResponse =
  Array<TurnoverDiscountListResponse.TurnoverDiscountListResponseItem>;

export namespace TurnoverDiscountListResponse {
  /**
   * Turnover discount for a marketplace.
   */
  export interface TurnoverDiscountListResponseItem {
    /**
     * Definitions currently active or active in the future.
     */
    definitions?: Array<TurnoverDiscountAPI.TurnoverDiscountDefinitionDto> | null;

    /**
     * Marketplace ID.
     */
    marketplaceId?: string;

    /**
     * Turnover discount status.
     */
    status?: 'ACTIVATING' | 'ACTIVE' | 'DEACTIVATING' | null;
  }
}

export interface TurnoverDiscountUpdateParams {
  /**
   * List of thresholds to apply to cumulated turnover.
   */
  thresholds?: Array<TurnoverDiscountThresholdDto>;
}

export interface TurnoverDiscountListParams {
  /**
   * List of marketplace identifiers. Only turnover discounts for specified
   * marketplaces are returned. <br/> Currently, only `allegro-business-cz` is
   * supported.
   */
  marketplaceId?: Array<string>;
}

export declare namespace TurnoverDiscount {
  export {
    type TurnoverDiscountDefinitionDto as TurnoverDiscountDefinitionDto,
    type TurnoverDiscountDto as TurnoverDiscountDto,
    type TurnoverDiscountThresholdDto as TurnoverDiscountThresholdDto,
    type TurnoverDiscountListResponse as TurnoverDiscountListResponse,
    type TurnoverDiscountUpdateParams as TurnoverDiscountUpdateParams,
    type TurnoverDiscountListParams as TurnoverDiscountListParams,
  };
}

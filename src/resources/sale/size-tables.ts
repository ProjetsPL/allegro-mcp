// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SizeTables extends APIResource {
  /**
   * Use this resource to create size table. Read more:
   * <a href="../../news/tabele-rozmiarow-zmieniamy-istniejacy-zasob-i-dodajemy-nowe-zasoby-do-ich-obslugi-k1nyd21A4fP" target="_blank">PL</a>
   * /
   * <a href="../../news/size-tables-we-change-the-existing-resource-and-add-new-resources-to-handle-them-jn91bynlbC9" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const publicTable = await client.sale.sizeTables.create({
   *   headers: [{ name: 'name' }],
   *   name: 'name',
   *   template: {},
   *   values: [{ cells: ['string'] }],
   * });
   * ```
   */
  create(body: SizeTableCreateParams, options?: RequestOptions): APIPromise<PublicTable> {
    return this._client.post('/sale/size-tables', {
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
   * Use this resource to get selected size table. Read more:
   * <a href="../../news/tabele-rozmiarow-w-rest-api-LRV05q2dGtV" target="_blank">PL</a>
   * /
   * <a href="../../news/size-tables-in-rest-api-D7KP4DE1BH3" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const publicTable = await client.sale.sizeTables.retrieve(
   *   'tableId',
   * );
   * ```
   */
  retrieve(tableID: string, options?: RequestOptions): APIPromise<PublicTable> {
    return this._client.get(path`/sale/size-tables/${tableID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to update selected size table. Read more:
   * <a href="../../news/tabele-rozmiarow-zmieniamy-istniejacy-zasob-i-dodajemy-nowe-zasoby-do-ich-obslugi-k1nyd21A4fP" target="_blank">PL</a>
   * /
   * <a href="../../news/size-tables-we-change-the-existing-resource-and-add-new-resources-to-handle-them-jn91bynlbC9" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const publicTable = await client.sale.sizeTables.update(
   *   'tableId',
   *   {
   *     headers: [{ name: 'name' }],
   *     name: 'name',
   *     values: [{ cells: ['string'] }],
   *   },
   * );
   * ```
   */
  update(tableID: string, body: SizeTableUpdateParams, options?: RequestOptions): APIPromise<PublicTable> {
    return this._client.put(path`/sale/size-tables/${tableID}`, {
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
   * Use this resource to get all size tables assigned to a seller account. Read
   * more:
   * <a href="../../news/tabele-rozmiarow-w-rest-api-LRV05q2dGtV" target="_blank">PL</a>
   * /
   * <a href="../../news/size-tables-in-rest-api-D7KP4DE1BH3" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const sizeTables = await client.sale.sizeTables.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SizeTableListResponse> {
    return this._client.get('/sale/size-tables', {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface Cells {
  cells: Array<string>;
}

export interface Header {
  name: string;
}

export interface JustID {
  id?: string;
}

export interface PublicTable {
  /**
   * size table headers
   */
  headers: Array<Header>;

  /**
   * size table name
   */
  name: string;

  /**
   * size table cells
   */
  values: Array<Cells>;

  /**
   * size table id
   */
  id?: string;

  template?: JustID;
}

export interface SizeTableListResponse {
  tables: Array<PublicTable>;
}

export interface SizeTableCreateParams {
  /**
   * size table headers
   */
  headers: Array<Header>;

  /**
   * size table name
   */
  name: string;

  template: JustID;

  /**
   * size table cells
   */
  values: Array<Cells>;
}

export interface SizeTableUpdateParams {
  /**
   * size table headers
   */
  headers: Array<Header>;

  /**
   * size table name
   */
  name: string;

  /**
   * size table cells
   */
  values: Array<Cells>;
}

export declare namespace SizeTables {
  export {
    type Cells as Cells,
    type Header as Header,
    type JustID as JustID,
    type PublicTable as PublicTable,
    type SizeTableListResponse as SizeTableListResponse,
    type SizeTableCreateParams as SizeTableCreateParams,
    type SizeTableUpdateParams as SizeTableUpdateParams,
  };
}

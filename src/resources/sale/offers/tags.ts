// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * Use this resource to create a new tag. You can create up to 100 tags. Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const tagID = await client.sale.offers.tags.create({
   *   name: 'x',
   * });
   * ```
   */
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<TagID> {
    return this._client.post('/sale/offer-tags', {
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
   * Use this resource to update a tag. Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   * This resource is rate limited to 1 million changes per hour.
   *
   * @example
   * ```ts
   * await client.sale.offers.tags.update('tagId', {
   *   name: 'x',
   * });
   * ```
   */
  update(tagID: string, body: TagUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/sale/offer-tags/${tagID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to delete the tag. Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offers.tags.delete('tagId');
   * ```
   */
  delete(tagID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/sale/offer-tags/${tagID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Use this resource to assign a tag to offer. Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.offers.tags.assign('offerId', {
   *   tags: [{ id: 'id' }],
   * });
   * ```
   */
  assign(offerID: string, body: TagAssignParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/sale/offers/${offerID}/tags`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a list of tags assigned to offer. Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const tagListResponse = await client.sale.offers.tags.list0(
   *   'offerId',
   * );
   * ```
   */
  list0(offerID: string, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get(path`/sale/offers/${offerID}/tags`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get a list of tags defined by the specified user (Defaults:
   * limit = 1000, offset = 0). Read more:
   * <a href="../../news/nowe-zasoby-zarzadzaj-tagami-i-zalacznikami-w-ofertach-1nzlmKLPyHl" target="_blank">PL</a>
   * /
   * <a href="../../news/new-resources-manage-tags-and-attachments-in-offers-WvGz12BXrHL" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const tagListResponse =
   *   await client.sale.offers.tags.list1();
   * ```
   */
  list1(
    query: TagList1Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagListResponse> {
    return this._client.get('/sale/offer-tags', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface TagID {
  id: string;
}

export interface TagListResponse {
  tags: Array<TagListResponse.Tag>;
}

export namespace TagListResponse {
  export interface Tag {
    id: string;

    hidden: boolean;

    name: string;
  }
}

export interface TagRequest {
  name: string;

  hidden?: boolean;
}

export interface TagCreateParams {
  name: string;

  hidden?: boolean;
}

export interface TagUpdateParams {
  name: string;

  hidden?: boolean;
}

export interface TagAssignParams {
  tags: Array<TagID>;
}

export interface TagList1Params {
  /**
   * The limit of elements in the response.
   */
  limit?: number;

  /**
   * The offset of elements in the response.
   */
  offset?: number;
}

export declare namespace Tags {
  export {
    type TagID as TagID,
    type TagListResponse as TagListResponse,
    type TagRequest as TagRequest,
    type TagCreateParams as TagCreateParams,
    type TagUpdateParams as TagUpdateParams,
    type TagAssignParams as TagAssignParams,
    type TagList1Params as TagList1Params,
  };
}

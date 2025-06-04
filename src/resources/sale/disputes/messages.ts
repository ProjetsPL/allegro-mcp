// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Use this resource to post a message in certain dispute. At least one of fields:
   * 'text', 'attachment' has to be present. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#nowa-wiadomosc-w-dyskusji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#add-a-new-message-in-the-discussion" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const disputeMessage =
   *   await client.sale.disputes.messages.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       attachment: { id: 'id' },
   *       text: 'text',
   *       type: 'REGULAR',
   *     },
   *   );
   * ```
   */
  create(disputeID: string, body: MessageCreateParams, options?: RequestOptions): APIPromise<DisputeMessage> {
    return this._client.post(path`/sale/disputes/${disputeID}/messages`, {
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
   * Use this resource to get the list of messages within dispute. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#wiadomosci-z-dyskusji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#all-messages-within-a-discussion" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const messages = await client.sale.disputes.messages.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(
    disputeID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/sale/disputes/${disputeID}/messages`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface DisputeAttachment {
  fileName: string;

  /**
   * Direct link to the attachment
   */
  url: string;
}

/**
 * Initial dispute message with text OR attachment OR both
 */
export interface DisputeMessage {
  id: string;

  /**
   * Author of the message
   */
  author: DisputeMessage.Author;

  createdAt: string;

  attachment?: DisputeAttachment;

  text?: string;
}

export namespace DisputeMessage {
  /**
   * Author of the message
   */
  export interface Author {
    role: 'BUYER' | 'SELLER' | 'ADMIN' | 'SYSTEM' | 'FULFILLMENT';

    /**
     * Not present if role is ADMIN, SYSTEM or FULFILLMENT
     */
    login?: string;
  }
}

export interface MessageListResponse {
  messages?: Array<DisputeMessage>;
}

export interface MessageCreateParams {
  attachment: MessageCreateParams.Attachment;

  text: string;

  type: 'REGULAR' | 'END_REQUEST';
}

export namespace MessageCreateParams {
  export interface Attachment {
    id: string;
  }
}

export interface MessageListParams {
  /**
   * The maximum number of messages within dispute returned in a response.
   */
  limit?: number;

  /**
   * Index of first returned message within dispute.
   */
  offset?: number;
}

export declare namespace Messages {
  export {
    type DisputeAttachment as DisputeAttachment,
    type DisputeMessage as DisputeMessage,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessageAttachmentsAPI from '../message-attachments';
import * as MessagesAPI from '../messages';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Use this resource to write new message in existing thread. This resource is rate
   * limited to 1 request per second for a user. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#nowa-wiadomosc" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#add-a-new-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const message =
   *   await client.messaging.threads.messages.create(
   *     'threadId',
   *     { text: 'Sample message' },
   *   );
   * ```
   */
  create(
    threadID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagesAPI.Message> {
    return this._client.post(path`/messaging/threads/${threadID}/messages`, {
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
   * Use this resource to list messages in thread with provided identifier. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#lista-wiadomosci-dla-wybranego-watku" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#list-of-the-messages-for-the-particular-thread" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const messages =
   *   await client.messaging.threads.messages.list('threadId');
   * ```
   */
  list(
    threadID: string,
    query: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    return this._client.get(path`/messaging/threads/${threadID}/messages`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface MessageListResponse {
  limit: number;

  messages: Array<MessagesAPI.Message>;

  offset: number;
}

export interface MessageCreateParams {
  text: string;

  attachments?: Array<MessageAttachmentsAPI.MessageAttachmentID> | null;
}

export interface MessageListParams {
  /**
   * Message creation date after filter parameter (exclusive).
   */
  after?: string;

  /**
   * Message creation date before filter parameter (exclusive) - cannot be used with
   * offset.
   */
  before?: string;

  /**
   * The maximum number of messages returned in the response.
   */
  limit?: number;

  /**
   * Index of the first returned message from all results.
   */
  offset?: number;
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}

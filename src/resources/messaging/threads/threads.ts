// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from './messages';
import { MessageCreateParams, MessageListParams, MessageListResponse, Messages } from './messages';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Threads extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Use this resource to get thread with provided identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-danym-watku" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-thread" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const thread = await client.messaging.threads.retrieve(
   *   'threadId',
   * );
   * ```
   */
  retrieve(threadID: string, options?: RequestOptions): APIPromise<Thread> {
    return this._client.get(path`/messaging/threads/${threadID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get the list of user threads sorted by last message date,
   * starting from newest. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#lista-watkow-na-koncie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#list-of-threads" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const threads = await client.messaging.threads.list();
   * ```
   */
  list(
    query: ThreadListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ThreadListResponse> {
    return this._client.get('/messaging/threads', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to mark thread with provided identifier as read. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-wiadomosci" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const thread = await client.messaging.threads.markAsRead(
   *   'threadId',
   *   { read: true },
   * );
   * ```
   */
  markAsRead(threadID: string, body: ThreadMarkAsReadParams, options?: RequestOptions): APIPromise<Thread> {
    return this._client.put(path`/messaging/threads/${threadID}/read`, {
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

export interface Thread {
  id: string;

  read: boolean;

  interlocutor?: Thread.Interlocutor | null;

  lastMessageDateTime?: string | null;
}

export namespace Thread {
  export interface Interlocutor {
    avatarUrl: string;

    login: string;
  }
}

export interface ThreadListResponse {
  limit: number;

  offset: number;

  threads: Array<Thread>;
}

export interface ThreadListParams {
  /**
   * The maximum number of threads returned in the response.
   */
  limit?: number;

  /**
   * Index of the first returned thread from all results.
   */
  offset?: number;
}

export interface ThreadMarkAsReadParams {
  read: boolean;
}

Threads.Messages = Messages;

export declare namespace Threads {
  export {
    type Thread as Thread,
    type ThreadListResponse as ThreadListResponse,
    type ThreadListParams as ThreadListParams,
    type ThreadMarkAsReadParams as ThreadMarkAsReadParams,
  };

  export {
    Messages as Messages,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}

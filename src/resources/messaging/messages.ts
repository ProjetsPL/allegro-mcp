// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as MessageAttachmentsAPI from './message-attachments';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Use this resource to write new message to recipient. This resource is rate
   * limited to 1 request per second for a user. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#nowa-wiadomosc" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#add-a-new-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const message = await client.messaging.messages.create({
   *   order: { id: '88ae369b-8f65-4fc4-9c77-bedf604a2e2' },
   *   recipient: { login: 'AllegroLogin' },
   *   text: 'Sample message',
   * });
   * ```
   */
  create(body: MessageCreateParams, options?: RequestOptions): APIPromise<Message> {
    return this._client.post('/messaging/messages', {
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
   * Use this resource to get message with provided identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#szczegolowe-informacje-o-wiadomosci" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#information-about-a-particular-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const message = await client.messaging.messages.retrieve(
   *   'messageId',
   * );
   * ```
   */
  retrieve(messageID: string, options?: RequestOptions): APIPromise<Message> {
    return this._client.get(path`/messaging/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to delete message with provided identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#usuniecie-wiadomosci" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#delete-a-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.messaging.messages.delete('messageId');
   * ```
   */
  delete(messageID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/messaging/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Message {
  id: string;

  attachments: Array<Message.Attachment>;

  author: Message.Author;

  createdAt: string;

  hasAdditionalAttachments: boolean;

  relatesTo: Message.RelatesTo;

  status: 'VERIFYING' | 'BLOCKED' | 'DELIVERED' | 'INTERACTING' | 'DISMISSED';

  text: string;

  thread: Message.Thread;

  type: 'ASK_QUESTION' | 'MAIL' | 'MESSAGE_CENTER';

  /**
   * Contains optional contextual information linked to message.
   */
  additionalInformation?: Message.AdditionalInformation | null;

  subject?: string | null;
}

export namespace Message {
  export interface Attachment {
    fileName: string;

    status: 'NEW' | 'SAFE' | 'UNSAFE' | 'EXPIRED';

    mimeType?: string;

    url?: string;
  }

  export interface Author {
    isInterlocutor: boolean;

    login: string;
  }

  export interface RelatesTo {
    offer?: RelatesTo.Offer | null;

    order?: MessagesAPI.MessageOrder | null;
  }

  export namespace RelatesTo {
    export interface Offer {
      id: string;
    }
  }

  export interface Thread {
    id: string;
  }

  /**
   * Contains optional contextual information linked to message.
   */
  export interface AdditionalInformation {
    /**
     * Vehicle Information Number (VIN) provided by sender in addition to message
     * contents.
     */
    vin?: string | null;
  }
}

export interface MessageOrder {
  id: string;
}

export interface MessageCreateParams {
  order: MessageOrder | null;

  recipient: MessageCreateParams.Recipient;

  text: string;

  attachments?: Array<MessageAttachmentsAPI.MessageAttachmentID> | null;
}

export namespace MessageCreateParams {
  export interface Recipient {
    login: string;
  }
}

export declare namespace Messages {
  export {
    type Message as Message,
    type MessageOrder as MessageOrder,
    type MessageCreateParams as MessageCreateParams,
  };
}

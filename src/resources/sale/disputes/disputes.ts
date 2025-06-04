// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MessagesAPI from './messages';
import {
  DisputeAttachment,
  DisputeMessage,
  MessageCreateParams,
  MessageListParams,
  MessageListResponse,
  Messages,
} from './messages';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Disputes extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Use this resource to get a single dispute. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#szczegolowe-informacje-o-dyskusji" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#information-about-a-particular-discussion" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const dispute = await client.sale.disputes.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(disputeID: string, options?: RequestOptions): APIPromise<Dispute> {
    return this._client.get(path`/sale/disputes/${disputeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use this resource to get the list of your disputes ordered by descending opened
   * date. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#dyskusje-na-koncie" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#all-discussions" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const disputes = await client.sale.disputes.list();
   * ```
   */
  list(
    query: DisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeListResponse> {
    return this._client.get('/sale/disputes', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }
}

export interface Dispute {
  /**
   * Identifier of the dispute
   */
  id: string;

  buyer: Dispute.Buyer;

  checkoutForm: Dispute.CheckoutForm;

  lastMessageCreationDate: string;

  /**
   * Initial dispute message with text OR attachment OR both
   */
  message: Dispute.Message;

  messagesCount: number;

  messagesStatus: 'NEW' | 'SELLER_REPLIED' | 'BUYER_REPLIED' | 'ALLEGRO_ADVISOR_REPLIED';

  status: 'CLOSED' | 'ONGOING' | 'UNRESOLVED';

  /**
   * Subject of the dispute
   */
  subject: Dispute.Subject;

  /**
   * Buyer's claim data for the dispute.
   */
  claim?: Dispute.Claim;

  /**
   * Recent date when the dispute has been opened or reopened
   */
  openedDate?: string;
}

export namespace Dispute {
  export interface Buyer {
    id?: string;

    login?: string;
  }

  export interface CheckoutForm {
    id: string;

    createdAt: string;
  }

  /**
   * Initial dispute message with text OR attachment OR both
   */
  export interface Message {
    id: string;

    author: Message.Author;

    createdAt: string;

    attachment?: MessagesAPI.DisputeAttachment;

    text?: string;
  }

  export namespace Message {
    export interface Author {
      role: 'BUYER' | 'SELLER' | 'ADMIN' | 'FULFILLMENT';

      /**
       * Not present if role is ADMIN or FULFILLMENT
       */
      login?: string;
    }
  }

  /**
   * Subject of the dispute
   */
  export interface Subject {
    /**
     * Subject name
     */
    name?: string;
  }

  /**
   * Buyer's claim data for the dispute.
   */
  export interface Claim {
    /**
     * Details of the buyer's expectations for the dispute.
     */
    description?: string | null;

    /**
     * Type of the buyer's expectations for the dispute outcome.
     */
    name?: string | null;
  }
}

export interface DisputeListResponse {
  disputes?: Array<Dispute>;
}

export interface DisputeListParams {
  checkoutForm?: DisputeListParams.CheckoutForm;

  /**
   * The maximum number of disputes in a response.
   */
  limit?: number;

  /**
   * Index of first returned dispute.
   */
  offset?: number;

  /**
   * Filter disputes with given set of statuses.
   */
  status?: Array<'CLOSED' | 'ONGOING' | 'UNRESOLVED'>;
}

export namespace DisputeListParams {
  export interface CheckoutForm {
    /**
     * Checkout form identifier.
     */
    id?: string;
  }
}

Disputes.Messages = Messages;

export declare namespace Disputes {
  export {
    type Dispute as Dispute,
    type DisputeListResponse as DisputeListResponse,
    type DisputeListParams as DisputeListParams,
  };

  export {
    Messages as Messages,
    type DisputeAttachment as DisputeAttachment,
    type DisputeMessage as DisputeMessage,
    type MessageListResponse as MessageListResponse,
    type MessageCreateParams as MessageCreateParams,
    type MessageListParams as MessageListParams,
  };
}

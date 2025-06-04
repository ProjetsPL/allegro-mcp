// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessageAttachmentsAPI from './message-attachments';
import {
  MessageAttachmentCreateParams,
  MessageAttachmentID,
  MessageAttachmentUploadParams,
  MessageAttachments,
} from './message-attachments';
import * as MessagesAPI from './messages';
import { Message, MessageCreateParams, MessageOrder, Messages } from './messages';
import * as ThreadsAPI from './threads/threads';
import {
  Thread,
  ThreadListParams,
  ThreadListResponse,
  ThreadMarkAsReadParams,
  Threads,
} from './threads/threads';

export class Messaging extends APIResource {
  threads: ThreadsAPI.Threads = new ThreadsAPI.Threads(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);
  messageAttachments: MessageAttachmentsAPI.MessageAttachments = new MessageAttachmentsAPI.MessageAttachments(
    this._client,
  );
}

Messaging.Threads = Threads;
Messaging.Messages = Messages;
Messaging.MessageAttachments = MessageAttachments;

export declare namespace Messaging {
  export {
    Threads as Threads,
    type Thread as Thread,
    type ThreadListResponse as ThreadListResponse,
    type ThreadListParams as ThreadListParams,
    type ThreadMarkAsReadParams as ThreadMarkAsReadParams,
  };

  export {
    Messages as Messages,
    type Message as Message,
    type MessageOrder as MessageOrder,
    type MessageCreateParams as MessageCreateParams,
  };

  export {
    MessageAttachments as MessageAttachments,
    type MessageAttachmentID as MessageAttachmentID,
    type MessageAttachmentCreateParams as MessageAttachmentCreateParams,
    type MessageAttachmentUploadParams as MessageAttachmentUploadParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessageAttachments extends APIResource {
  /**
   * Use this resource to add attachment declaration before uploading. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#deklaracja-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#attachment-declaration" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const messageAttachmentID =
   *   await client.messaging.messageAttachments.create({
   *     filename: 'filename',
   *     size: 0,
   *   });
   * ```
   */
  create(body: MessageAttachmentCreateParams, options?: RequestOptions): APIPromise<MessageAttachmentID> {
    return this._client.post('/messaging/message-attachments', {
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
   * Use this resource to download attachment with provided identifier. Read more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#pobranie-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#attachment-related-to-the-message" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.messageAttachments.download(
   *     'attachmentId',
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(attachmentID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/messaging/message-attachments/${attachmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Use this resource to upload attachment using identifier that was declared. Read
   * more:
   * <a href="../../tutorials/jak-zarzadzac-centrum-wiadomosci-XxWm2K890Fk#dodanie-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-the-message-center-g05avyGlZUW#add-an-attachment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const messageAttachmentID =
   *   await client.messaging.messageAttachments.upload(
   *     'attachmentId',
   *     { body: fs.createReadStream('path/to/file') },
   *   );
   * ```
   */
  upload(
    attachmentID: string,
    params: MessageAttachmentUploadParams,
    options?: RequestOptions,
  ): APIPromise<MessageAttachmentID> {
    const { body } = params;
    return this._client.put(path`/messaging/message-attachments/${attachmentID}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'image/png', Accept: 'application/vnd.allegro.public.v1+json' },
        options?.headers,
      ]),
    });
  }
}

export interface MessageAttachmentID {
  id: string;
}

export interface MessageAttachmentCreateParams {
  filename: string;

  size: number;
}

export interface MessageAttachmentUploadParams {
  /**
   * File in a binary format
   */
  body: Uploadable;
}

export declare namespace MessageAttachments {
  export {
    type MessageAttachmentID as MessageAttachmentID,
    type MessageAttachmentCreateParams as MessageAttachmentCreateParams,
    type MessageAttachmentUploadParams as MessageAttachmentUploadParams,
  };
}

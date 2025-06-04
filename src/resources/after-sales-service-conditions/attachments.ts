// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Attachments extends APIResource {
  /**
   * You can attach PDF files to warranties. Uploading attachments flow:
   *
   * 1. Create an attachment object to receive an upload URL (_POST
   *    /after-sales-service-conditions/attachments_),
   * 2. Use the upload URL to submit the PDF file (_PUT
   *    /after-sales-service-conditions/attachments/{attachmentId}_),
   * 3. Create (or update) warranty with attachment (_POST
   *    /after-sales-service-conditions/warranties_).
   *
   * Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-zalacznik-do-informacji-o-gwarancjach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-attachment-to-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const afterSalesServiceAttachment =
   *   await client.afterSalesServiceConditions.attachments.create();
   * ```
   */
  create(body: AttachmentCreateParams, options?: RequestOptions): APIPromise<AfterSalesServiceAttachment> {
    return this._client.post('/after-sales-service-conditions/attachments', {
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
   * Upload an after sale services attachment. This operation should be used after
   * creating an offer attachment with _POST /sale/offer-attachments_ **Important!**
   * You can find the URL address to upload the file to our server in the _Location_
   * response header of _POST /after-sales-service-conditions/attachments_. The URL
   * is unique and one-time. As its format may change in time, you should always use
   * the address from the header. Do not compose the address on your own. Read more:
   * <a href="../../tutorials/jak-zarzadzac-ofertami-7GzB2L37ase#jak-dodac-zalacznik-do-informacji-o-gwarancjach" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-process-list-of-offers-m09BKA5v8H3#how-to-add-attachment-to-warranty-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const afterSalesServiceAttachment =
   *   await client.afterSalesServiceConditions.attachments.upload(
   *     'attachmentId',
   *   );
   * ```
   */
  upload(
    attachmentID: string,
    params: AttachmentUploadParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<AfterSalesServiceAttachment> {
    const { body } = params ?? {};
    return this._client.put(path`/after-sales-service-conditions/attachments/${attachmentID}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/pdf', Accept: 'application/vnd.allegro.public.v1+json' },
        options?.headers,
      ]),
    });
  }
}

export interface AfterSalesServiceAttachment {
  /**
   * The Id of the attachment.
   */
  id?: string;

  /**
   * Attachment file name.
   */
  name?: string;

  /**
   * Direct link to the attachment.
   */
  url?: string;
}

export interface AttachmentCreateParams {
  name?: string;
}

export interface AttachmentUploadParams {
  /**
   * File in a binary format
   */
  body?: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Attachments {
  export {
    type AfterSalesServiceAttachment as AfterSalesServiceAttachment,
    type AttachmentCreateParams as AttachmentCreateParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };
}

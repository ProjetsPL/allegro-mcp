// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DisputeAttachments extends APIResource {
  /**
   * Use this resource to post an attachment declaration. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#deklaracja-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#attachment-declaration" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const disputeAttachment =
   *   await client.sale.disputeAttachments.create({
   *     fileName: 'fileName',
   *     size: 128,
   *   });
   * ```
   */
  create(
    body: DisputeAttachmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DisputeAttachmentCreateResponse> {
    return this._client.post('/sale/dispute-attachments', {
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
   * Use this resource to get an attachment. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#pobranie-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#attachment-related-to-the-discussion" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const disputeAttachment =
   *   await client.sale.disputeAttachments.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   *
   * const content = await disputeAttachment.blob();
   * console.log(content);
   * ```
   */
  retrieve(attachmentID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/sale/dispute-attachments/${attachmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a dispute message attachment. This operation should be used after
   * creating an attachment declaration with _POST /sale/dispute-attachments_
   * **Important!** You can find the URL address to upload the file to our server in
   * the _Location_ response header of _POST /sale/dispute-attachments_. The URL is
   * unique and one-time. As its format may change in time, you should always use the
   * address from the header. Do not compose the address on your own. Read more:
   * <a href="../../tutorials/jak-zarzadzac-dyskusjami-E7Zj6gK7ysE#dodanie-zalacznika" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/how-to-manage-discussions-VL6Yr40e5t5#adding-an-attachment" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.sale.disputeAttachments.upload(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { body: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  upload(
    attachmentID: string,
    params: DisputeAttachmentUploadParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.put(path`/sale/dispute-attachments/${attachmentID}`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'image/png', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DisputeAttachmentCreateResponse {
  id: string;
}

export interface DisputeAttachmentCreateParams {
  fileName: string;

  size: number;
}

export interface DisputeAttachmentUploadParams {
  /**
   * File in a binary format
   */
  body: Uploadable;
}

export declare namespace DisputeAttachments {
  export {
    type DisputeAttachmentCreateResponse as DisputeAttachmentCreateResponse,
    type DisputeAttachmentCreateParams as DisputeAttachmentCreateParams,
    type DisputeAttachmentUploadParams as DisputeAttachmentUploadParams,
  };
}

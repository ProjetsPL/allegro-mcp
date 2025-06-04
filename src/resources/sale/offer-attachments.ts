// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class OfferAttachments extends APIResource {
  /**
   * You can attach pdf, jpeg or png files to your offers. We will present them under
   * the offer description in the Additional information section. You can attach up
   * to 9 files to one offer – one per each type from the list:
   *
   * - Guide (MANUAL). Allowed media types: PDF
   * - Special offer terms (SPECIAL_OFFER_RULES). Allowed media types: PDF
   * - Competition terms (COMPETITION_RULES). Allowed media types: PDF
   * - Book excerpt (BOOK_EXCERPT). Allowed media types: PDF
   * - Manual (USER_MANUAL). Allowed media types: PDF
   * - Installation manual (INSTALLATION_INSTRUCTIONS). Allowed media types: PDF
   * - Game manual (GAME_INSTRUCTIONS). Allowed media types: PDF
   * - Energy label (ENERGY_LABEL). Allowed media types: JPEG, JPG, PNG
   * - Product information sheet (PRODUCT_INFORMATION_SHEET). Allowed media types:
   *   PDF
   * - Tire label (TIRE_LABEL). Allowed media types: JPEG, JPG, PNG
   *
   * You can attach up to 20 files to one product for:
   *
   * - Safety information manual (SAFETY_INFORMATION_MANUAL). Allowed media types:
   *   PDF, JPEG, JPG, PNG
   *
   * Uploading attachments flow:
   *
   * 1. Create an attachment object to receive an upload URL (_POST
   *    /sale/offer-attachments_),
   * 2. Use the upload URL to submit the file (_PUT
   *    /sale/offer-attachments/{attachmentId}_),
   * 3. Add attachments to the offer (_PATCH /sale/product-offers/{offerId}_).
   *
   * Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zalaczniki" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#attachments" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerAttachment =
   *   await client.sale.offerAttachments.create();
   * ```
   */
  create(body: OfferAttachmentCreateParams, options?: RequestOptions): APIPromise<OfferAttachment> {
    return this._client.post('/sale/offer-attachments', {
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
   * Get details of an offer attachments, including download link, by attachment
   * identifier ("attachmentId"). The attachment id can be retrieved by querying a
   * particular offer, for example by using
   * <a href="#operation/getProductOffer">`GET /sale/product-offers/{offerId}`</a>.
   *
   * @example
   * ```ts
   * const offerAttachment =
   *   await client.sale.offerAttachments.retrieve(
   *     'attachmentId',
   *   );
   * ```
   */
  retrieve(attachmentID: string, options?: RequestOptions): APIPromise<OfferAttachment> {
    return this._client.get(path`/sale/offer-attachments/${attachmentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Upload an offer attachment. This operation should be used after creating an
   * offer attachment with _POST /sale/offer-attachments_ **Important!** You can find
   * the URL address to upload the file to our server in the _Location_ response
   * header of _POST /sale/offer-attachments_. The URL is unique and one-time. As its
   * format may change in time, you should always use the address from the header. Do
   * not compose the address on your own. Read more:
   * <a href="../../tutorials/jak-jednym-requestem-wystawic-oferte-powiazana-z-produktem-D7Kj9gw4xFA#zalaczniki" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/list-offer-assigned-product-one-request-D7Kj9M71Bu6#attachments" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const offerAttachment =
   *   await client.sale.offerAttachments.upload('attachmentId');
   * ```
   */
  upload(
    attachmentID: string,
    params: OfferAttachmentUploadParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<OfferAttachment> {
    const { body } = params ?? {};
    return this._client.put(path`/sale/offer-attachments/${attachmentID}`, {
      body: body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/pdf', Accept: 'application/vnd.allegro.public.v1+json' },
        options?.headers,
      ]),
    });
  }
}

export interface OfferAttachment {
  id?: string;

  file?: OfferAttachment.File;

  /**
   * offer attachment type
   */
  type?:
    | 'MANUAL'
    | 'SPECIAL_OFFER_RULES'
    | 'COMPETITION_RULES'
    | 'BOOK_EXCERPT'
    | 'USER_MANUAL'
    | 'INSTALLATION_INSTRUCTIONS'
    | 'GAME_INSTRUCTIONS'
    | 'ENERGY_LABEL'
    | 'PRODUCT_INFORMATION_SHEET'
    | 'TIRE_LABEL'
    | 'SAFETY_INFORMATION_MANUAL';
}

export namespace OfferAttachment {
  export interface File {
    name?: string;

    url?: string;
  }
}

export interface OfferAttachmentCreateParams {
  file?: OfferAttachmentCreateParams.File;

  /**
   * offer attachment type
   */
  type?:
    | 'MANUAL'
    | 'SPECIAL_OFFER_RULES'
    | 'COMPETITION_RULES'
    | 'BOOK_EXCERPT'
    | 'USER_MANUAL'
    | 'INSTALLATION_INSTRUCTIONS'
    | 'GAME_INSTRUCTIONS'
    | 'ENERGY_LABEL'
    | 'PRODUCT_INFORMATION_SHEET'
    | 'TIRE_LABEL'
    | 'SAFETY_INFORMATION_MANUAL';
}

export namespace OfferAttachmentCreateParams {
  export interface File {
    name?: string;
  }
}

export interface OfferAttachmentUploadParams {
  /**
   * File in a binary format
   */
  body?: Uploadable;
}

export declare namespace OfferAttachments {
  export {
    type OfferAttachment as OfferAttachment,
    type OfferAttachmentCreateParams as OfferAttachmentCreateParams,
    type OfferAttachmentUploadParams as OfferAttachmentUploadParams,
  };
}

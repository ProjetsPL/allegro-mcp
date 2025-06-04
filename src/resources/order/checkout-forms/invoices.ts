// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Use to add new invoice metadata. Before you send an invoice file, you need to
   * initialize the invoice instance with the required parameters. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-fakture-do-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-an-invoice-to-the-order" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const invoice =
   *   await client.order.checkoutForms.invoices.create('id', {
   *     file: { name: 'name' },
   *   });
   * ```
   */
  create(id: string, body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post(path`/order/checkout-forms/${id}/invoices`, {
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
   * Use to get invoices details including antivirus scan results and EPT invoice
   * verification status. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-pobrac-informacje-o-fakturach-dodanych-do-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#retrieve-information-about-invoices" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const invoices =
   *   await client.order.checkoutForms.invoices.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<InvoiceListResponse> {
    return this._client.get(path`/order/checkout-forms/${id}/invoices`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/vnd.allegro.public.v1+json' }, options?.headers]),
    });
  }

  /**
   * Use to upload invoice file to match created invoice metadata. Read more:
   * <a href="../../tutorials/jak-obslugiwac-zamowienia-GRaj0qyvwtR#jak-dodac-fakture-do-zamowienia" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/process-orders-PgPMlWDr8Cv#add-an-invoice-to-the-order" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * await client.order.checkoutForms.invoices.uploadFile(
   *   'invoiceId',
   *   { id: 'id' },
   * );
   * ```
   */
  uploadFile(invoiceID: string, params: InvoiceUploadFileParams, options?: RequestOptions): APIPromise<void> {
    const { id, body } = params;
    return this._client.put(path`/order/checkout-forms/${id}/invoices/${invoiceID}/file`, {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/pdf', Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InvoiceCreateResponse {
  id?: string;
}

export interface InvoiceListResponse {
  /**
   * Informs whether an invoice or a proof-of-purchase has been sent outside of
   * Allegro platform
   */
  hasExternalInvoices?: boolean;

  invoices?: Array<InvoiceListResponse.Invoice>;
}

export namespace InvoiceListResponse {
  export interface Invoice {
    id?: string;

    createdAt?: string;

    file?: Invoice.File;

    invoiceNumber?: string;
  }

  export namespace Invoice {
    export interface File {
      name?: string;

      securityVerification?: File.SecurityVerification;

      uploadedAt?: string;
    }

    export namespace File {
      export interface SecurityVerification {
        status?: 'ACCEPTED' | 'REJECTED' | 'WAITING';

        verifiedAt?: string;
      }
    }
  }
}

export interface InvoiceCreateParams {
  file: InvoiceCreateParams.File;

  invoiceNumber?: string;
}

export namespace InvoiceCreateParams {
  export interface File {
    name: string;
  }
}

export interface InvoiceUploadFileParams {
  /**
   * Path param: Order identifier.
   */
  id: string;

  /**
   * Body param: File in a binary format
   */
  body?: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Invoices {
  export {
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUploadFileParams as InvoiceUploadFileParams,
  };
}

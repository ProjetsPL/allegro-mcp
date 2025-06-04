// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResponsibleProducersAPI from './responsible-producers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ResponsibleProducers extends APIResource {
  /**
   * Use this resource to create a new responsible producer for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsibleProducerResponse =
   *   await client.sale.responsibleProducers.create({
   *     Accept: 'application/vnd.allegro.public.v1+json',
   *   });
   * ```
   */
  create(
    params: ResponsibleProducerCreateParams,
    options?: RequestOptions,
  ): APIPromise<ResponsibleProducerResponse> {
    const { Accept, ...body } = params;
    return this._client.post('/sale/responsible-producers', {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: Accept },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a responsible producer for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsibleProducerResponse =
   *   await client.sale.responsibleProducers.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { Accept: 'application/vnd.allegro.public.v1+json' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: ResponsibleProducerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ResponsibleProducerResponse> {
    const { Accept } = params;
    return this._client.get(path`/sale/responsible-producers/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: Accept }, options?.headers]),
    });
  }

  /**
   * Use this resource to update the responsible producer for the compliance of the
   * product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsibleProducerResponse =
   *   await client.sale.responsibleProducers.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { Accept: 'application/vnd.allegro.public.v1+json' },
   *   );
   * ```
   */
  update(
    pathID: string,
    params: ResponsibleProducerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ResponsibleProducerResponse> {
    const { Accept, ...body } = params;
    return this._client.put(path`/sale/responsible-producers/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/vnd.allegro.public.v1+json', Accept: Accept },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this resource to get a list of responsible producers for the compliance of
   * the product with EU regulations. Read more:
   * <a href="../../tutorials/jak-zarzadzac-kontem-danymi-uzytkownika-ZM9YAKgPgi2#dane-teleadresowe-producenta" target="_blank">PL</a>
   * /
   * <a href="../../tutorials/account-and-user-data-management-jn9vBjqjnsw#responsible-producers-contact-information" target="_blank">EN</a>.
   *
   * @example
   * ```ts
   * const responsibleProducers =
   *   await client.sale.responsibleProducers.list({
   *     Accept: 'application/vnd.allegro.public.v1+json',
   *   });
   * ```
   */
  list(
    params: ResponsibleProducerListParams,
    options?: RequestOptions,
  ): APIPromise<ResponsibleProducerListResponse> {
    const { Accept, ...query } = params;
    return this._client.get('/sale/responsible-producers', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: Accept }, options?.headers]),
    });
  }
}

/**
 * Responsible producer address.
 */
export interface ResponsibleProducerAddress {
  /**
   * City.
   */
  city?: string;

  /**
   * Code of responsible producer country (ISO 3166).
   */
  countryCode?: string;

  /**
   * Postal code.
   */
  postalCode?: string;

  /**
   * Street and number.
   */
  street?: string;
}

/**
 * Contact to responsible producer. At least one of the following fields is
 * required: `email` or `formUrl`.
 */
export interface ResponsibleProducerContact {
  /**
   * Email of responsible producer.
   */
  email?: string;

  /**
   * URL address to contact form.
   */
  formUrl?: string;

  /**
   * Phone number of responsible producer. This field is optional.
   */
  phoneNumber?: string;
}

export interface ResponsibleProducerResponse {
  /**
   * Responsible producer ID.
   */
  id?: string;

  /**
   * Internal name of responsible producer in dictionary.
   */
  name?: string;

  /**
   * Responsible producer data.
   */
  producerData?: ResponsibleProducerResponse.ProducerData;
}

export namespace ResponsibleProducerResponse {
  /**
   * Responsible producer data.
   */
  export interface ProducerData {
    /**
     * Responsible producer address.
     */
    address?: ResponsibleProducersAPI.ResponsibleProducerAddress;

    /**
     * Contact to responsible producer. At least one of the following fields is
     * required: `email` or `formUrl`.
     */
    contact?: ResponsibleProducersAPI.ResponsibleProducerContact;

    /**
     * Name of company, first name and last name or trade name of company responsible
     * for producing product.
     */
    tradeName?: string;
  }
}

export interface ResponsibleProducerListResponse {
  /**
   * Number of responsible producers data returned in search result for the given
   * parameters.
   */
  count?: number;

  responsibleProducers?: Array<ResponsibleProducerResponse>;

  /**
   * Total number of available responsible producers data.
   */
  totalCount?: number;
}

export interface ResponsibleProducerCreateParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Body param: Internal name of responsible producer in dictionary (visible only to
   * you). Can't start or end with whitespace. Can't contain whitespaces other than
   * space. Can't contain multiple spaces in a row.
   */
  name?: string;

  /**
   * Body param: Responsible producer data.
   */
  producerData?: ResponsibleProducerCreateParams.ProducerData;
}

export namespace ResponsibleProducerCreateParams {
  /**
   * Responsible producer data.
   */
  export interface ProducerData {
    /**
     * Responsible producer address.
     */
    address?: ResponsibleProducersAPI.ResponsibleProducerAddress;

    /**
     * Contact to responsible producer. At least one of the following fields is
     * required: `email` or `formUrl`.
     */
    contact?: ResponsibleProducersAPI.ResponsibleProducerContact;

    /**
     * Name of company, first name and last name or trade name of company responsible
     * for producing product.
     */
    tradeName?: string;
  }
}

export interface ResponsibleProducerRetrieveParams {
  /**
   * Acceptable representation of the response.
   */
  Accept: string;
}

export interface ResponsibleProducerUpdateParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Body param: Responsible producer ID.
   */
  body_id?: string;

  /**
   * Body param: Internal name of responsible producer in dictionary (visible only to
   * you). Can't start or end with whitespace. Can't contain whitespaces other than
   * space. Can't contain multiple spaces in a row.
   */
  name?: string;

  /**
   * Body param: Responsible producer data.
   */
  producerData?: ResponsibleProducerUpdateParams.ProducerData;
}

export namespace ResponsibleProducerUpdateParams {
  /**
   * Responsible producer data.
   */
  export interface ProducerData {
    /**
     * Responsible producer address.
     */
    address?: ResponsibleProducersAPI.ResponsibleProducerAddress;

    /**
     * Contact to responsible producer. At least one of the following fields is
     * required: `email` or `formUrl`.
     */
    contact?: ResponsibleProducersAPI.ResponsibleProducerContact;

    /**
     * Name of company, first name and last name or trade name of company responsible
     * for producing product.
     */
    tradeName?: string;
  }
}

export interface ResponsibleProducerListParams {
  /**
   * Header param: Acceptable representation of the response.
   */
  Accept: string;

  /**
   * Query param: Number of returned responsible producers data.
   */
  limit?: number;

  /**
   * Query param: Index of first returned responsible producers data from all search
   * results.
   */
  offset?: number;
}

export declare namespace ResponsibleProducers {
  export {
    type ResponsibleProducerAddress as ResponsibleProducerAddress,
    type ResponsibleProducerContact as ResponsibleProducerContact,
    type ResponsibleProducerResponse as ResponsibleProducerResponse,
    type ResponsibleProducerListResponse as ResponsibleProducerListResponse,
    type ResponsibleProducerCreateParams as ResponsibleProducerCreateParams,
    type ResponsibleProducerRetrieveParams as ResponsibleProducerRetrieveParams,
    type ResponsibleProducerUpdateParams as ResponsibleProducerUpdateParams,
    type ResponsibleProducerListParams as ResponsibleProducerListParams,
  };
}
